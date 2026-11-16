/* =====================================================================
   LENOIR-RHYNE GOLF WEBSITE — SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file coaches need to edit for routine updates.
   - Rosters, schedules, results, news, coaches, contacts all live here.
   - Keep the commas and quotation marks exactly as shown.
   - Dates use the format "YYYY-MM-DD".
   - Leave a field as "" (empty) if the information isn't available yet;
     the site will show a clearly labeled placeholder instead.
   - Photos: put image files in an /images folder and set photo: "images/name.jpg"
   Source of initial data: lrbears.com 2026-27 rosters, schedules, coaches
   (retrieved Nov. 11, 2026). Review everything before publishing.
   ===================================================================== */

window.SITE = {

  season: "2026-27",

  program: {
    name: "Lenoir-Rhyne Golf",
    university: "Lenoir-Rhyne University",
    location: "Hickory, N.C.",
    conference: "South Atlantic Conference (SAC)",
    division: "NCAA Division II",
    // PLACEHOLDER — coaches to write the official program overview.
    overview: "Lenoir-Rhyne University is home to both men's and women's NCAA Division II golf teams competing in the South Atlantic Conference (SAC). Based in Hickory, North Carolina, the Bears focus on developing talented student-athletes who value teamwork, dedication, sportsmanship, and academic sucess. Both programs compete in tournaments across the country while representing LR with pride ",
    athleticsSite: "https://lrbears.com",
    mensOfficialPage: "https://lrbears.com/sports/mens-golf",
    womensOfficialPage: "https://lrbears.com/sports/womens-golf",
  },

  social: [
    { label: "Golf on Instagram",    url: "https://instagram.com/lrubearsgolf" },
    { label: "LR Bears Facebook",    url: "https://www.facebook.com/LRBears" },
    { label: "LR Bears Instagram",   url: "https://www.instagram.com/bearssports/" },
  ],

  coaches: [
    {
      name: "Chris Jones",
      title: "Head Men's & Women's Golf Coach",
      email: "Christopher.Jones@lr.edu",
      phone: "",
      photo: "",
      bio: "",          // PLACEHOLDER — official bio to be provided
      background: "",   // PLACEHOLDER — coaching background
    },
    {
      name: "Dilyara Bulambayeva",
      title: "Men's & Women's Golf Graduate Assistant",
      email: "Dilyara.Bulambayeva@my.lr.edu",
      phone: "",
      photo: "",
      bio: "",
      background: "",
    },
  ],

  /* ---------- ROSTERS ----------
     year: Fr., So., Jr., Sr., Gr.   */
  mensRoster: [
    { name: "David Gee",          year: "Fr.", hometown: "Hickory, N.C.",          school: "Fred T. Foard HS",                    major: "", photo: "" },
    { name: "Adam Gregg",         year: "Sr.", hometown: "Tampico, Mexico",        school: "Montverde Academy",                   major: "", photo: "" },
    { name: "Phillipp Hottinger", year: "Sr.", hometown: "Metzingen, Germany",     school: "Freie Georgenschule Reutlingen",      major: "", photo: "" },
    { name: "Will Johnston",      year: "Fr.", hometown: "Nixa, Mo.",              school: "Nixa HS",                             major: "", photo: "" },
    { name: "Kadan Jones",        year: "So.", hometown: "Sharpsburg, Md.",        school: "Boonsboro HS",                        major: "", photo: "" },
    { name: "Conley Killian",     year: "Jr.", hometown: "Iron Station, N.C.",     school: "North Lincoln HS",                    major: "", photo: "" },
    { name: "Stanislaus Koch",    year: "Jr.", hometown: "Vienna, Austria",        school: "Schottengymnasium der Benediktiner",  major: "", photo: "" },
    { name: "Flynn Lewis",        year: "Fr.", hometown: "Cary, N.C.",             school: "Green Hope HS",                       major: "", photo: "" },
    { name: "Nicholas Lombardo",  year: "So.", hometown: "Elgin, Ill.",            school: "St. Edwards HS",                      major: "", photo: "" },
    { name: "Rodrigo Lugo",       year: "Gr.", hometown: "Mexico City, Mexico",    school: "Montverde Academy",                   major: "", photo: "" },
    { name: "Johnny Malinowski",  year: "Fr.", hometown: "California, Md.",        school: "Leonardtown HS",                      major: "", photo: "" },
    { name: "Archie Mathers",     year: "Sr.", hometown: "Hertfordshire, UK",      school: "Bedford School",                      major: "", photo: "" },
    { name: "Brady McIntyre",     year: "Fr.", hometown: "Salisbury, N.C.",        school: "East Rowan HS",                       major: "", photo: "" },
    { name: "Jared Myers",        year: "So.", hometown: "Stanley, N.C.",          school: "East Lincoln HS",                     major: "", photo: "" },
    { name: "Nicklaus Newton",    year: "So.", hometown: "Connelly Springs, N.C.", school: "East Burke HS",                       major: "", photo: "" },
    { name: "David Quinones",     year: "Fr.", hometown: "Hampstead, N.C.",        school: "Topsail HS",                          major: "", photo: "" },
  ],

  womensRoster: [
    { name: "Danielle Bekker",    year: "Sr.", hometown: "Harare, Zimbabwe",   school: "Siloam Academy / Lindsey Wilson College",       major: "", photo: "" },
    { name: "Charlotte Colley",   year: "Sr.", hometown: "Sheffield, UK",      school: "Stocksbridge HS",                               major: "", photo: "" },
    { name: "Sarah Durham",       year: "Sr.", hometown: "Hickory, N.C.",      school: "Hickory Christian Academy",                     major: "", photo: "" },
    { name: "Emily Gilmour",      year: "So.", hometown: "Beaconsfield, UK",   school: "Pipers Corner School",                          major: "", photo: "" },
    { name: "Gabriella Gonzalez", year: "Fr.", hometown: "Spotsylvania, Va.",  school: "Riverbend HS",                                  major: "", photo: "" },
    { name: "Kajsa Hederas",      year: "Fr.", hometown: "Vaxjo, Sweden",      school: "ProCivitas Privata Gymnasium",                  major: "", photo: "" },
    { name: "Pink Mangan",        year: "So.", hometown: "Charleston, S.C.",   school: "Shattuck St. Mary's (MN) / Green Bay",          major: "", photo: "" },
    { name: "Reese Merrell",      year: "Fr.", hometown: "Rockwell, N.C.",     school: "North Hills Christian School",                  major: "", photo: "" },
    { name: "Eve Neild",          year: "Sr.", hometown: "Norwich, UK",        school: "Thorpe St. Andrew and Sixth Form",              major: "", photo: "" },
    { name: "Ava Palmer",         year: "Fr.", hometown: "Davison, N.C.",      school: "Lake Norman Charter HS",                        major: "", photo: "" },
    { name: "Jaya Wilkinson",     year: "Sr.", hometown: "London, UK",         school: "Cranleigh School",                              major: "", photo: "" },
  ],

  /* ---------- SCHEDULES & RESULTS ----------
     result: "" until the event is complete, e.g. "2nd of 15 teams".
     win: true highlights a team title.  host: "" if not confirmed.  */
  mensSchedule: [
    { start: "2026-09-14", end: "2026-09-15", name: "Savannah Lakes Fall Invite",      city: "McCormick, S.C.",         course: "Savannah Lakes GC",                 host: "Lander",            result: "12th of 18 teams" },
    { start: "2026-09-21", end: "2026-09-22", name: "Jay Jennison Cup",                city: "St. Augustine, Fla.",     course: "Slammer and Squire",                host: "Flagler College",   result: "T-6th of 12 teams" },
    { start: "2026-09-28", end: "2026-09-29", name: "Wolves Fall Intercollegiate",     city: "Lancaster, S.C.",         course: "Edgwater GC",                       host: "Newberry College",  result: "1st of 9 teams", win: true },
    { start: "2026-10-19", end: "2026-10-20", name: "Patriot Fall Classic",            city: "Ninety-Six, S.C.",        course: "Patriot Club at Grand Harbour",     host: "Lander",            result: "14th of 16 teams" },
    { start: "2026-10-26", end: "2026-10-27", name: "LR Fall Invitational",            city: "Hickory, N.C.",           course: "Lake Hickory at Catawba Springs",   host: "Lenoir-Rhyne",      result: "2nd of 15 teams", home: true },
    { start: "2027-02-08", end: "2027-02-09", name: "Spring Kickoff",                  city: "St. Augustine, Fla.",     course: "St. John's Golf & Country Club",    host: "",                  result: "" },
    { start: "2027-03-01", end: "2027-03-02", name: "Tidewater Intercollegiate",       city: "North Myrtle Beach, S.C.",course: "Tidewater GC",                      host: "",                  result: "" },
    { start: "2027-03-15", end: "2027-03-16", name: "Ralph Hargett Intercollegiate",   city: "Monroe, N.C.",            course: "Rolling Hills",                     host: "",                  result: "" },
    { start: "2027-03-22", end: "2027-03-23", name: "Tennessee River Rumble",          city: "Lenoir City, Tenn.",      course: "Windriver",                         host: "",                  result: "" },
    { start: "2027-04-05", end: "2027-04-06", name: "The Torch",                       city: "Chattanooga, Tenn.",      course: "Council Fire",                      host: "",                  result: "" },
    { start: "2027-04-18", end: "2027-04-20", name: "SAC Championship",                city: "",                        course: "",                                  host: "South Atlantic Conference", result: "" },
  ],

  womensSchedule: [
    { start: "2026-09-14", end: "2026-09-15", name: "The City with Spirit Classic",        city: "Cleveland, Tenn.",   course: "Cleveland Country Club",          host: "Lee University",              result: "9th of 16 teams" },
    { start: "2026-09-21", end: "2026-09-22", name: "Savannah Lakes Women's Invitational", city: "McCormick, S.C.",    course: "Monticello Golf Club",            host: "Lander University",           result: "T-6th of 18 teams" },
    { start: "2026-10-12", end: "2026-10-13", name: "Lee Anne Noble Classic",              city: "Dahlonega, Ga.",     course: "Achasta Golf Club",               host: "University of North Georgia", result: "11th of 17 teams" },
    { start: "2026-10-19", end: "2026-10-20", name: "UNCG Intercollegiate",                city: "Greensboro, N.C.",   course: "Forest Oaks",                     host: "UNC Greensboro",              result: "6th of 8 teams" },
    { start: "2026-10-26", end: "2026-10-27", name: "D2 Curahee Elite Invitational",       city: "Toccoa, Ga.",        course: "The Curahee Club",                host: "Anderson University",         result: "2nd of 13 teams" },
    { start: "2027-02-15", end: "2027-02-16", name: "Battle of Hilton Head",               city: "Hilton Head, S.C.",  course: "Palmetto Dunes Golf Club",        host: "Lincoln Memorial University", result: "" },
    { start: "2027-02-22", end: "2027-02-23", name: "LR/Dunes West Intercollegiate",       city: "Mt. Pleasant, S.C.", course: "Dunes West Golf",                 host: "",                            result: "" },
    { start: "2027-03-08", end: "2027-03-09", name: "Jerry Surratt Intercollegiate",       city: "Monroe, N.C.",       course: "Stonebridge Golf Club",           host: "",                            result: "" },
    { start: "2027-03-15", end: "2027-03-16", name: "Greenwood Women's Invitational",      city: "Greenwood, S.C.",    course: "Greenwood Country Club",          host: "Lander University",           result: "" },
    { start: "2027-03-22", end: "2027-03-23", name: "Grand Harbour Classic",               city: "Ninety-Six, S.C.",   course: "Patriot Club at Grand Harbour",   host: "Anderson University",         result: "" },
    { start: "2027-04-11", end: "2027-04-13", name: "SAC Championship",                    city: "",                   course: "",                                host: "South Atlantic Conference",   result: "" },
  ],

  /* ---------- NEWS ----------
     team: "men", "women", or "program". Newest items are shown first.
     body: "" shows a "story to be written" placeholder.            */
  news: [
    { date: "2026-10-27", team: "women", title: "Women's golf finishes 2nd of 13 at D2 Curahee Elite Invitational", summary: "Team result from Toccoa, Ga. (The Curahee Club).", body: "", photo: "" },
    { date: "2026-10-27", team: "men",   title: "Men's golf places 2nd of 15 at home LR Fall Invitational",       summary: "Team result from Lake Hickory at Catawba Springs, Hickory, N.C.", body: "", photo: "" },
    { date: "2026-09-29", team: "men",   title: "Men's golf wins Wolves Fall Intercollegiate",                    summary: "Bears take the team title, 1st of 9 teams, in Lancaster, S.C.", body: "", photo: "" },
  ],

  /* ---------- PHOTO GALLERY ----------
     Add { src: "images/file.jpg", caption: "", category: "Tournament" }  */
  gallery: [],

  recruiting: {
    // PLACEHOLDERS — coaches to supply official recruiting text and links.
    intro: "",
    questionnaireUrl: "",
    contactEmail: "Christopher.Jones@lr.edu",
  },
};
