"""Fetch the newest golf headlines from lrbears.com and save them to headlines.json.

Reads the men's and women's golf news feeds, keeps the 8 newest stories
(title, link, date, team) and writes headlines.json only if something changed.
If the feeds can't be read, the existing headlines.json is left untouched.
"""
import json, sys, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from pathlib import Path

FEEDS = {
    "men":   "https://lrbears.com/rss.aspx?path=mgolf",
    "women": "https://lrbears.com/rss.aspx?path=wgolf",
}
OUT = Path(__file__).resolve().parents[2] / "headlines.json"
KEEP = 8

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (LR Golf site headline sync)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

items, errors = [], []
for team, url in FEEDS.items():
    try:
        root = ET.fromstring(fetch(url))
        for it in root.iter("item"):
            title = (it.findtext("title") or "").strip()
            link = (it.findtext("link") or "").strip()
            pub = it.findtext("pubDate") or ""
            try:
                date = parsedate_to_datetime(pub).date().isoformat()
            except Exception:
                date = ""
            if title and link.startswith("https://lrbears.com/"):
                items.append({"date": date, "team": team, "title": title, "url": link})
    except Exception as e:
        errors.append(f"{team}: {e.__class__.__name__}: {e}")

summary = []
if not items:
    summary.append("Could not read any lrbears.com golf feed; headlines.json left unchanged.")
    summary += errors
    print("\n".join(summary))
    sys.exit(0)

seen, uniq = set(), []
for i in sorted(items, key=lambda x: x["date"], reverse=True):
    if i["url"] not in seen:
        seen.add(i["url"]); uniq.append(i)
data = {"source": "lrbears.com", "items": uniq[:KEEP]}
new = json.dumps(data, indent=2, ensure_ascii=False) + "\n"
old = OUT.read_text(encoding="utf-8") if OUT.exists() else ""
if new != old:
    OUT.write_text(new, encoding="utf-8")
    summary.append(f"Updated headlines.json with {len(data['items'])} stories.")
else:
    summary.append("No new headlines.")
summary += [f"- {i['date']} [{i['team']}] {i['title']}" for i in data["items"]]
if errors:
    summary.append("Feed errors: " + "; ".join(errors))
print("\n".join(summary))
