# Lenoir-Rhyne Golf Website

Website for the Lenoir-Rhyne University men's and women's golf programs.
Live site: https://dblmbv.github.io/lrugolf/

Draft for coaching staff review. Remove the yellow "Draft" banner at the top of `index.html` once the content is approved.

## Files

| File | What it is |
|---|---|
| `index.html` | The website: design, layout, pages. You rarely need to edit it. |
| `content.js` | **All content**: rosters, bios, coaches, schedules, results, news, links. Edit this for updates. |
| `README.md` | These instructions. |
| `images/` | All photos and the logo. |

**Both `index.html` and `content.js` must be at the top level of the repository**, not inside another folder.

## Photos

The site is already set up for every photo below. Upload a picture into the `images` folder with
**exactly** this file name (lowercase, hyphens, `.jpg`) and it appears automatically.
Until then, the person's initials are shown.

To upload: open the `images` folder on GitHub, then **Add file → Upload files → Commit changes**.
Headshots look best tall (4:5, e.g. 800 × 1000 pixels) and under 1 MB.
Use only photos the program has permission to publish (ask LR Athletics communications for official headshots).

### Logo
| Item | File name |
|---|---|
| Header logo | `images/lr-logo.png` |

### Coaches
| Name | File name |
|---|---|
| Chris Jones | `images/chris-jones.jpg` |
| Dilyara Bulambayeva | `images/dilyara-bulambayeva.jpg` |

### Men's golf
| Name | Year | File name |
|---|---|---|
| David Gee | Fr. | `images/david-gee.jpg` |
| Adam Gregg | Sr. | `images/adam-gregg.jpg` |
| Phillipp Hottinger | Sr. | `images/phillipp-hottinger.jpg` |
| Will Johnston | Fr. | `images/will-johnston.jpg` |
| Kadan Jones | So. | `images/kadan-jones.jpg` |
| Conley Killian | Jr. | `images/conley-killian.jpg` |
| Stanislaus Koch | Jr. | `images/stanislaus-koch.jpg` |
| Flynn Lewis | Fr. | `images/flynn-lewis.jpg` |
| Nicholas Lombardo | So. | `images/nicholas-lombardo.jpg` |
| Rodrigo Lugo | Gr. | `images/rodrigo-lugo.jpg` |
| Johnny Malinowski | Fr. | `images/johnny-malinowski.jpg` |
| Archie Mathers | Sr. | `images/archie-mathers.jpg` |
| Brady McIntyre | Fr. | `images/brady-mcintyre.jpg` |
| Jared Myers | So. | `images/jared-myers.jpg` |
| Nicklaus Newton | So. | `images/nicklaus-newton.jpg` |
| David Quinones | Fr. | `images/david-quinones.jpg` |

### Women's golf
| Name | Year | File name |
|---|---|---|
| Danielle Bekker | Sr. | `images/danielle-bekker.jpg` |
| Charlotte Colley | Sr. | `images/charlotte-colley.jpg` |
| Sarah Durham | Sr. | `images/sarah-durham.jpg` |
| Emily Gilmour | So. | `images/emily-gilmour.jpg` |
| Gabriella Gonzalez | Fr. | `images/gabriella-gonzalez.jpg` |
| Kajsa Hederas | Fr. | `images/kajsa-hederas.jpg` |
| Pink Mangan | So. | `images/pink-mangan.jpg` |
| Reese Merrell | Fr. | `images/reese-merrell.jpg` |
| Eve Neild | Sr. | `images/eve-neild.jpg` |
| Ava Palmer | Fr. | `images/ava-palmer.jpg` |
| Jaya Wilkinson | Sr. | `images/jaya-wilkinson.jpg` |

### Other photos (optional)
- **Homepage banner:** in `content.js`, under `program:`, add a line `heroPhoto: "images/team-photo.jpg",`
- **News stories:** set `photo: "images/file-name.jpg"` on the news item
- **Gallery:** replace `gallery: [],` with entries like
  `{ src: "images/lr-invite.jpg", caption: "LR Fall Invitational", category: "Tournament" },`

## Bios

All bios are in `content.js`, taken from the official player and coach pages on lrbears.com (Nov. 2026).
- **Coaches:** each has `bio` (paragraphs) and `background` (list).
- **Players:** each has `major`, `height`, and `bio` (one line per season or highlight).
  Clicking a player card on the site opens their full profile.
- Freshmen have `bio: []` because lrbears.com has no bio for them yet; the site shows "Bio to be added".

To add or change a bio line, keep the format: text in double quotes, followed by a comma:
```js
bio: [
  "2026-27 (Freshman): First line here.",
  "Second line here.",
],
```

## Common updates (edit `content.js` on GitHub with the pencil icon, then Commit changes)

- **Post a result:** find the event in `mensSchedule` or `womensSchedule` and set `result: "3rd of 12 teams"`. Add `win: true` for a team title.
- **Add a news story:** copy a line in `news`, paste it at the top, change the date, team, title and summary.
- **Add or remove a player:** copy or delete one line in `mensRoster` or `womensRoster`.

The live site updates 1–2 minutes after each commit. Refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac).

## If something breaks

A blank page after an edit almost always means a missing comma or quotation mark in `content.js`.
Open `content.js` → **History**, compare your last change, and fix that line.

## Before publishing

- [ ] Coaching staff approves all content
- [ ] Official logo use approved by LR Athletics / Marketing
- [ ] Draft banner removed from `index.html`
