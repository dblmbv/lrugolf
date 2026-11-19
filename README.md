# Lenoir-Rhyne Golf Website (v1, draft for coaching staff review)

FILES
  index.html   The website: layout, design and pages. No need to edit for routine updates.
  content.js   ALL site content: rosters, schedules, results, news, coaches, links.
  images/      (create this folder) Put approved photos here.

TO VIEW: keep both files in the same folder and open index.html in a browser.

TO UPDATE (no rebuild needed) — open content.js in any text editor:
  - Add a result:      find the event in mensSchedule/womensSchedule, set result: "3rd of 12 teams"
                       (add  win: true  for a team title)
  - Add/remove player: copy or delete one line in mensRoster/womensRoster
  - Add news:          copy one line in news, change date/title/summary/body
  - Add a photo:       save to images/, then set photo: "images/filename.jpg"
                       (players, coaches, news, gallery; program.heroPhoto for the homepage banner)
  - Coach bios, program overview, recruiting text: fill in the empty "" fields
Save, refresh the browser. Anything left empty shows a yellow "to be provided" placeholder.

BEFORE PUBLISHING
  - Replace the "Official LR logo" box in index.html with the logo file from the LR Brand Toolkit
  - Confirm the red (#A41F2F) with the university brand guide
  - Remove the yellow draft banner at the top of index.html
  - Have the coaching staff approve all content
