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
    overview: "Lenoir-Rhyne University is home to both men's and women's NCAA Division II golf teams competing in the South Atlantic Conference (SAC). Based in Hickory, North Carolina, the Bears focus on developing talented student-athletes who value teamwork, dedication, sportsmanship, and academic success. Both programs compete in tournaments across the country while representing LR with pride.",
    athleticsSite: "https://lrbears.com",
    mensOfficialPage: "https://lrbears.com/sports/mens-golf",
    womensOfficialPage: "https://lrbears.com/sports/womens-golf",
  },

  social: [
    { label: "Golf on X",            url: "https://x.com/BearsLRGolf" },
    { label: "Golf on Instagram",    url: "https://instagram.com/lrubearsgolf" },
    { label: "LR Bears Facebook",    url: "https://www.facebook.com/LRBears" },
    { label: "LR Bears Instagram",   url: "https://www.instagram.com/bearssports/" },
    { label: "LR Bears on X",        url: "https://twitter.com/LRbears" },
    { label: "LR Bears YouTube",     url: "https://www.youtube.com/LenoirRhyneBears" },
  ],

  /* ---------- COACHES ----------
     bio: a list of paragraphs. Each paragraph is in quotes, followed by a comma.
     photo: upload the picture to the images folder with this exact file name. */
  coaches: [
    {
      name: "Chris Jones",
      title: "Head Men's & Women's Golf Coach",
      email: "Christopher.Jones@lr.edu",
      phone: "",
      photo: "images/chris-jones.jpg",
      bio: [
        "Chris Jones was named head coach of Lenoir-Rhyne's men's and women's golf programs in May 2025. He is a Lenoir-Rhyne alumnus and played on the Bears men's golf team from 1993 to 1997.",
        "In his first season (2025-26), three Bears qualified for NCAA Regionals: Sean Finan and Matthew McDougall for the men, and Eve Neild for the women. McDougall's seventh-place regional finish tied the best individual regional finish in program history. The men's team won the team title at The Trojan, recorded four top-3 finishes, and finished ranked #50 nationally and #12 in the region. The women's team recorded three top-3 finishes, including second place at the Patsy Rendleman Invitational, and finished ranked #21 in the region and #38 nationally. Slade Aliff was named SAC Men's Golf Scholar-Athlete of the Year.",
        "Before Lenoir-Rhyne, Jones spent four seasons as head men's and women's golf coach at Pfeiffer University (NCAA Division III). There he created three home tournaments, grew roster sizes by 44% in his second year, and raised $70,000 in revenue for the two programs in 2023-24. In his final season at Pfeiffer, the men rose 64 spots to #75 nationally and the women rose 18 spots to #91, and the women posted their best single-round score since 2015-16.",
      ],
      background: [
        "Pfeiffer University: Head Men's & Women's Golf Coach (four seasons)",
        "Johnson & Wales: Head Coach, 2020-21 (first head coaching position)",
        "Belmont Abbey College (NCAA Division II): Assistant Coach, 2015-19",
        "North Guilford High School (N.C.): Head Men's & Women's Golf Coach, 2007-15. The men won the 2010 NCHSAA 3A State Championship, the women were 3A runners-up in 2011 and 2013, Jones earned five Coach of the Year awards, and ten former players went on to play college golf.",
        "Education: B.A. in Business Administration and Marketing, Lenoir-Rhyne University, 1997",
      ],
    },
    {
      name: "Dilyara Bulambayeva",
      title: "Men's & Women's Golf Graduate Assistant",
      email: "Dilyara.Bulambayeva@my.lr.edu",
      phone: "",
      photo: "images/dilyara-bulambayeva.jpg",
      bio: [
        "Dilyara Bulambayeva joined the Lenoir-Rhyne men's and women's golf programs as a graduate assistant before the 2026-27 season. She is a native of Almaty, Kazakhstan.",
        "Bulambayeva graduated from Lincoln Memorial University in spring 2026 after a four-year playing career there. She recorded four top-5 and five top-10 finishes, was a key contributor to Lincoln Memorial's 2024 SAC Championship team, earned All-SAC Second Team honors in 2025, and was named CSC Academic All-District in 2026.",
      ],
      background: [
        "Playing career: Lincoln Memorial University (four years)",
        "Honors: 2024 SAC Champions (team), 2025 All-SAC Second Team, 2026 CSC Academic All-District",
      ],
    },
  ],

  /* ---------- ROSTERS ----------
     year: Fr., So., Jr., Sr., Gr.
     photo: upload a headshot to the images folder with this exact file name.
            Until the file exists, the player's initials are shown.
     bio:  a list of lines (one per season or highlight). Empty list = "Bio to be added".
     Source: individual player pages on lrbears.com (Nov. 2026).            */
  mensRoster: [
    { name: "David Gee",          year: "Fr.", hometown: "Hickory, N.C.",          school: "Fred T. Foard HS",                   major: "", height: "", photo: "images/david-gee.jpg", bio: [] },
    { name: "Adam Gregg",         year: "Sr.", hometown: "Tampico, Mexico",        school: "Montverde Academy",                  major: "", height: "6'8\"", photo: "images/adam-gregg.jpg", bio: [
        "2025-26 (Junior): Competed in three events with a 78.3 adjusted scoring average.",
        "2024-25 (Sophomore): Finished 30th of 93 at the LR Fall Invitational.",
        "2023-24 (Freshman): Finished 39th of 64 at the LR Fall Invitational.",
    ] },
    { name: "Phillipp Hottinger", year: "Sr.", hometown: "Metzingen, Germany",     school: "Freie Georgenschule Reutlingen",     major: "Computer Science", height: "6'0\"", photo: "images/phillipp-hottinger.jpg", bio: [
        "2025-26 (Junior): Finished 39th of 60 at the King Invitational.",
        "2024-25 (Sophomore): Competed at the LR Fall Invitational.",
    ] },
    { name: "Will Johnston",      year: "Fr.", hometown: "Nixa, Mo.",              school: "Nixa HS",                            major: "", height: "", photo: "images/will-johnston.jpg", bio: [] },
    { name: "Kadan Jones",        year: "So.", hometown: "Sharpsburg, Md.",        school: "Boonsboro HS",                       major: "Sports Management", height: "5'8\"", photo: "images/kadan-jones.jpg", bio: [
        "2025-26 (Freshman): Competed at the King Invitational.",
    ] },
    { name: "Conley Killian",     year: "Jr.", hometown: "Iron Station, N.C.",     school: "North Lincoln HS",                   major: "Business Marketing / Entrepreneurship", height: "5'9\"", photo: "images/conley-killian.jpg", bio: [
        "2025-26 (Sophomore): Competed at the King Invitational.",
        "2024-25 (Freshman): Competed at the LR Fall Invitational.",
    ] },
    { name: "Stanislaus Koch",    year: "Jr.", hometown: "Vienna, Austria",        school: "Schottengymnasium der Benediktiner", major: "", height: "", photo: "images/stanislaus-koch.jpg", bio: [
        "2025-26 (Sophomore): Played seven events with a 76.4 adjusted scoring average. Tied for 20th at The Trojan (226, +10). Finished the year ranked #194 in the region.",
        "2024-25 (Freshman): Played three events with a 75.5 adjusted scoring average. Finished 29th of 93 at the LR Fall Invitational.",
    ] },
    { name: "Flynn Lewis",        year: "Fr.", hometown: "Cary, N.C.",             school: "Green Hope HS",                      major: "", height: "", photo: "images/flynn-lewis.jpg", bio: [] },
    { name: "Nicholas Lombardo",  year: "So.", hometown: "Elgin, Ill.",            school: "St. Edwards HS",                     major: "", height: "", photo: "images/nicholas-lombardo.jpg", bio: [
        "2025-26 (Freshman): Competed at the King Invitational.",
    ] },
    { name: "Rodrigo Lugo",       year: "Gr.", hometown: "Mexico City, Mexico",    school: "Montverde Academy",                  major: "", height: "", photo: "images/rodrigo-lugo.jpg", bio: [
        "2024-25: Competed at the LR Fall Invitational and Flagler's Jay Jennison Cup.",
        "2023-24: Tied for 43rd at the LR Fall Invitational (238, +22).",
    ] },
    { name: "Johnny Malinowski",  year: "Fr.", hometown: "California, Md.",        school: "Leonardtown HS",                     major: "", height: "", photo: "images/johnny-malinowski.jpg", bio: [] },
    { name: "Archie Mathers",     year: "Sr.", hometown: "Hertfordshire, UK",      school: "Bedford School",                     major: "", height: "", photo: "images/archie-mathers.jpg", bio: [
        "2025-26 (Junior): Played seven events with a 75.3 adjusted scoring average. Posted two top-20 finishes, including a tie for 14th at The Trojan (223, +7). Placed 42nd at the SAC Championships. Finished the year ranked #142 in the region.",
        "2024-25 (Sophomore): Competed at the Bearcat Fall Invite and the LR Fall Invitational.",
        "2023-24 (Freshman): Finished 41st at the LR Fall Invitational.",
    ] },
    { name: "Brady McIntyre",     year: "Fr.", hometown: "Salisbury, N.C.",        school: "East Rowan HS",                      major: "", height: "", photo: "images/brady-mcintyre.jpg", bio: [] },
    { name: "Jared Myers",        year: "So.", hometown: "Stanley, N.C.",          school: "East Lincoln HS",                    major: "", height: "5'7\"", photo: "images/jared-myers.jpg", bio: [
        "2025-26 (Freshman): Competed in two events. Finished 25th of 78 at The Trojan (227, +11).",
    ] },
    { name: "Nicklaus Newton",    year: "So.", hometown: "Connelly Springs, N.C.", school: "East Burke HS",                      major: "", height: "6'3\"", photo: "images/nicklaus-newton.jpg", bio: [
        "2025-26 (Freshman): Played four events with a 76.4 adjusted scoring average. Tied for 29th at the King Invitational (146, +6).",
    ] },
    { name: "David Quinones",     year: "Fr.", hometown: "Hampstead, N.C.",        school: "Topsail HS",                         major: "", height: "", photo: "images/david-quinones.jpg", bio: [] },
  ],

  womensRoster: [
    { name: "Danielle Bekker",    year: "Sr.", hometown: "Harare, Zimbabwe",   school: "Siloam Academy / Lindsey Wilson College", major: "Sports Management (minor: Business Management)", height: "5'4\"", photo: "images/danielle-bekker.jpg", bio: [
        "2025-26 (Lenoir-Rhyne): Played 10 events with a 76.7 adjusted scoring average. Tied for 2nd at the Ralph Hayes Toyota D2 Elite Invitational (144, E) and finished 10th at the LR/Dunes West Intercollegiate (230, +14). Ranked #95 in the region and #183 nationally. Named to the LR Honors list and the CSC Academic All-District team.",
        "2024-25 (Lindsey Wilson College): Played two events before an injury ended her season.",
        "2023-24 (Lindsey Wilson College): Played six events with a 76.3 adjusted scoring average. Medalist at the Mid-South Conference Championship, 3rd at the Battle for the Bay, and 33rd at the NAIA National Championships. Earned Third Team All-American honors.",
        "Personal: Has played golf since age 10.",
    ] },
    { name: "Charlotte Colley",   year: "Sr.", hometown: "Sheffield, UK",      school: "Stocksbridge HS", major: "Mathematics (minors: Business and Finance)", height: "5'8\"", photo: "images/charlotte-colley.jpg", bio: [
        "2025-26 (Junior): Played 10 events with a 78.4 adjusted scoring average. Tied for 7th of 70 at the CSU Lady Cougar Classic (229, +13). SAC Elite 23 honoree.",
        "2024-25 (Sophomore): Played nine events with a 78.0 adjusted scoring average. Best finish was 8th at the Lady Bearcat Invitational. SAC Elite 23 honoree.",
        "2023-24 (Freshman): SAC Freshman of the Year and All-SAC Second Team. Played 11 events with a 74.5 adjusted scoring average, with five top-5 and six top-10 finishes. Runner-up at the Battle at Hilton Head (143, -1) and 3rd at both the Low Tide Intercollegiate and the Surratt Memorial Intercollegiate. Qualified individually for the NCAA South Regional and finished 26th.",
        "Before Lenoir-Rhyne: Won the North of England schools championship and placed 2nd at the England schools national championship. Represented English schools in an international match. Finished 4th (2022) and 5th (2023) at the Fairhaven Trophy.",
    ] },
    { name: "Sarah Durham",       year: "Sr.", hometown: "Hickory, N.C.",      school: "Hickory Christian Academy", major: "Exercise Science and Sports Management (minor: Business Management)", height: "5'9\"", photo: "images/sarah-durham.jpg", bio: [
        "2025-26: Competed at the Savannah Lakes Women's Fall Invitational.",
        "2024-25 (Sophomore): Played six events with an 83.9 adjusted scoring average. Tied for 27th at the SAC Championships (157, +13).",
        "2023-24: Redshirt season.",
    ] },
    { name: "Emily Gilmour",      year: "So.", hometown: "Beaconsfield, UK",   school: "Pipers Corner School", major: "", height: "", photo: "images/emily-gilmour.jpg", bio: [
        "2025-26 (Freshman): Played eight events with an 80.0 adjusted scoring average. Best finish was 28th at the Patsy Rendleman Invitational.",
    ] },
    { name: "Gabriella Gonzalez", year: "Fr.", hometown: "Spotsylvania, Va.",  school: "Riverbend HS", major: "", height: "", photo: "images/gabriella-gonzalez.jpg", bio: [] },
    { name: "Kajsa Hederas",      year: "Fr.", hometown: "Vaxjo, Sweden",      school: "ProCivitas Privata Gymnasium", major: "", height: "", photo: "images/kajsa-hederas.jpg", bio: [] },
    { name: "Pink Mangan",        year: "So.", hometown: "Charleston, S.C.",   school: "Shattuck St. Mary's (MN) / Green Bay", major: "", height: "", photo: "images/pink-mangan.jpg", bio: [
        "2025-26 (Freshman): Competed in the fall at Green Bay before joining the Bears. Played five events for Lenoir-Rhyne with an 82.8 adjusted scoring average. Best finish was 27th at the Patsy Rendleman Invitational.",
    ] },
    { name: "Reese Merrell",      year: "Fr.", hometown: "Rockwell, N.C.",     school: "North Hills Christian School", major: "", height: "", photo: "images/reese-merrell.jpg", bio: [] },
    { name: "Eve Neild",          year: "Sr.", hometown: "Norwich, UK",        school: "Thorpe St. Andrew and Sixth Form", major: "Biochemistry; Environmental Science and Policy", height: "5'4\"", photo: "images/eve-neild.jpg", bio: [
        "2025-26 (Junior): All-SAC Third Team and CSC Academic All-District. Played 11 events with a 74.2 adjusted scoring average and a team-leading four top-10 finishes, including runner-up at the St. Simons Intercollegiate. Placed 12th of 62 at the SAC Championships. Qualified individually for the NCAA South Regional and finished 17th, the third-best regional finish in program history. Ranked #30 in the region and #53 nationally.",
        "2024-25 (Sophomore): Played nine events with a 75.1 adjusted scoring average and four top-10 finishes, including 2nd at the Emmanuel Spring Invite and 3rd at the Coastal Georgia Women's Winter Invitational. Tied for 7th at the SAC Championships (147, +3). Ranked #68 in the region and #132 nationally.",
        "2023-24 (Freshman): Played 10 events with a 75.9 adjusted scoring average. Finished 5th at both the Patsy Rendleman Invitational and the Flagler Fall Slam, with six top-20 finishes. Ranked #69 in the region and #161 nationally.",
        "Before Lenoir-Rhyne: Finished 3rd at the R&A Girls U16 Championship. Represented England and was part of the Girls East Region England Golf squad. Served as County Junior Captain and as Head Girl in Sixth Form.",
    ] },
    { name: "Ava Palmer",         year: "Fr.", hometown: "Davison, N.C.",      school: "Lake Norman Charter HS", major: "", height: "", photo: "images/ava-palmer.jpg", bio: [] },
    { name: "Jaya Wilkinson",     year: "Sr.", hometown: "London, UK",         school: "Cranleigh School", major: "Psychology", height: "", photo: "images/jaya-wilkinson.jpg", bio: [
        "2025-26 (Junior): CSC Academic All-District. Played 10 events (29 rounds) with a 77.8 adjusted scoring average. Two top-10 finishes: 5th at the Ralph Hayes Toyota D2 Elite Invitational and 10th at the Patsy Rendleman Invitational. Ranked #130 in the region.",
        "2024-25 (Sophomore): Played nine events (24 rounds) with a 77.9 adjusted scoring average. Three top-20 finishes, with a season-best 11th at the Coastal Georgia Women's Winter Invitational. Tied for 22nd at the SAC Championships, the second-best finish by a Bear.",
        "2023-24 (Freshman): Played nine events (25 rounds) with a 78.1 adjusted scoring average. Was the Bears' top finisher at the SAC Championships, tying for 15th (228, +15).",
    ] },
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
