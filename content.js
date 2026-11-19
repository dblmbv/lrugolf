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
    galleryUrl: "https://lrmedia.smugmug.com/2026-27/Golf",   // official LR Athletics photo gallery
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
    { name: "Emily Gilmour",      year: "So.", hometown: "Beaconsfield, UK",   school: "Pipers Corner School", major: "Criminal Justice", height: "", photo: "images/emily-gilmour.jpg", bio: [
        "2025-26 (Freshman): Played eight events with an 80.0 adjusted scoring average. Best finish was 28th at the Patsy Rendleman Invitational.",
    ] },
    { name: "Gabriella Gonzalez", year: "Fr.", hometown: "Spotsylvania, Va.",  school: "Riverbend HS", major: "Business Marketing", height: "", photo: "images/gabriella-gonzalez.jpg", bio: [] },
    { name: "Kajsa Hederas",      year: "Fr.", hometown: "Vaxjo, Sweden",      school: "ProCivitas Privata Gymnasium", major: "Finance", height: "", photo: "images/kajsa-hederas.jpg", bio: [] },
    { name: "Pink Mangan",        year: "So.", hometown: "Charleston, S.C.",   school: "Shattuck St. Mary's (MN) / Green Bay", major: "Exercise Science", height: "", photo: "images/pink-mangan.jpg", bio: [
        "2025-26 (Freshman): Competed in the fall at Green Bay before joining the Bears. Played five events for Lenoir-Rhyne with an 82.8 adjusted scoring average. Best finish was 27th at the Patsy Rendleman Invitational.",
    ] },
    { name: "Reese Merrell",      year: "Fr.", hometown: "Rockwell, N.C.",     school: "North Hills Christian School", major: "Sports Management", height: "", photo: "images/reese-merrell.jpg", bio: [] },
    { name: "Eve Neild",          year: "Sr.", hometown: "Norwich, UK",        school: "Thorpe St. Andrew and Sixth Form", major: "Biochemistry; Environmental Science and Policy", height: "5'4\"", photo: "images/eve-neild.jpg", bio: [
        "2025-26 (Junior): All-SAC Third Team and CSC Academic All-District. Played 11 events with a 74.2 adjusted scoring average and a team-leading four top-10 finishes, including runner-up at the St. Simons Intercollegiate. Placed 12th of 62 at the SAC Championships. Qualified individually for the NCAA South Regional and finished 17th, the third-best regional finish in program history. Ranked #30 in the region and #53 nationally.",
        "2024-25 (Sophomore): Played nine events with a 75.1 adjusted scoring average and four top-10 finishes, including 2nd at the Emmanuel Spring Invite and 3rd at the Coastal Georgia Women's Winter Invitational. Tied for 7th at the SAC Championships (147, +3). Ranked #68 in the region and #132 nationally.",
        "2023-24 (Freshman): Played 10 events with a 75.9 adjusted scoring average. Finished 5th at both the Patsy Rendleman Invitational and the Flagler Fall Slam, with six top-20 finishes. Ranked #69 in the region and #161 nationally.",
        "Before Lenoir-Rhyne: Finished 3rd at the R&A Girls U16 Championship. Represented England and was part of the Girls East Region England Golf squad. Served as County Junior Captain and as Head Girl in Sixth Form.",
    ] },
    { name: "Ava Palmer",         year: "Fr.", hometown: "Davison, N.C.",      school: "Lake Norman Charter HS", major: "Medical Studies", height: "", photo: "images/ava-palmer.jpg", bio: [] },
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
     body: a list of paragraphs (the full recap). Each paragraph in quotes, followed by a comma.
     source: link to the official story on lrbears.com.                                   */
  news: [
    { date: "2026-10-29", team: "women", title: "Women's golf closes the fall ranked 26th; Eve Neild 23rd individually",
      summary: "After four top-10 finishes and a runner-up showing, the Bears are ranked 26th nationally in the Clippd fall rankings.",
      body: [
        "The Lenoir-Rhyne women's golf team finished the fall ranked 26th in the Clippd rankings after posting four top-10 finishes, including a runner-up finish to close the semester. The Bears are 14th in the South Region, one of the toughest regions in the country, and are the third-highest ranked SAC team behind national powers Anderson (#5) and Lincoln Memorial (#8).",
        "The highlight came at the Currahee D2 Elite Invitational, where Lenoir-Rhyne faced 10 of the nation's top-50 teams and rallied with a 2-under-par final round to climb seven spots and finish second.",
        "Senior Eve Neild is ranked 23rd in the nation and 11th in the South Region, the second-highest ranked SAC individual. Neild, an NCAA Regional qualifier last season, has three top-three finishes this fall and has broken par in six of her 15 rounds, including a school-record 66 at the Currahee D2 Elite Invitational. At the LeeAnn Noble Memorial, she was the only player in the field to break par in all three rounds.",
      ],
      photo: "", source: "https://lrbears.com/news/2026/10/29/womens-golf-closes-the-fall-ranked-26th-eve-neild-ranked-23rd-individually.aspx" },

    { date: "2026-10-27", team: "women", title: "Bears storm back to finish 2nd at Currahee D2 Elite Invitational",
      summary: "Eve Neild's school-record 66 powers a seven-spot final-round climb in Toccoa, Ga.",
      body: [
        "The Lenoir-Rhyne women's golf team closed its fall season with a runner-up finish at the Currahee D2 Elite Invitational in Toccoa, Ga., one of the strongest fields in the country, with 10 of the 13 teams ranked in the national top 50. Anderson won the event.",
        "The Bears jumped seven spots in the final round, shooting 286 (-2). Lenoir-Rhyne was the only team in the field to post an under-par round.",
        "Senior Eve Neild led the way with a school-record 66 in the final round, playing her last 14 holes in seven under par. She tied for third at 217 (+1) after rounds of 75-76-66.",
        "Senior Charlotte Colley tied for 26th (76-78-73, 227), and sophomore Emily Gilmour tied for 35th (78-78-75, 231). Freshman Kajsa Hederas closed with a 72 to tie for 40th (80-81-72, 233), and senior Danielle Bekker tied for 42nd (81-69-84, 234), with her second-round 69 the best of her tournament.",
        "Up next: the Bears return in mid-February at the Battle of Hilton Head.",
      ],
      photo: "", source: "https://lrbears.com/news/2026/10/27/womens-golf-bears-storm-back-in-final-round-to-take-second-at-currahee-d2-elite-invitational.aspx" },

    { date: "2026-10-27", team: "men", title: "Men's golf earns runner-up finish at home LR Fall Invitational",
      summary: "Freshman David Quinones takes second individually in his collegiate debut at Lake Hickory.",
      body: [
        "Lenoir-Rhyne finished second at its own LR Fall Invitational in Hickory, N.C., posting a three-round 866 (296-282-288, +2), just two strokes behind champion Carson-Newman (864, E). The Bears also entered B and C teams, which finished tied for fourth and 14th.",
        "Freshman David Quinones was runner-up individually in his first collegiate tournament, carding 72-72-70 for a 214 (-2), one shot behind medalist Dylan Frein of Carson-Newman.",
        "Stanislaus Koch (B team) tied for fifth at 216 (E), and David Gee (B) tied for eighth at 217 (+1). Flynn Lewis tied for 10th at 218 (+2), and Brady McIntyre and Archie Mathers tied for 13th at 219 (+3). Nicklaus Newton and Jared Myers (B) tied for 20th at 221 (+5).",
        "The A team led the field in par-4 scoring (4.11) and tied for the lead on par-5s (4.77, -14), and the Lenoir-Rhyne squads combined for a field-best 53 birdies. Quinones, Johnny Malinowski, Adam Gregg and Lewis each made an eagle.",
        "Up next: the fall season is complete. The Bears return in early February at the Lincoln Memorial Spring Kick-off.",
      ],
      photo: "", source: "https://lrbears.com/news/2026/10/27/mens-golf-earns-runner-up-honors-at-lenoir-rhyne-fall-invitational.aspx" },

    { date: "2026-09-29", team: "men", title: "Men's golf wins Wolves Fall Intercollegiate; David Gee sets school record",
      summary: "The Bears win by 20 strokes, and freshman David Gee's 63 sets a program record and ties the course record.",
      body: [
        "Lenoir-Rhyne won the team title at the Wolves Fall Intercollegiate in Lancaster, S.C., the second victory of the Chris Jones era. The Bears were the only team under par in all three rounds, going 283-287-282 for an 852 (-12) to beat host Newberry by 20 strokes.",
        "Freshman David Gee opened with a 63 (-9) at Edgewater Golf Course, a new Lenoir-Rhyne school record that also tied the course record. His round included eight birdies, an eagle on the par-5 17th and just one bogey, and he finished with eagle-birdie-birdie.",
        "Three Bears finished in the top 10. Freshman Flynn Lewis placed fourth at 212 (-4) for his second top-five of the season, sophomore Nicklaus Newton tied for fifth at 213 (-3), and freshman Brady McIntyre was ninth at 218 (+2). Gee tied for 12th (221), and senior Archie Mathers tied for 14th (223).",
        "The Bears led the field in par-3, par-4 and par-5 scoring, made the most birdies (60) and had the fewest bogeys (48). Newton was the field's best par-3 scorer (2.83).",
      ],
      photo: "", source: "https://lrbears.com/news/2026/9/29/mens-golf-wins-team-title-at-wolves-fall-intercollegiate.aspx" },
  ],

  /* ---------- PHOTO GALLERY ----------
     The Gallery page links to program.galleryUrl (SmugMug). Optional: feature a few photos here too.
     Add { src: "images/file.jpg", caption: "", category: "Tournament" }  */
  gallery: [],

  recruiting: {
    // intro: list of paragraphs.
    intro: [
      "At Lenoir-Rhyne University, we are committed to building a competitive golf program that values hard work, teamwork, discipline, and personal growth. Our goal is to help every player improve on and off the course while competing at a high level.",
      "We also take pride in our strong academic environment, where student-athletes are supported in reaching their educational and career goals.",
      "We look for recruits who are dedicated, coachable, competitive, and willing to be part of a team. Most importantly, we want players who bring a positive attitude, strong work ethic, and a desire to represent Lenoir-Rhyne with pride.",
    ],
    contactEmail: "Christopher.Jones@lr.edu",
  },
};
