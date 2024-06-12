'use strict';


/**
 * all music information
 */



const musicData = [
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Yedalo Gaanam",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Yedalo Gaanam.mp3"
  },
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Telisi Telisi",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Telisi Telisi.mp3"
  },
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Charumati I Love U",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Charumati I Love U.mp3"
  },
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Nuvvena",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Nuvvena.mp3"
  },
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Yamuna Teeram",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Yamuna Teeram.mp3"
  },
  {
      "backgroundImage": "./assets/images/Anand.webp",
      "title": "Vache Vache",
      "album": "Anand",
      "year": 2004,
      "artist": "",
      "musicPath": "./assets/music/Vache Vache.mp3"
  },
  {
      "backgroundImage": "./assets/images/Darling.jpg",
      "title": "Bulle",
      "album": "Darling",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/Bulle-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Darling.jpg",
      "title": "Hosahore",
      "album": "Darling",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/Hosahore-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Darling.jpg",
      "title": "Inka Edo",
      "album": "Darling",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/Inka Edo-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Darling.jpg",
      "title": "Neeve",
      "album": "Darling",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/Neeve-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Darling.jpg",
      "title": "YeYo",
      "album": "Darling",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/YeYo-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Cheliya Cheliya",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Cheliya Cheliya - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Nanne Nanne ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Nanne Nanne  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Andagaada ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Andagaada  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Aadatanama ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Aadatanama  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Ye Chilipi ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ye Chilipi  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "Theme Of Gharshanaa ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/Theme Of Gharshanaa  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gharshanaa.jpg",
      "title": "The Encounter ",
      "album": "Darling",
      "year": 2004,
      "artist": "Unknown",
      "musicPath": "./assets/music/The Encounter  - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gang-Leader.jpg",
      "title": "Ninnu Chuse Anandamlo",
      "album": "Gang Leader",
      "year": 2019,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ninnu Chuse Anandamlo - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gang-Leader.jpg",
      "title": "Hoyna Hoyna",
      "album": "Gang Leader",
      "year": 2019,
      "artist": "Unknown",
      "musicPath": "./assets/music/Hoyna Hoyna - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gang-Leader.jpg",
      "title": "Ra Ra (Roar of the Revengers)",
      "album": "Gang Leader",
      "year": 2019,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ra Ra (Roar of the Revengers) - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Gang-Leader.jpg",
      "title": "Gang-u Leader",
      "album": "Gang Leader",
      "year": 2019,
      "artist": "Unknown",
      "musicPath": "./assets/music/Gang-u Leader - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Ramachakani Sita",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Ramachakani Sita.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Tippulu Tappulu",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Tippulu Tappulu.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Manasa Gelupu",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Manasa Gelupu.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Andamgaalena",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Andamgaalena.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Manasavacha",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Manasavacha.mp3"
  },
  {
      "backgroundImage": "./assets/images/Godavari.jpg",
      "title": "Uppongele Godavari",
      "album": "Godavari",
      "year": 2006,
      "artist": "",
      "musicPath": "./assets/music/Uppongele Godavari.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "Chalore Chalore Chal (Telugu)",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/Chalore Chalore Chal (Telugu)-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "Gaallo Thelinattunde",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/Gaallo Thelinattunde-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "Jalsa",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/Jalsa-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "Jennifer Lopez",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/Jennifer Lopez-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "My Heart Is Beating (Remix)",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/My Heart Is Beating (Remix)-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "My Heart Is Beating",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/My Heart Is Beating-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Jalsa.jpg",
      "title": "You & I",
      "album": "Jalsa",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/You & I-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Malli-Rava.jpg",
      "title": "Malli Raava",
      "album": "Malli-Rava",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Malli Raava - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Animals.png",
      "title": "Animals",
      "album": "Maroon 5",
      "year": 2004,
      "artist": "Maroon 5",
      "musicPath": "./assets/music/Animals---Maroon-5.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Alanati Ramachandrudu",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Alanati Ramachandrudu-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Andaanike Aadanive",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Andaanike Aadanive-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Bangaru Kalla",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Bangaru Kalla-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Bhama Bhama",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Bhama Bhama-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Cheppamma Cheppamma",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Cheppamma Cheppamma-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Dum Dum Dum",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Dum Dum Dum-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Murari.jpg",
      "title": "Ekkada Ekkada",
      "album": "Murari",
      "year": 2001,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ekkada Ekkada-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Ninnu-Kori.jpg",
      "title": "Unnatundi Gundey",
      "album": "Ninnu Kori",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Unnatundi Gundey - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Ninnu-Kori.jpg",
      "title": "Gang-u Leader",
      "album": "Ninnu Kori",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Gang-u Leader - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Ninnu-Kori.jpg",
      "title": "Adiga Adiga",
      "album": "Ninnu Kori",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Adiga Adiga - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Ninnu-Kori.jpg",
      "title": "Once Upon a Time Lo",
      "album": "Ninnu Kori",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Once Upon a Time Lo - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Ninnu-Kori.jpg",
      "title": "Ninnu Kori ",
      "album": "Ninnu Kori",
      "year": 2017,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ninnu Kori  - SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "Ola Olaala Ala",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/1-Ola Olaala Ala-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "Chilipiga",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/2-Chilipiga-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "Nenu Nuvvantu",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/3-Nenu Nuvvantu-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "Hello Rammante",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/4-Hello Rammante-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "O Range",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/5- O Range-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Orange.jpg",
      "title": "Rooba Rooba",
      "album": "Orange",
      "year": 2010,
      "artist": "Unknown",
      "musicPath": "./assets/music/6-Rooba Rooba-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Oy! Oy!",
      "album": "Oy",
      "year": 2009,
      "artist": "",
      "musicPath": "./assets/music/01 - Oy! Oy! - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Saradaga",
      "album": "Oy",
      "year": 2009,
      "artist": "Unknown",
      "musicPath": "./assets/music/02 - Saradaga - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Waiting For You",
      "album": "Oy",
      "year": 2009,
      "artist": "Unknown",
      "musicPath": "./assets/music/03 - Waiting For You - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Anukoledenadu",
      "album": "Oy",
      "year": 2009,
      "artist": "Unknown",
      "musicPath": "./assets/music/04 - Anukoledenadu - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Povodhe Prema",
      "album": "Oy",
      "year": 2009,
      "artist": "Unknown",
      "musicPath": "./assets/music/05 - Povodhe Prema - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Oy!.jpg",
      "title": "Seheri",
      "album": "Oy",
      "year": 2009,
      "artist": "Unknown",
      "musicPath": "./assets/music/06 - Seheri - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Paparayudu",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Paparayudu-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Ela Ela",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Ela Ela-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Veyira Cheyyi",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Veyira Cheyyi-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Anukoneledhugaa",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Anukoneledhugaa-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Panja3.Co",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Panja-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Panjaa.jpg",
      "title": "Kshanam Kshanam",
      "album": "Panjaa",
      "year": 2016,
      "artist": "Unknown",
      "musicPath": "./assets/music/Kshanam Kshanam-SenSongsMp3.Co.mp3"
  },
  {
      "backgroundImage": "./assets/images/Divide.jpeg",
      "title": "Perfect",
      "album": "Single",
      "year": 2017,
      "artist": "Ed Sheeran",
      "musicPath": "./assets/music/Perfect(Mr-Jatt1.com).mp3"
  },
  {
      "backgroundImage": "./assets/images/Taylor_Swift.png",
      "title": "Shake It Off",
      "album": "Single",
      "year": 2006,
      "artist": "Taylor Swift",
      "musicPath": "./assets/music/Shake It Off.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "Drag-Me-Down",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/Drag-Me-Down.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "Perfect-One-Direction",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/Perfect-One-Direction.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "Live-While-We're-Young",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/Live-While-We're-Young.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "What-Makes-You-Beautiful",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/What-Makes-You-Beautiful.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "Steal-My-Girl",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/Steal-My-Girl.mp3"
  },
  {
      "backgroundImage": "./assets/images/One-Direction.jpg",
      "title": "Night-Changes",
      "album": "Single",
      "year": 2010,
      "artist": "One Direction",
      "musicPath": "./assets/music/Night-Changes.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Annhiliate",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Annihilate.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Am I Dreaming",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Am-I-Dreaming.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "All The Way Live",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-All-The-Way-Live.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Danger-Spider",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Danger-Spider.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Hummingbird",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Hummingbird.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Calling",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Calling.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Silk and Cologne Spider Verse Remix",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Silk-and-Cologne-Spider-Verse-Remix.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Link Up",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Link-Up-Spider-Verse-Remix.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Self-Love",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Self-Love.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Home",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Home.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Nonviolent Communication",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Nonviolent-Communication.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Givin Up Not The One",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Givin-Up-Not-The-One.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Nas Morales",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Metro Boomin",
      "musicPath": "./assets/music/Metro-Boomin-Nas-Morales.mp3"
  },
  {
      "backgroundImage": "./assets/images/Across-the-spiderverse.jpg",
      "title": "Mona Lisa",
      "album": "Spiderman-Across-the-spiderverse",
      "year": 2023,
      "artist": "Dominic Fike",
      "musicPath": "./assets/music/Dominic Fike - Mona Lisa (Official Audio) (320 kbps).mp3"
  },
  {
      "backgroundImage": "./assets/images/Into-the-spiderverse.webp",
      "title": "Sunflower",
      "album": "Spiderman-Into-the-spiderverse",
      "year": 2018,
      "artist": "Post Malone",
      "musicPath": "./assets/music/Post-Malone-Sunflower-Spider-Man-Into-the-Spider-Verse.mp3"
  },
  {
      "backgroundImage": "./assets/images/Into-the-spiderverse.webp",
      "title": "Whats Up Danger Spider",
      "album": "Spiderman-Into-the-spiderverse",
      "year": 2018,
      "artist": "Dominic Fike",
      "musicPath": "./assets/music/Whats_Up_Danger_Spider-Man_Into_the_Spider-Verse.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Yedhane Koiyyake",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/01 - Yedhane Koiyyake - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Naalona Pongenu",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/02 - Naalona Pongenu - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Yegasi Yegasi",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/03 - Yegasi Yegasi - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Monna Kanipinchavu",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/04 - Monna Kanipinchavu - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "O Shanthi Shanthi",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/05 - O Shanthi Shanthi - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Adhey Nannu",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/06 - Adhey Nannu - SenSongsMp3.co.mp3"
  },
  {
      "backgroundImage": "./assets/images/surya-s-o-krishnan.avif",
      "title": "Nidhare Kala",
      "album": "SURYA SON OF KRISHNAN",
      "year": 2008,
      "artist": "Unknown",
      "musicPath": "./assets/music/07 - Nidhare Kala - SenSongsMp3.co.mp3"
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg",
        title: "MadhurameMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Madhurame - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "Telisiney Na NuvveyMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Telisiney Na Nuvvey - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "Oopiri AaguthunnadeyMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Oopiri Aaguthunnadey - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "GundelonaaMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Gundelonaa - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "EmitemitemoMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Emitemitemo - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "DhooramMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Dhooram - SenSongsMp3.Co.mp3",
  },
  {
        backgroundImage: "./assets/images/One-Direction.jpg", 
        title: "Mari MariMari MariMari Mari", 
        album: "Arjun Reddy", 
        year: 2017, 
        artist: "Unknown", 
        musicPath: "./assets/music/Mari Mari - SenSongsMp3.Co.mp3",
  },
];

const sortedMusicData = musicData.sort((a, b) => {
  const albumA = a.album.toUpperCase();
  const albumB = b.album.toUpperCase();

  if (albumA < albumB) {
    return -1;
  }
  if (albumA > albumB) {
    return 1;
  }

  return 0;
});


/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

const uniqueAlbums = [...new Set(musicData.map(item => item.album))];
// ... Previous code ...

// Function to generate album list and associated songs
// ... Previous code ...

// Function to generate album list and associated songs
// ... Previous code ...

// Function to generate album list and associated songs
const generateAlbumsAndSongs = () => {
    uniqueAlbums.forEach(album => {
      const albumItem = document.createElement("li");
      albumItem.textContent = album;
      albumItem.classList.add("album-item");
  
      albumItem.addEventListener("click", () => {
        // Toggle 'expanded' class on the clicked album item
        albumItem.classList.toggle("expanded");
  
        // Clear the song list
        songList.innerHTML = "";
  
        // Filter songs based on selected album
        const songsInAlbum = musicData.filter(item => item.album === album);
        songsInAlbum.forEach(song => {
          const songItem = document.createElement("li");
          songItem.textContent = song.title;
          songItem.classList.add("song-item");
          songItem.addEventListener("click", () => {
            // Play the selected song
            playSong(song);
            changePlayerInfo();
            playMusic(song)
  
          });
          songList.appendChild(songItem);
        });
      });
  
      albumList.appendChild(albumItem);
    });
  };
  
  // ... Previous code ...
  let currentMusic = 0;
  let lastPlayedMusic = 0;
  const audioSource = new Audio(musicData[currentMusic].musicPath);

// Function to play the selected song
const playSong = (song) => {
  // Pause the current audio source if it's playing
  currentMusic = musicData.findIndex(item => item.title === song.title && item.album === song.album);
//   if (!audioSource.paused) {
//     audioSource.pause();
//   }

  // Set the new audio source and play the selected song
  audioSource.src = song.musicPath;
  audioSource.load(); // Load the new audio source
  audioSource.play();

  // Update player info, such as title and album
  playerTitle.textContent = song.title;
  playerAlbum.textContent = song.album;
  // Update other player information as needed

  // Remove the "playing" class from all playlist items
  playlistItems.forEach(item => item.classList.remove("playing"));

  // Find the index of the selected song in the musicData array
  const selectedIndex = musicData.findIndex(item => item.title === song.title && item.album === song.album);

  // Add the "playing" class to the selected playlist item
  if (selectedIndex !== -1) {
    playlistItems[selectedIndex].className.add("playing");
  }
};

// ... Rest of your code ...

  
  // Call the function to generate albums and songs
  generateAlbumsAndSongs();
  
  


// for (let i = 0, len = musicData.length; i < len; i++) {
//   playlist.innerHTML += `
//   <li>
//     <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-item="${i}">
//       <img src="${musicData[i].backgroundImage}" width="800" height="800" alt="${musicData[i].album} Album Poster"
//         class="img-cover">
//         <div class="album-container">
//     <p class="album-name">${musicData[i].title}</p>
// </div>


//       <div class="item-icon">
//         <span class="material-symbols-rounded">equalizer</span>
//       </div>
//     </button>
//   </li>
//   `;
// }



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");



const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].className.remove("playing");
  playlistItems[currentMusic].className.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

// const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].backgroundImage;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

// const isMusicEnd = function () {
//   if (audioSource.ended) {
//     playBtn.classList.remove("active");
//     audioSource.currentTime = 0;
//     playerSeekRange.value = audioSource.currentTime;
//     playerRunningTime.textContent = getTimecode(audioSource.currentTime);
//     updateRangeFill();
//   }
// }

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();

    // Skip to the next song
    lastPlayedMusic = currentMusic;
    if (isShuffled) {
      shuffleMusic();
    } else {
      currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
    }
    changePlayerInfo();
    changePlaylistItem();
  }
};




/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
    lastPlayedMusic = currentMusic;
    
    // Find the next available song in the playlist
    let nextIndex = currentMusic + 1;
    if (nextIndex >= musicData.length) {
      nextIndex = 0; // Loop back to the first song if at the end of the playlist
    }
  
    // Play the next available song
    currentMusic = nextIndex;
    changePlayerInfo();
    changePlaylistItem();
  };
  

  

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);

