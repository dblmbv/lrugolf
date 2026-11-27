// Content gate for the Lenoir-Rhyne Golf website.
// Runs on every pull request and every change to main. Fails (red X) if content.js
// contains something that contradicts the site's own data:
//   1. content.js does not load (a typo would blank the site)
//   2. a result is entered for an event that has not finished yet
//   3. a result is not in the form "3rd of 15 teams", the place is larger than the field,
//      or win: true is set on anything but a 1st-place finish
//   4. round scores in a news story do not add up to the total in the same sentence
//   5. a news story names a player from the other team's roster
//   6. a news story's source is not an lrbears.com link
// It cannot catch a wrong number that is internally consistent; that still needs a human.
const path = require('path');
const problems = [];
global.window = {};
try { require(path.resolve(__dirname, '../../content.js')); }
catch (e) { console.log('FAIL content.js does not load: ' + e.message); process.exit(1); }
const S = window.SITE;
const today = new Date().toISOString().slice(0, 10);

for (const [team, list] of [['men', S.mensSchedule], ['women', S.womensSchedule]]) {
  for (const ev of list) {
    if (!ev.result) continue;
    const where = `${team === 'men' ? "Men's" : "Women's"} schedule, ${ev.name} (${ev.start})`;
    if ((ev.end || ev.start) >= today) problems.push(`${where}: has a result ("${ev.result}") but the event has not finished yet (ends ${ev.end || ev.start}).`);
    const m = ev.result.match(/^(T-)?(\d+)(st|nd|rd|th) of (\d+) teams$/);
    if (!m) problems.push(`${where}: result "${ev.result}" is not in the form "3rd of 15 teams".`);
    else {
      if (+m[2] > +m[4]) problems.push(`${where}: place ${m[2]} is larger than the field of ${m[4]}.`);
      if (ev.win && (+m[2] !== 1 || m[1])) problems.push(`${where}: marked as a team title but the result is "${ev.result}".`);
    }
  }
}

const men = S.mensRoster.map(p => p.name), women = S.womensRoster.map(p => p.name);
for (const n of S.news) {
  const where = `News "${n.title}" (${n.date})`;
  const body = [].concat(n.body || []);
  const all = [n.title, n.summary, ...body].join(' ');
  const other = n.team === 'men' ? women : n.team === 'women' ? men : [];
  for (const name of other) if (all.includes(name))
    problems.push(`${where}: names ${name}, who is on the ${n.team === 'men' ? "women's" : "men's"} roster, in a ${n.team === 'men' ? "men's" : "women's"} story.`);
  if (n.source && !/^https:\/\/lrbears\.com\//.test(n.source)) problems.push(`${where}: source is not an lrbears.com link.`);
  for (const sentence of all.split(/(?<=[.!?])\s+/)) {
    const totals = (sentence.match(/\b(1[5-9]\d|2\d\d|3[0-5]\d)\b/g) || []).map(Number);
    if (!totals.length) continue;
    for (const seq of sentence.match(/\b\d{2}(?:-\d{2}){2,3}\b/g) || []) {
      const rounds = seq.split('-').map(Number);
      if (rounds.some(r => r < 55 || r > 99)) continue;
      const sum = rounds.reduce((a, b) => a + b, 0);
      if (!totals.includes(sum)) problems.push(`${where}: rounds ${seq} add up to ${sum}, but the sentence gives ${totals.join(' / ')}.`);
    }
  }
}

if (problems.length) {
  console.log(`FAIL ${problems.length} problem(s) found. Fix these before merging:\n`);
  problems.forEach((p, i) => console.log(`${i + 1}. ${p}`));
  process.exit(1);
}
console.log('PASS content.js loads, results match finished events, scores add up, players match their teams.');
