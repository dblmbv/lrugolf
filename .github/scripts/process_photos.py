"""Turn photos dropped into photos-to-add/ into website-ready headshots.

For each file in photos-to-add/:
  1. Match it to a player or coach by name (from the photo: lines in content.js).
     "Eve Neild.jpg", "eve_neild.PNG", "Neild Eve.jpeg", "eve-neild-2026.heic" all match.
  2. Fix rotation, crop to a 4:5 portrait (keeping the top of the photo), resize to 800x1000.
  3. Save as images/<name>.jpg (replacing any older photo) and delete the original.
Files that don't match anyone are left in place and listed in the run summary.
"""
import os, re, sys, unicodedata
from pathlib import Path
from PIL import Image, ImageOps

try:  # iPhone HEIC photos
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

ROOT = Path(__file__).resolve().parents[2]
INBOX, OUT = ROOT / "photos-to-add", ROOT / "images"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"}
W, H = 800, 1000

def tokens(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    return [t for t in re.split(r"[^a-z]+", s) if t]

content = (ROOT / "content.js").read_text(encoding="utf-8")
targets = sorted(set(re.findall(r'photo:\s*"images/([a-z0-9\-]+)\.jpg"', content)))
people = {slug: set(slug.split("-")) for slug in targets}

def match(filename):
    toks = set(tokens(Path(filename).stem))
    hits = [slug for slug, parts in people.items() if parts <= toks]
    if len(hits) > 1:  # e.g. "David Gee" vs another David: prefer the most specific
        hits.sort(key=lambda s: -len(people[s]))
        if len(people[hits[0]]) == len(people[hits[1]]):
            return None
    return hits[0] if hits else None

def process(src, dst):
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = im.size
    if w / h > W / H:                      # too wide: trim the sides evenly
        nw = round(h * W / H); left = (w - nw) // 2
        im = im.crop((left, 0, left + nw, h))
    else:                                  # too tall: keep the top (faces), trim the bottom
        nh = round(w * H / W); top = round((h - nh) * 0.15)
        im = im.crop((0, top, w, top + nh))
    im.resize((W, H), Image.LANCZOS).save(dst, "JPEG", quality=85, optimize=True, progressive=True)

done, skipped = [], []
OUT.mkdir(exist_ok=True)
for f in sorted(INBOX.iterdir()) if INBOX.exists() else []:
    if f.name.startswith(".") or f.name.lower() == "readme.md":
        continue
    if f.suffix.lower() not in EXTS:
        skipped.append((f.name, "not a photo file")); continue
    slug = match(f.name)
    if not slug:
        skipped.append((f.name, "name doesn't match a player or coach")); continue
    try:
        process(f, OUT / f"{slug}.jpg"); f.unlink(); done.append((f.name, slug))
    except Exception as e:
        skipped.append((f.name, f"could not open image ({e.__class__.__name__})"))

lines = ["## Roster photos", ""]
lines += [f"- ✅ `{a}` → `images/{b}.jpg`" for a, b in done] or ["- No photos added."]
if skipped:
    lines += ["", "**Not added (still in photos-to-add):**"] + [f"- ⚠️ `{a}`: {b}" for a, b in skipped]
report = "\n".join(lines)
print(report)
if os.environ.get("GITHUB_STEP_SUMMARY"):
    with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as fh:
        fh.write(report + "\n")
