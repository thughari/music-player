'use strict';



/**
 * all music information
 */



const musicData = [
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '01 - Oy! Oy!-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/01 - Oy! Oy! - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '01 - Yedhane Koiyyake-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/01 - Yedhane Koiyyake - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '02 - Naalona Pongenu-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/02 - Naalona Pongenu - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '02 - Saradaga-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/02 - Saradaga - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '03 - Waiting For You-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/03 - Waiting For You - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '03 - Yegasi Yegasi-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/03 - Yegasi Yegasi - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '04 - Anukoledenadu-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/04 - Anukoledenadu - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '04 - Monna Kanipinchavu-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/04 - Monna Kanipinchavu - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '05 - O Shanthi Shanthi-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/05 - O Shanthi Shanthi - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '05 - Povodhe Prema-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/05 - Povodhe Prema - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '06 - Adhey Nannu-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/06 - Adhey Nannu - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Oy_ _2009_.jpg', 'title': '06 - Seheri-(www.SenSongsMp3.co)', 'album': 'Oy! (2009)', 'year': '2009', 'artist': 'Oy!', 'musicPath': './assets/music/06 - Seheri - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Surya son of Krishnan _2008_.jpg', 'title': '07 - Nidhare Kala-(www.SenSongsMp3.co)', 'album': 'Surya son of Krishnan (2008)', 'year': '2008', 'artist': 'Surya s/o Krishnan', 'musicPath': './assets/music/07 - Nidhare Kala - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'Ola Olaala Ala-SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/1-Ola Olaala Ala-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'Chilipiga-SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/2-Chilipiga-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'Nenu Nuvvantu-SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/3-Nenu Nuvvantu-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'Hello Rammante-SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/4-Hello Rammante-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'O Range -SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/5- O Range-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Orange _2010_.jpg', 'title': 'Rooba Rooba -SenSongsMp3.Co', 'album': 'Orange (2010)', 'year': '2010', 'artist': 'Ram Charan Tej,Genelia', 'musicPath': './assets/music/6-Rooba Rooba-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '04 - Aadatanama -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Aadatanama  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Ninnu Kori _2017_.jpg', 'title': 'Adiga Adiga :: SenSongsMp3.Co', 'album': 'Ninnu Kori (2017)', 'year': '2017', 'artist': 'Nani, Nivetha Thomas, Aadhi Pinisetty', 'musicPath': './assets/music/Adiga Adiga - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Alanati Ramachandrudu-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Alanati Ramachandrudu-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Andaanike Aadanive-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Andaanike Aadanive-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '03 - Andagaada -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Andagaada  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '03 - Andamgaalena -(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Andamgaalena.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': 'Animals - Maroon 5(PagalWorlld.Com)', 'album': 'New Viral Songs :: PagalWorlld.Com', 'year': '2023', 'artist': 'PagalWorlld.Com', 'musicPath': './assets/music/Animals---Maroon-5.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Anukoneledhuga-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Anukoneledhugaa-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Arere Vaanaa-SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Arere Vaanaa-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Bangaru Kalla-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Bangaru Kalla-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Bhama Bhama-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Bhama Bhama-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Darling_2010_.jpg', 'title': 'Bulle-My3Songs.In', 'album': 'Darling(2010)', 'year': '2016', 'artist': 'Prabhas,Kajal', 'musicPath': './assets/music/Bulle-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'Chalore Chalore Chal (Telugu)-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Chalore Chalore Chal (Telugu)-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Charumati I Love U :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Charumati I Love U.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '01 - Cheliya Cheliya-(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Cheliya Cheliya - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Cheppamma Cheppamma-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Cheppamma Cheppamma-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Chiru Chiru Chiru-SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Chiru Chiru Chiru-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Chuttesai Chuttesai-SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Chuttesai Chuttesai-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Dhooram :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Dhooram - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'X2Download.com - Dominic Fike - Mona Lisa (Official Audio)', 'album': 'Unknown', 'year': 'Unknown', 'artist': 'Unknown', 'musicPath': './assets/music/Dominic Fike - Mona Lisa (Official Audio) (320 kbps).mp3'},
  {'backgroundImage': './assets/images/One Direction All Song Albums Mp3 __ PagalWorld_Social.jpg', 'title': 'Drag Me Down(PagalWorld.Social)', 'album': 'One Direction All Song Albums Mp3 :: PagalWorld.Social', 'year': '2023', 'artist': 'PagalWorld.Social', 'musicPath': './assets/music/Drag-Me-Down.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Dum Dum Dum-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Dum Dum Dum-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Murari_2001_.jpg', 'title': 'Ekkada Ekkada-SenSongsMp3.Co', 'album': 'Murari(2001)', 'year': '2001', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Ekkada Ekkada-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Ela Ela-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Ela Ela-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Emitemitemo :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Emitemitemo - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'Gaallo Thelinattunde-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Gaallo Thelinattunde-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gangleader _2019_.jpg', 'title': 'Gang-u Leader :: SenSongsMp3.Co', 'album': 'Gangleader (2019)', 'year': '2019', 'artist': 'Nani, Priyanka Arulmohan, Karthikeya', 'musicPath': './assets/music/Gang-u Leader - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Gundelonaa :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Gundelonaa - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Ninnu Kori _2017_.jpg', 'title': 'Hey Badhulu Cheppavey :: SenSongsMp3.Co', 'album': 'Ninnu Kori (2017)', 'year': '2017', 'artist': 'Nani, Nivetha Thomas, Aadhi Pinisetty', 'musicPath': './assets/music/Hey Badhulu Cheppavey - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Darling_2010_.jpg', 'title': 'Hosahore-My3Songs.In', 'album': 'Darling(2010)', 'year': '2016', 'artist': 'Prabhas,Kajal', 'musicPath': './assets/music/Hosahore-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gangleader _2019_.jpg', 'title': 'Hoyna Hoyna :: SenSongsMp3.Co', 'album': 'Gangleader (2019)', 'year': '2019', 'artist': 'Nani, Priyanka Arulmohan, Karthikeya', 'musicPath': './assets/music/Hoyna Hoyna - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Darling_2010_.jpg', 'title': 'Inka Edo-My3Songs.In', 'album': 'Darling(2010)', 'year': '2016', 'artist': 'Prabhas,Kajal', 'musicPath': './assets/music/Inka Edo-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'Jalsa-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Jalsa-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'Jennifer Lopez-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Jennifer Lopez-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Kshanam Kshanam-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Kshanam Kshanam-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/One Direction All Song Albums Mp3 __ PagalWorld_Social.jpg', 'title': "Live While We're Young(PagalWorld.Social)", 'album': 'One Direction All Song Albums Mp3 :: PagalWorld.Social', 'year': '2023', 'artist': 'PagalWorld.Social', 'musicPath': "./assets/music/Live-While-We're-Young.mp3"},
  {'backgroundImage': './assets/images/Jesusful_com.jpg', 'title': 'Kill My Mind || Jesusful.com', 'album': 'Jesusful.com', 'year': '2022', 'artist': 'Louis Tomlinson', 'musicPath': './assets/music/Louis_Tomlinson_-_Kill_My_Mind.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Madhurame :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Madhurame - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/MalliRaava _2017_.jpg', 'title': 'Malli Raava :: SenSongsMp3.Co', 'album': 'MalliRaava (2017)', 'year': '2017', 'artist': 'Sumanth, Aakanksha Singh', 'musicPath': './assets/music/Malli Raava - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '04 - Manasa Gelupu -(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Manasa Gelupu.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '02 - Manasavacha -(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Manasavacha.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Mandaara Poovalle-SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Mandaara Poovalle-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Mari Mari :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Mari Mari - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'All The Way Live via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-All-The-Way-Live.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Am I Dreaming via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Am-I-Dreaming.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Annihilate via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Annihilate.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Calling via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Calling.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Danger (Spider) via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Danger-Spider.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': "Givin\\\\\\' Up (Not The One) via Nobadsong.com", 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Givin-Up-Not-The-One.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Home via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Home.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Hummingbird via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Hummingbird.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Link Up (Spider-Verse Remix) via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Link-Up-Spider-Verse-Remix.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Nas Morales via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Nas-Morales.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Nonviolent Communication via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Nonviolent-Communication.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Self Love via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Self-Love.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Silk and Cologne (Spider-Verse Remix) via Nobadsong.com', 'album': 'Spider-Man: Across the Spider-Verse (Soundtrack)', 'year': '2023', 'artist': 'Metro Boomin', 'musicPath': './assets/music/Metro-Boomin-Silk-and-Cologne-Spider-Verse-Remix.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Unknown', 'album': 'Unknown', 'year': '2021-10-12', 'artist': 'Unknown', 'musicPath': './assets/music/music-1.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Unknown', 'album': 'Unknown', 'year': '2021-07-18', 'artist': 'Unknown', 'musicPath': './assets/music/music-2.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Unknown', 'album': 'Unknown', 'year': '2021-10-15', 'artist': 'Unknown', 'musicPath': './assets/music/music-3.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Unknown', 'album': 'Unknown', 'year': '2021-10-13', 'artist': 'Unknown', 'musicPath': './assets/music/music-4.mp3'},
  {'backgroundImage': './assets/images/Spider-Man_ Across the Spider-Verse _Soundtrack_.jpg', 'title': 'Unknown', 'album': 'Unknown', 'year': '2021-10-13', 'artist': 'Unknown', 'musicPath': './assets/music/music-5.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'My Heart Is Beating (Remix)-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/My Heart Is Beating (Remix)-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'My Heart Is Beating-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/My Heart Is Beating-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '02 - Nanne Nanne -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Nanne Nanne  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Nee Yadalo Naaku-SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Nee Yadalo Naaku-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Darling_2010_.jpg', 'title': 'Neeve-My3Songs.In', 'album': 'Darling(2010)', 'year': '2016', 'artist': 'Prabhas,Kajal', 'musicPath': './assets/music/Neeve-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/English Mp3 Songs - PagalWorldi_Com.jpg', 'title': 'Night Changes(PagalWorld)', 'album': 'English Mp3 Songs - PagalWorldi.Com', 'year': '2023', 'artist': 'PagalWorldi.Com', 'musicPath': './assets/music/Night-Changes.mp3'},
  {'backgroundImage': './assets/images/Gangleader _2019_.jpg', 'title': 'Ninnu Chuse Anandamlo :: SenSongsMp3.Co', 'album': 'Gangleader (2019)', 'year': '2019', 'artist': 'Nani, Priyanka Arulmohan, Karthikeya', 'musicPath': './assets/music/Ninnu Chuse Anandamlo - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Ninnu Kori _2017_.jpg', 'title': 'Ninnu Kori  :: SenSongsMp3.Co', 'album': 'Ninnu Kori (2017)', 'year': '2017', 'artist': 'Nani, Nivetha Thomas, Aadhi Pinisetty', 'musicPath': './assets/music/Ninnu Kori  - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Nuvvena :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Nuvvena.mp3'},
  {'backgroundImage': './assets/images/Ninnu Kori _2017_.jpg', 'title': 'Once Upon a Time Lo :: SenSongsMp3.Co', 'album': 'Ninnu Kori (2017)', 'year': '2017', 'artist': 'Nani, Nivetha Thomas, Aadhi Pinisetty', 'musicPath': './assets/music/Once Upon a Time Lo - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Oopiri Aaguthunnadey :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Oopiri Aaguthunnadey - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Panja-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Panja-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Paparayudu-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Paparayudu-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Perfect - Ed Sheeran - Mr-Jatt1_com.jpg', 'title': 'Perfect(Mr-Jatt1.com)', 'album': 'Perfect - Ed Sheeran - Mr-Jatt1.com', 'year': '2023', 'artist': 'Mr-Jatt1.com', 'musicPath': './assets/music/Perfect(Mr-Jatt1.com).mp3'},
  {'backgroundImage': './assets/images/One Direction All Song Albums Mp3 __ PagalWorld_Social.jpg', 'title': 'Perfect(PagalWorld.Social)', 'album': 'One Direction All Song Albums Mp3 :: PagalWorld.Social', 'year': '2023', 'artist': 'PagalWorld.Social', 'musicPath': './assets/music/Perfect-One-Direction.mp3'},
  {'backgroundImage': './assets/images/Into-the-spiderverse.webp', 'title': 'Sunflower (Spider-Man: Into the Spider-Verse) | Nobadsong.com', 'album': 'Spiderverse', 'year': '2023', 'artist': 'Post Malone', 'musicPath': './assets/music/Post-Malone-Sunflower-Spider-Man-Into-the-Spider-Verse.mp3'},
  {'backgroundImage': './assets/images/Gangleader _2019_.jpg', 'title': 'Ra Ra (Roar of the Revengers) :: SenSongsMp3.Co', 'album': 'Gangleader (2019)', 'year': '2019', 'artist': 'Nani, Priyanka Arulmohan, Karthikeya', 'musicPath': './assets/music/Ra Ra (Roar of the Revengers) - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '06 - Ramachakani Sita -(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Ramachakani Sita.mp3'},
  {'backgroundImage': './assets/images/Taylor_Swift.png', 'title': 'Shake it off', 'album': 'Unknown', 'year': 'Unknown', 'artist': 'Taylor Swift', 'musicPath': './assets/music/Shake It Off.mp3'},
  {'backgroundImage': './assets/images/English Mp3 Songs - PagalWorldi_Com.jpg', 'title': 'Steal My Girl - One Direction(PagalWorld)', 'album': 'English Mp3 Songs - PagalWorldi.Com', 'year': '2022', 'artist': 'PagalWorldi.Com', 'musicPath': './assets/music/Steal-My-Girl.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Telisi Telisi :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Telisi Telisi.mp3'},
  {'backgroundImage': './assets/images/Arjun Reddy _2017_.jpg', 'title': 'Telisiney Na Nuvvey :: SenSongsMp3.Co', 'album': 'Arjun Reddy (2017)', 'year': '2017', 'artist': 'Vijay Deverakonda, Shalini Pandey', 'musicPath': './assets/music/Telisiney Na Nuvvey - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '07 - The Encounter -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/The Encounter  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '06 - Theme Of Gharshanaa -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Theme Of Gharshanaa  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '05 - Tippulu Tappulu -(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Tippulu Tappulu.mp3'},
  {'backgroundImage': './assets/images/Ninnu Kori _2017_.jpg', 'title': 'Unnatundi Gundey :: SenSongsMp3.Co', 'album': 'Ninnu Kori (2017)', 'year': '2017', 'artist': 'Nani, Nivetha Thomas, Aadhi Pinisetty', 'musicPath': './assets/music/Unnatundi Gundey - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Godavari _2006_.jpg', 'title': '01 - Uppongele Godavari-(www.SenSongsMp3.co)', 'album': 'Godavari (2006)', 'year': '2006', 'artist': 'Godavari', 'musicPath': './assets/music/Uppongele Godavari.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Vache Vache :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Vache Vache.mp3'},
  {'backgroundImage': './assets/images/Panjaa_2011_.jpg', 'title': 'Veyira Cheyyi-My3Songs.Com', 'album': 'Panjaa(2011)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Veyira Cheyyi-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/One Direction All Song Albums Mp3 __ PagalWorld_Social.jpg', 'title': 'What Makes You Beautiful(PagalWorld.Social)', 'album': 'One Direction All Song Albums Mp3 :: PagalWorld.Social', 'year': '2023', 'artist': 'PagalWorld.Social', 'musicPath': './assets/music/What-Makes-You-Beautiful.mp3'},
  {'backgroundImage': './assets/images/Into-the-spiderverse.webp', 'title': 'Whats up danger', 'album': 'Spiderverse', 'year': 'Unknown', 'artist': 'Unknown', 'musicPath': './assets/music/Whats_Up_Danger_Spider-Man_Into_the_Spider-Verse.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Yamuna Teeram :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Yamuna Teeram.mp3'},
  {'backgroundImage': './assets/images/Gharshanaa _2004_.jpg', 'title': '05 - Ye Chilipi -(www.SenSongsMp3.co)', 'album': 'Gharshanaa (2004)', 'year': '2004', 'artist': 'Gharshanaa', 'musicPath': './assets/music/Ye Chilipi  - SenSongsMp3.co.mp3'},
  {'backgroundImage': './assets/images/Anand _2004_.jpg', 'title': 'Yedalo Gaanam :: SenSongsMp3.Com', 'album': 'Anand (2004)', 'year': '2004', 'artist': 'Raja, Kamalinee Mukherjee', 'musicPath': './assets/music/Yedalo Gaanam.mp3'},
  {'backgroundImage': './assets/images/Awaara _2010_.jpg', 'title': 'Yedho Alajadi - SenSongsMp3.Co', 'album': 'Awaara (2010)', 'year': '2010', 'artist': 'Karthi, Tamanna', 'musicPath': './assets/music/Yedho Alajadi - SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Darling_2010_.jpg', 'title': 'YeYo-My3Songs.In', 'album': 'Darling(2010)', 'year': '2016', 'artist': 'Prabhas,Kajal', 'musicPath': './assets/music/YeYo-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Jalsa_2008_.jpg', 'title': 'You & I-My3Songs.Com', 'album': 'Jalsa(2008)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/You & I-SenSongsMp3.Co.mp3'},
  {'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Penny :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'Mahesh Babu, Keerthy Suresh', 'musicPath': './assets/music/2-Penny.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Aaradugula Bullettu-SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Aaradugula Bullettu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Salaar _2023_.jpg', 'title': 'Aaru Sethulunnaa :: SenSongsMp3.Com', 'album': 'Salaar (2023)', 'year': '2023', 'artist': 'Prabhas, Shruti Haasan, Prithviraj Sukumaran,  Jagapathi Babu', 'musicPath': './assets/music/Aaru Sethulunnaa.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Adara Adara-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Adara Adara-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': '摁癡\u2069畇慳畧慳畬㪠›敓卮湯獧灍⸳潃m', 'album': 'Bheemla Nayak (2022)', 'year': '2022', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Adavi Gusagusalu.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': 'Adavi Thalli Maata :: SenSongsMp3.Com', 'album': 'Bheemla Nayak (2022)', 'year': '2021', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Adavi Thalli Maata.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Adigaa :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Adigaa.mp3'},
{'backgroundImage': './assets/images/Liger _2022_.jpg', 'title': 'Akdi Pakdi :: SenSongsMp3.Com', 'album': 'Liger (2022)', 'year': '2022', 'artist': 'Vijay Devarakonda, Ananya Pandey, Ramya Krishnan,Mike Tyson', 'musicPath': './assets/music/Akdi Pakdi.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Ala Vaikunthapurramuloo :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Allu Arjun, Pooja Hegde', 'musicPath': './assets/music/Ala Vaikunthapurramuloo-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Brahmastra _2022_.jpg', 'title': 'Allari Motha :: SenSongsMp3.Com', 'album': 'Brahmastra (2022)', 'year': '2022', 'artist': 'Ranbir Kapoor, Alia Bhat, Nagarjuna,Amitabh Bachchan', 'musicPath': './assets/music/Allari Motha.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Amma :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Amma.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Ammaadi :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Ammaadi.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Andamaina Lokam :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Andamaina Lokam-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Anjanadri Theme :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Anjanadri Theme.mp3'},
{'backgroundImage': './assets/images/Kushi _2023_.jpg', 'title': 'Aradhya :: SenSongsMp3.Com', 'album': 'Kushi (2023)', 'year': '2023', 'artist': 'Vijay Devarakonda, Samantha', 'musicPath': './assets/music/Aradhya.mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': '7 rings | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-7-rings_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'bad idea | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-bad-idea_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'bloodline | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-bloodline_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': "break up with your girlfriend, i\\\\\\'m bored | Nobadsong.com", 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-break-up-with-your-girlfriend-i-m-bored_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Sweetener.jpg', 'title': 'breathin | Nobadsong.com', 'album': 'Sweetener', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-breathin_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'fake smile | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-fake-smile_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'ghostin | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-ghostin_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'imagine | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-imagine_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'in my head | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-in-my-head_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'make up | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-make-up_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'NASA | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-NASA_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'needy | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-needy_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Positions Deluxe Album.jpg', 'title': 'positions (Audio) | Nobadsong.com', 'album': 'Positions Deluxe Album', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-positions-Audio_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/thank u_ next.jpg', 'title': 'thank u, next | Nobadsong.com', 'album': 'thank u, next', 'year': '2023', 'artist': 'Ariana Grande', 'musicPath': './assets/music/Ariana-Grande-thank-u-next_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Asalelaa :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Asalelaa.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Avakaya Anjaneya :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Avakaya Anjaneya.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Avunanavaa :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Mithila Palkar', 'musicPath': './assets/music/Avunanavaa.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Ayyo Shivuda :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Ayyo Shivuda.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Balarama Narsayyo :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Balarama Narsayyo.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Bapu Gari Bommo - SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Bapu Gari Bommo-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': 'Bheemla Back on Duty :: SenSongsMp3.Com', 'album': 'Bheemla Nayak (2022)', 'year': '2022', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Bheemla Back on Duty.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': 'Bheemla Nayak :: SenSongsMp3.Com', 'album': 'Bheemla Nayak (2022)', 'year': '2021', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Bheemla Nayak.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Break Up (Rock) :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Break Up (Rock).mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Brindavanam Nunchi :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2022', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Brindavanam Nunchi.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Buttabomma :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Armaan Malik', 'musicPath': './assets/music/Buttabomma - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Jathi Ratnalu _2021_.jpg', 'title': 'Chanchalguda Jail Lo :: SenSongsMp3.Com', 'album': 'Jathi Ratnalu (2021)', 'year': '2021', 'artist': 'Naveen Polishetty, Faria Abdullah, Priyadarshi, Rahul Ramakrishna, Brahmaji', 'musicPath': './assets/music/Chanchalguda Jail Lo - SenSongsMp3.Com.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Chedhu Nijam :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Chedhu Nijam.mp3'},
{'backgroundImage': './assets/images/Jathi Ratnalu _2021_.jpg', 'title': 'Chitti :: SenSongsMp3.Com', 'album': 'Jathi Ratnalu (2021)', 'year': '2021', 'artist': 'Naveen Polishetty, Priyadarshi, Rahul Ramakrishna, Faria Abdullah, Brahmaji', 'musicPath': './assets/music/Chitti - SenSongsMp3.Com.mp3'},
{'backgroundImage': './assets/images/Most Eligible Bachelor _2021_.jpg', 'title': 'Chitti Adugu :: SenSongsMp3.Com', 'album': 'Most Eligible Bachelor (2021)', 'year': '2021', 'artist': 'Akhil Akkineni, Pooja Hegde', 'musicPath': './assets/music/Chitti Adugu.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Chulbuli Chulbuli-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Chulbuli Chulbuli-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Closer-_PagalSongs_Com_IN_.jpg', 'title': 'Closer-(PagalSongs.Com.IN)', 'album': 'Closer-(PagalSongs.Com.IN)', 'year': '2024', 'artist': 'pagalsongs.com.in', 'musicPath': './assets/music/Closer-(PagalSongs.Com.IN).mp3'},
{'backgroundImage': './assets/images/MAD _2023_.jpg', 'title': 'College Papa :: SenSongsMp3.Com', 'album': 'MAD (2023)', 'year': '2023', 'artist': 'Narne Nithin, Sangeeth Shobhan, Sri Gouri Priya Reddy', 'musicPath': './assets/music/College Papa.mp3'},
{'backgroundImage': './assets/images/Pushpa _2021_.jpg', 'title': 'Dakko Dakko Meka :: SenSongsMp3.Com', 'album': 'Pushpa (2021)', 'year': '2021', 'artist': 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapati Babu, Sunil, Prakash Raj', 'musicPath': './assets/music/Dakko Dakko Meka.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Date Night :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2022', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Date Night.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Dethadi Dethadi-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Dethadi Dethadi-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Brahmastra _2022_.jpg', 'title': 'Deva Deva :: SenSongsMp3.Com', 'album': 'Brahmastra (2022)', 'year': '2022', 'artist': 'Ranbir Kapoor, Alia Bhat, Nagarjuna,Amitabh Bachchan', 'musicPath': './assets/music/Deva Deva.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Deva Devam - SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Deva Devam-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Dochestha :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Dochestha-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/RRR _2021_.jpg', 'title': 'Dosti :: SenSongsMp3.Com', 'album': 'RRR (2021)', 'year': '2021', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Dosti.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Dum Masala :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Dum Masala.mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'Bad Habits via Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2023', 'artist': 'Ed Sheeran', 'musicPath': './assets/music/Ed-Sheeran-Bad-Habits.mp3'},
{'backgroundImage': './assets/images/Divide.jpg', 'title': 'Galway Girl | Nobadsong.com', 'album': 'Divide', 'year': '2023', 'artist': 'Ed Sheeran', 'musicPath': './assets/music/Ed-Sheeran-Galway-Girl_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'I Don’t Care via Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2023', 'artist': 'Ed Sheeran ft. Justin Bieber', 'musicPath': './assets/music/Ed-Sheeran-I-Don-t-Care.mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'Shape of You via Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2023', 'artist': 'Ed Sheeran', 'musicPath': './assets/music/Ed-Sheeran-Shape-of-You.mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'South Of The Border | Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2023', 'artist': 'Ed Sheeran ft. Cardi B & Camila Cabello', 'musicPath': './assets/music/Ed-Sheeran-South-Of-The-Border_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/X.jpg', 'title': 'Thinking Out Loud | Nobadsong.com', 'album': 'X', 'year': '2023', 'artist': 'Ed Sheeran', 'musicPath': './assets/music/Ed-Sheeran-Thinking-Out-Loud_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Ee Raathale :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2021', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Ee Raathale.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Enno Enno :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Enno Enno.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Etthara Jenda :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2022', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Etthara Jenda.mp3'},
{'backgroundImage': './assets/images/Pushpa _2021_.jpg', 'title': 'Eyy Bidda Idhi Naa Adda :: SenSongsMp3.Com', 'album': 'Pushpa (2021)', 'year': '2021', 'artist': 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapati Babu, Sunil, Prakash Raj', 'musicPath': './assets/music/Eyy Bidda Idhi Naa Adda.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Gaaju Bomma :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Gaaju Bomma.mp3'},
{'backgroundImage': './assets/images/Most Eligible Bachelor _2021_.jpg', 'title': 'Guche Gulabi :: SenSongsMp3.Com', 'album': 'Most Eligible Bachelor (2021)', 'year': '2021', 'artist': 'Akhil Akkineni, Pooja Hegde', 'musicPath': './assets/music/Guche Gulabi.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Gundelonaa :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Venkatesh, Mithila Palkar', 'musicPath': './assets/music/Gundelonaa.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Guruvaram-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Guruvaram-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Hanuman Chalisa :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Hanuman Chalisa.mp3'},
{'backgroundImage': './assets/images/Ooru Peru Bhairavakona _2023_.jpg', 'title': 'Haromhara :: SenSongsMp3.Com', 'album': 'Ooru Peru Bhairavakona (2023)', 'year': '2024', 'artist': 'Sundeep Kishan, Varsha Bollamma, Kavya Thapar', 'musicPath': './assets/music/Haromhara.mp3'},
{'backgroundImage': './assets/images/Major _2022_.jpg', 'title': 'Hrudayama :: SenSongsMp3.Com', 'album': 'Major (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Sobhita Dhulipala, Saiee M Manjrekar', 'musicPath': './assets/music/Hrudayama.mp3'},
{'backgroundImage': './assets/images/Ooru Peru Bhairavakona _2023_.jpg', 'title': 'Humma Humma :: SenSongsMp3.Com', 'album': 'Ooru Peru Bhairavakona (2023)', 'year': '2023', 'artist': 'Sundeep Kishan, Varsha Bollamma, Kavya Thapar', 'musicPath': './assets/music/Humma Humma.mp3'},
{'backgroundImage': './assets/images/Hungry Cheetah.jpg', 'title': 'Hungry Cheetah :: SenSongsMp3.Com', 'album': 'Hungry Cheetah', 'year': '2023', 'artist': 'Pawan Kalyan, Emraan Hashmi, Priyanka Arul Mohan', 'musicPath': './assets/music/Hungry Cheetah.mp3'},
{'backgroundImage': './assets/images/Adipurush _2023_.jpg', 'title': 'Huppa Huiya :: SenSongsMp3.Com', 'album': 'Adipurush (2023)', 'year': '2023', 'artist': 'Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh', 'musicPath': './assets/music/Huppa Huiya.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Idhe Idhe :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Idhe Idhe.mp3'},
{'backgroundImage': './assets/images/Ooru Peru Bhairavakona _2023_.jpg', 'title': 'Idi Bairavakona :: SenSongsMp3.Com', 'album': 'Ooru Peru Bhairavakona (2023)', 'year': '2024', 'artist': 'Sundeep Kishan, Varsha Bollamma, Kavya Thapar', 'musicPath': './assets/music/Idi Bairavakona.mp3'},
{'backgroundImage': './assets/images/Adipurush _2023_.jpg', 'title': 'Jai Shriram :: SenSongsMp3.Com', 'album': 'Adipurush (2023)', 'year': '2023', 'artist': 'Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh', 'musicPath': './assets/music/Jai Shriram.mp3'},
{'backgroundImage': './assets/images/Major _2022_.jpg', 'title': 'Jana Gana Mana :: SenSongsMp3.Com', 'album': 'Major (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Sobhita Dhulipala, Saiee M Manjrekar', 'musicPath': './assets/music/Jana Gana Mana.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Janani :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2021', 'artist': 'Jr NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Janani.mp3'},
{'backgroundImage': './assets/images/Game Changer _2024_.jpg', 'title': 'Jaragandi :: SenSongsMp3.Com', 'album': 'Game Changer (2024)', 'year': '2024', 'artist': 'Ram Charan , Kaira Advani, Srikanth, S J Surya', 'musicPath': './assets/music/Jaragandi.mp3'},
{'backgroundImage': './assets/images/My Everything _Deluxe_.jpg', 'title': 'Bang Bang | Nobadsong.com', 'album': 'My Everything (Deluxe)', 'year': '2023', 'artist': 'Jessie J, Ariana Grande, Nicki Minaj', 'musicPath': './assets/music/Jessie-J-Ariana-Grande-Nicki-Minaj-Bang-Bang_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Vakeel Saab _2021_.jpg', 'title': 'Kadhulu Kadhulu :: SenSongsMp3.Com', 'album': 'Vakeel Saab (2021)', 'year': '2021', 'artist': 'Pawan Kalyan, Shruti Haasan, Anjali, Nivetha Thomas, Ananya Nagalla', 'musicPath': './assets/music/Kadhulu Kadhulu - SenSongsMp3.Com.mp3'},
{'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Kalaavathi :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'Mahesh Babu, Keerthy Suresh', 'musicPath': './assets/music/Kalaavathi.mp3'},
{'backgroundImage': './assets/images/Virupaksha _2023_.jpg', 'title': 'Kalallo :: SenSongsMp3.Com', 'album': 'Virupaksha (2023)', 'year': '2023', 'artist': 'Sai Dharam Tej, Samyuktha Menon', 'musicPath': './assets/music/Kalallo.mp3'},
{'backgroundImage': './assets/images/Major _2022_.jpg', 'title': 'Kanna Kanna :: SenSongsMp3.Com', 'album': 'Major (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Sobhita Dhulipala, Saiee M Manjrekar', 'musicPath': './assets/music/Kanna Kanna.mp3'},
{'backgroundImage': './assets/images/Vakeel Saab _2021_.jpg', 'title': 'Kanti Papa :: SenSongsMp3.Com', 'album': 'Vakeel Saab (2021)', 'year': '2021', 'artist': 'Pawan Kalyan, Shruti Haasan, Anjali, Niveda Thomas, Ananya Nagalla', 'musicPath': './assets/music/Kanti Papa - SenSongsMp3.Com.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Katama Rayuda- SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Katamarayuda -SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Ooru Peru Bhairavakona _2023_.jpg', 'title': 'Kill The Devil :: SenSongsMp3.Com', 'album': 'Ooru Peru Bhairavakona (2023)', 'year': '2024', 'artist': 'Sundeep Kishan, Varsha Bollamma, Kavya Thapar', 'musicPath': './assets/music/Kill The Devil.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Kirraaku- SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Kirraaku-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Kodukulara :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Kodukulara.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Komma Uyyala :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2022', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Komma Uyyala.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Komuram Bheemudo :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2021', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Komuram Bheemudo.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Krishna Krishna :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2022', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Krishna Krishna.mp3'},
{'backgroundImage': './assets/images/Karthikeya 2 _2022_.jpg', 'title': 'Krishna Trance :: SenSongsMp3.Com', 'album': 'Karthikeya 2 (2022)', 'year': '2022', 'artist': 'Nikhil, Anupama Parameswaran', 'musicPath': './assets/music/Krishna Trance.mp3'},
{'backgroundImage': './assets/images/Brahmastra _2022_.jpg', 'title': 'Kumkumala :: SenSongsMp3.Com', 'album': 'Brahmastra (2022)', 'year': '2022', 'artist': 'Ranbir Kapoor, Alia Bhat, Nagarjuna,Amitabh Bachchan', 'musicPath': './assets/music/Kumkumala.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Kurchi Madathapetti :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Kurchi Madathapetti.mp3'},
{'backgroundImage': './assets/images/Kushi _2023_.jpg', 'title': 'Kushi :: SenSongsMp3.Com', 'album': 'Kushi (2023)', 'year': '2023', 'artist': 'Vijay Devarakonda, Samantha', 'musicPath': './assets/music/Kushi.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': 'Lala Bheemla (DJ Version) :: SenSongsMp3.Com', 'album': 'Bheemla Nayak (2022)', 'year': '2021', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Lala Bheemla (DJ Version).mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': 'Lala Bheemla :: SenSongsMp3.Com', 'album': 'Bheemla Nayak (2022)', 'year': '2021', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/Lala Bheemla.mp3'},
{'backgroundImage': './assets/images/Most Eligible Bachelor _2021_.jpg', 'title': 'Leharaayi :: SenSongsMp3.Com', 'album': 'Most Eligible Bachelor (2021)', 'year': '2021', 'artist': 'Akhil Akkineni, Pooja Hegde', 'musicPath': './assets/music/Leharaayi.mp3'},
{'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Ma Ma Mahesha :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'Mahesh Babu, Keerthy Suresh', 'musicPath': './assets/music/Ma Ma Mahesha.mp3'},
{'backgroundImage': './assets/images/Vakeel Saab _2021_.jpg', 'title': 'Maguva Maguva Female :: SenSongsMp3.Com', 'album': 'Vakeel Saab (2021)', 'year': '2021', 'artist': 'Pawan Kalyan, Shruti Haasan, Anjali, Niveda Thomas, Ananya Nagalla', 'musicPath': './assets/music/Maguva Maguva (Female).mp3'},
{'backgroundImage': './assets/images/Vakeel Saab _2020_.jpg', 'title': 'Maguva Maguva :: SenSongsMp3.Co', 'album': 'Vakeel Saab (2020)', 'year': '2020', 'artist': 'Pawan Kalyan, Anjali, Nivetha Thomas, Ananya Nagalla, Prakash Raj', 'musicPath': './assets/music/Maguva Maguva - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Jathi Ratnalu _2021_.jpg', 'title': 'Mana JathiRatnalu', 'album': 'Jathi Ratnalu (2021)', 'year': '2021', 'artist': 'Naveen Polishetty, Priyadarshi, Rahul Ramakrishna, Faria Abdullah', 'musicPath': './assets/music/Mana JathiRatnalu.mp3'},
{'backgroundImage': './assets/images/Most Eligible Bachelor _2021_.jpg', 'title': 'Manasa Manasa :: SenSongsMp3.Com', 'album': 'Most Eligible Bachelor (2021)', 'year': '2021', 'artist': 'Akhil Akkineni, Pooja Hegde', 'musicPath': './assets/music/Manasa Manasa.mp3'},
{'backgroundImage': './assets/images/Liger _2022_.jpg', 'title': 'Manchali :: SenSongsMp3.Com', 'album': 'Liger (2022)', 'year': '2022', 'artist': 'Vijay Devarakonda, Ananya Pandey, Ramya Krishnan,Mike Tyson', 'musicPath': './assets/music/Manchali.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Marachipolene :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Venkatesh, Mithila Palkar', 'musicPath': './assets/music/Marachipolene.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Mawaa Enthaina :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Mawaa Enthaina.mp3'},
{'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Murari Vaa :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'Mahesh Babu, Keerthy Suresh', 'musicPath': './assets/music/Murari Vaa.mp3'},
{'backgroundImage': './assets/images/Kushi _2023_.jpg', 'title': 'Na Roja Nuvve :: SenSongsMp3.Com', 'album': 'Kushi (2023)', 'year': '2023', 'artist': 'Vijay Devarakonda, Samantha', 'musicPath': './assets/music/Na Roja Nuvve.mp3'},
{'backgroundImage': './assets/images/Virupaksha _2023_.jpg', 'title': 'Nachavule Nachavule :: SenSongsMp3.Com', 'album': 'Virupaksha (2023)', 'year': '2023', 'artist': 'Sai Dharam Tej, Samyuktha Menon', 'musicPath': './assets/music/Nachavule Nachavule.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Nagumomu Thaarale :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2021', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Nagumomu Thaarale.mp3'},
{'backgroundImage': './assets/images/Karthikeya 2 _2022_.jpg', 'title': 'Nannu Nenu Adiga :: SenSongsMp3.Com', 'album': 'Karthikeya 2 (2022)', 'year': '2022', 'artist': 'Nikhil, Anupama Parameswaran', 'musicPath': './assets/music/Nannu Nenu Adiga.mp3'},
{'backgroundImage': './assets/images/Ante Sundaraniki _2022_.jpg', 'title': 'Natavara :: SenSongsMp3.Com', 'album': 'Ante Sundaraniki (2022)', 'year': '2022', 'artist': 'Nani, Nazriya Fahadh', 'musicPath': './assets/music/Natavara.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Nattu Nattu :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2021', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Nattu Nattu.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Nee Dookudu-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Nee Dookudu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Nee Kallalona :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Nee Kallalona-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Needhe Needhe :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Needhe Needhe.mp3'},
{'backgroundImage': './assets/images/Ooru Peru Bhairavakona _2023_.jpg', 'title': 'Nijame Ne Chebuthunna :: SenSongsMp3.Com', 'album': 'Ooru Peru Bhairavakona (2023)', 'year': '2023', 'artist': 'Sundeep Kishan, Varsha Bollamma, Kavya Thapar', 'musicPath': './assets/music/Nijame Ne Chebuthunna.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Ninna Monnalaage :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Venkatesh, Mithila Palkar', 'musicPath': './assets/music/Ninna Monnalaage.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Ninnele :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2022', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Ninnele.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Ninnu Chudaganne - SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Ninnu Chudaganne -SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/DJ Tillu _2022_.jpg', 'title': 'Nuvvala (Female Version) :: SenSongsMp3.Com', 'album': 'DJ Tillu (2022)', 'year': '2022', 'artist': 'Siddu Jonnalagadda, Neha Shetty', 'musicPath': './assets/music/Nuvvala (Female Version).mp3'},
{'backgroundImage': './assets/images/DJ Tillu _2022_.jpg', 'title': 'Nuvvala :: SenSongsMp3.Com', 'album': 'DJ Tillu (2022)', 'year': '2022', 'artist': 'Siddu Jonnalagadda, Neha Shetty', 'musicPath': './assets/music/Nuvvala.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Nuvve Naa Dhairyam :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Nuvve Naa Dhairyam.mp3'},
{'backgroundImage': './assets/images/Bheemla Nayak _2022_.jpg', 'title': '⁏慓摮浡浡ꁡ㨺匠湥潓杮䵳㍰䌮浯', 'album': 'Bheemla Nayak (2022)', 'year': '2022', 'artist': 'Pawan Kalyan, Rana Daggubati, Nithya Menon, Aishwarya Rajesh', 'musicPath': './assets/music/O Sandamama.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Odiyamma :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Odiyamma.mp3'},
{'backgroundImage': './assets/images/Major _2022_.jpg', 'title': 'Oh Isha :: SenSongsMp3.Com', 'album': 'Major (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Sobhita Dhulipala, Saiee M Manjrekar', 'musicPath': './assets/music/Oh Isha.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Oh My Baby :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Oh My Baby.mp3'},
{'backgroundImage': './assets/images/Tillu Square _2024_.jpg', 'title': 'Oh My Lilly :: SenSongsMp3.Com', 'album': 'Tillu Square (2024)', 'year': '2024', 'artist': 'Siddu Jonnalagadda, Anupama Parameswaran', 'musicPath': './assets/music/Oh My Lilly.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Okariki Okarani :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Okariki Okarani.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'OMG Daddy :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Roll Rida, Rahul Nambiar, Lady Kash, Rahul Sipligunj, Blaaze', 'musicPath': './assets/music/OMG Daddy - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Pushpa _2021_.jpg', 'title': 'Oo Antava Oo Oo Antava :: SenSongsMp3.Com', 'album': 'Pushpa (2021)', 'year': '2021', 'artist': 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapati Babu, Sunil, Prakash Raj', 'musicPath': './assets/music/Oo Antava Oo Oo Antava.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Ooru Palletooru :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Ooru Palletooru.mp3'},
{'backgroundImage': './assets/images/Ante Sundaraniki _2022_.jpg', 'title': 'Orori Sanchari :: SenSongsMp3.Com', 'album': 'Ante Sundaraniki (2022)', 'year': '2022', 'artist': 'Nani, Nazriya Fahadh', 'musicPath': './assets/music/Orori Sanchari.mp3'},
{'backgroundImage': './assets/images/Kushi _2023_.jpg', 'title': 'Osi Pellama :: SenSongsMp3.Com', 'album': 'Kushi (2023)', 'year': '2023', 'artist': 'Vijay Devarakonda, Samantha', 'musicPath': './assets/music/Osi Pellama.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Paathashala Loo :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Mithila Palkar', 'musicPath': './assets/music/Paathashala Loo.mp3'},
{'backgroundImage': './assets/images/DJ Tillu _2022_.jpg', 'title': 'Pataas Pilla :: SenSongsmp3.Com', 'album': 'DJ Tillu (2022)', 'year': '2022', 'artist': 'Siddu Jonnalagadda, Neha Shetty', 'musicPath': './assets/music/Pataas Pilla.mp3'},
{'backgroundImage': './assets/images/Hanuman _2024_.jpg', 'title': 'Poolamme Pilla :: SenSongsMp3.Com', 'album': 'Hanuman (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Poolamme Pilla.mp3'},
{'backgroundImage': './assets/images/Dookudu_2011_.jpg', 'title': 'Poovai Poovai-SenSongsMp3.Co', 'album': 'Dookudu(2011)', 'year': '2011', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Poovai Poovai-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hit 2 _2022_.jpg', 'title': 'Poratame 2 :: SenSongsMp3.Com', 'album': 'Hit 2 (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Meenakshi Chaudhary, Rao Ramesh', 'musicPath': './assets/music/Poratame 2.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Potti Pilla :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Potti Pilla.mp3'},
{'backgroundImage': './assets/images/Salaar _2023_.jpg', 'title': 'Prathi Kadalo :: SenSongsMp3.Com', 'album': 'Salaar (2023)', 'year': '2023', 'artist': 'Prabhas, Shruti Haasan, Prithviraj Sukumaran,  Jagapathi Babu', 'musicPath': './assets/music/Prathi Kadalo.mp3'},
{'backgroundImage': './assets/images/Karthikeya 2 _2022_.jpg', 'title': 'Prathi Udhayam :: SenSongsMp3.Com', 'album': 'Karthikeya 2 (2022)', 'year': '2022', 'artist': 'Nikhil, Anupama Parameswaran', 'musicPath': './assets/music/Prathi Udhayam.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Preme Aakasam :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Preme Aakasam.mp3'},
{'backgroundImage': './assets/images/Adipurush _2023_.jpg', 'title': 'Priya Mithunam :: SenSongsMp3.Com', 'album': 'Adipurush (2023)', 'year': '2023', 'artist': 'Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh', 'musicPath': './assets/music/Priya Mithunam.mp3'},
{'backgroundImage': './assets/images/RRR _2022_.jpg', 'title': 'Raamam Raaghavam :: SenSongsMp3.Com', 'album': 'RRR (2022)', 'year': '2021', 'artist': 'NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris, Samuthirakani', 'musicPath': './assets/music/Raamam Raaghavam.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Raavana :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Raavana-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tillu Square _2023_.jpg', 'title': 'Radhika :: SenSongsMp3.Com', 'album': 'Tillu Square (2023)', 'year': '2023', 'artist': 'Siddu Jonnalagadda, Anupama Parameswaran', 'musicPath': './assets/music/Radhika.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Raghunandana :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Raghunandana.mp3'},
{'backgroundImage': './assets/images/Virupaksha _2023_.jpg', 'title': 'Ragile Jwaale :: SenSongsMp3.Com', 'album': 'Virupaksha (2023)', 'year': '2023', 'artist': 'Sai Dharam Tej, Samyuktha Menon', 'musicPath': './assets/music/Ragile Jwaale.mp3'},
{'backgroundImage': './assets/images/Adipurush _2023_.jpg', 'title': 'Ram Sita Ram :: SenSongsMp3.Com', 'album': 'Adipurush (2023)', 'year': '2023', 'artist': 'Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh', 'musicPath': './assets/music/Ram Sita Ram.mp3'},
{'backgroundImage': './assets/images/Guntur Kaaram _2023_.jpg', 'title': 'Ramana Aei :: SenSongsMp3.Com', 'album': 'Guntur Kaaram (2023)', 'year': '2023', 'artist': 'Mahesh Babu, Meenakshi Chaudhary, Shree Leela', 'musicPath': './assets/music/Ramana Aei.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Ramuloo Ramula :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2019', 'artist': 'Anurag Kulkarni, Mangli', 'musicPath': './assets/music/Ramuloo Ramula - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Ante Sundaraniki _2022_.jpg', 'title': 'Rango Ranga :: SenSongsMp3.Com', 'album': 'Ante Sundaraniki (2022)', 'year': '2022', 'artist': 'Nani, Nazriya Fahadh', 'musicPath': './assets/music/Rango Ranga.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Rowdy Boys :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Rowdy Boys.mp3'},
{'backgroundImage': './assets/images/Pushpa _2021_.jpg', 'title': 'Saami Saami :: SenSongsMp3.Com', 'album': 'Pushpa (2021)', 'year': '2021', 'artist': 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapati Babu, Sunil, Prakash Raj', 'musicPath': './assets/music/Saami Saami.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Samajavaragamana (Female) :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Allu Arjun, Pooja Hegde', 'musicPath': './assets/music/Samajavaragamana (Female) - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Samajavaragamana :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Sid Sriram', 'musicPath': './assets/music/Samajavaragamana - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hi Nanna _2023_.jpg', 'title': 'Samayama :: SenSongsMp3.Com', 'album': 'Hi Nanna (2023)', 'year': '2023', 'artist': 'Nani, Mrunal Thakur', 'musicPath': './assets/music/Samayama.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Sanchari :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2021', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Sanchari.mp3'},
{'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Sarkaru Vaari Paata Rap :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'Mahesh Babu, Keerthy Suresh', 'musicPath': './assets/music/Sarkaru Vaari Paata Rap.mp3'},
{'backgroundImage': './assets/images/Sarkaru Vaari Paata _2022_.jpg', 'title': 'Sarkaru Vaari Paata :: SenSongsMp3.Com', 'album': 'Sarkaru Vaari Paata (2022)', 'year': '2022', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Sarkaru Vaari Paata.mp3'},
{'backgroundImage': './assets/images/Vakeel Saab _2021_.jpg', 'title': 'Sathyameva Jayathe  :: SenSongsMp3.Com', 'album': 'Vakeel Saab (2021)', 'year': '2021', 'artist': 'Pawan Kalyan, Shruti Haasan, Anjali, Niveda Thomas, Ananya Nagalla', 'musicPath': './assets/music/Sathyameva Jayathe  - SenSongsMp3.Com.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Sei Un Angelo :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2022', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Sei Un Angelo.mp3'},
{'backgroundImage': './assets/images/Adipurush _2023_.jpg', 'title': 'Shivoham :: SenSongsMp3.Com', 'album': 'Adipurush (2023)', 'year': '2023', 'artist': 'Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh', 'musicPath': './assets/music/Shivoham.mp3'},
{'backgroundImage': './assets/images/Ala Vaikunthapurramuloo _2020_.jpg', 'title': 'Sittharala Sirapadu :: SenSongsMp3.Co', 'album': 'Ala Vaikunthapurramuloo (2020)', 'year': '2020', 'artist': 'Allu Arjun, Pooja Hegde', 'musicPath': './assets/music/Sittharala Sirapadu - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Salaar _2023_.jpg', 'title': 'Sooreede :: SenSongsMp3.Com', 'album': 'Salaar (2023)', 'year': '2023', 'artist': 'Prabhas, Shruti Haasan, Prithviraj Sukumaran,  Jagapathi Babu', 'musicPath': './assets/music/Sooreede.mp3'},
{'backgroundImage': './assets/images/Salaar _2023_.jpg', 'title': 'Sound of Salaar :: SenSongsMp3.Com', 'album': 'Salaar (2023)', 'year': '2023', 'artist': 'Prabhas, Shruti Haasan, Prithviraj Sukumaran,  Jagapathi Babu', 'musicPath': './assets/music/Sound of Salaar.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Sri Ramadootha Stotram :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Sri Ramadootha Stotram.mp3'},
{'backgroundImage': './assets/images/Pushpa _2021_.jpg', 'title': 'Srivalli :: SenSongsMp3.Com', 'album': 'Pushpa (2021)', 'year': '2021', 'artist': 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapati Babu, Sunil, Prakash Raj', 'musicPath': './assets/music/Srivalli.mp3'},
{'backgroundImage': './assets/images/Radhe Shyam _2022_.jpg', 'title': 'Sundhara Vadhana :: SenSongsMp3.Com', 'album': 'Radhe Shyam (2022)', 'year': '2022', 'artist': 'Prabhas, Pooja Hegde, Jagapathi Babu, Sathyaraj', 'musicPath': './assets/music/Sundhara Vadhana.mp3'},
{'backgroundImage': './assets/images/Hanu Man _2024_.jpg', 'title': 'Super Hero Hanu Man :: SenSongsMp3.Com', 'album': 'Hanu Man (2024)', 'year': '2024', 'artist': 'Teja Sajja, Amritha Aiyer, Varalakshmi Sarath Kumar', 'musicPath': './assets/music/Super Hero Hanu Man.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Swing Zara :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Swing Zara-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'Anti Hero via Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2023', 'artist': 'Taylor Swift', 'musicPath': './assets/music/Taylor-Swift-Anti-Hero.mp3'},
{'backgroundImage': './assets/images/Lover.jpg', 'title': 'Lover | Nobadsong.com', 'album': 'Lover', 'year': '2023', 'artist': 'Taylor Swift', 'musicPath': './assets/music/Taylor-Swift-Lover_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/evermore.jpg', 'title': 'Willow | Nobadsong.com', 'album': 'evermore', 'year': '2023', 'artist': 'Taylor Swift', 'musicPath': './assets/music/Taylor-Swift-Willow_(Nobadsong.com).mp3'},
{'backgroundImage': './assets/images/Ante Sundaraniki _2022_.jpg', 'title': 'Thandanaanandha :: SenSongsMp3.Com', 'album': 'Ante Sundaraniki (2022)', 'year': '2022', 'artist': 'Nani, Nazriya Fahadh', 'musicPath': './assets/music/Thandanaanandha.mp3'},
{'backgroundImage': './assets/images/Ante Sundaraniki _2022_.jpg', 'title': 'The Pancha Kattu :: SenSongsMp3.Com', 'album': 'Ante Sundaraniki (2022)', 'year': '2022', 'artist': 'Nani, Nazriya Fahadh', 'musicPath': './assets/music/The Pancha Kattu.mp3'},
{'backgroundImage': './assets/images/_Nobadsong_com.jpg', 'title': 'Don’t Let Me Down via Nobadsong.com', 'album': 'Nobadsong.com', 'year': '2021', 'artist': 'The Chainsmokers ft. Daya', 'musicPath': './assets/music/The-Chainsmokers-Don-t-Let-Me-Down.mp3'},
{'backgroundImage': './assets/images/After Hours.jpg', 'title': 'Blinding Lights via Nobadsong.com', 'album': 'After Hours', 'year': '2023', 'artist': 'The Weeknd', 'musicPath': './assets/music/The-Weeknd-Blinding-Lights.mp3'},
{'backgroundImage': './assets/images/After Hours.jpg', 'title': 'Save Your Tears via Nobadsong.com', 'album': 'After Hours', 'year': '2023', 'artist': 'The Weeknd', 'musicPath': './assets/music/The-Weeknd-Save-Your-Tears.mp3'},
{'backgroundImage': './assets/images/The Weeknd in Japan.jpg', 'title': 'Starboy via Nobadsong.com', 'album': 'The Weeknd in Japan', 'year': '2023', 'artist': 'The Weeknd ft. Daft Punk', 'musicPath': './assets/music/The-Weeknd-Starboy.mp3'},
{'backgroundImage': './assets/images/Balagam _2023_.jpg', 'title': 'Thoduga Ma Thodundi :: SenSongsMp3.Com', 'album': 'Balagam (2023)', 'year': '2023', 'artist': 'Priyadarshi, Kavya Kalyanram', 'musicPath': './assets/music/Thoduga Ma Thodundi.mp3'},
{'backgroundImage': './assets/images/Tillu Square _2023_.jpg', 'title': 'Ticket Eh Konakunda :: SenSongsMp3.Com', 'album': 'Tillu Square (2023)', 'year': '2023', 'artist': 'Siddu Jonnalagadda, Anupama Parameswaran', 'musicPath': './assets/music/Ticket Eh Konakunda.mp3'},
{'backgroundImage': './assets/images/DJ Tillu _2022_.jpg', 'title': 'Tillu Anna DJ Pedithe :: SenSongsMp3.Com', 'album': 'DJ Tillu (2022)', 'year': '2022', 'artist': 'Siddu Jonnalagadda, Neha Shetty', 'musicPath': './assets/music/Tillu Anna DJ Pedithe.mp3'},
{'backgroundImage': './assets/images/Atharintiki Daaredi _2013_.jpg', 'title': 'Time To Party  - SenSongsMp3.Co', 'album': 'Atharintiki Daaredi (2013)', 'year': '2013', 'artist': 'Pawan Kalyan, Samantha & Pranitha', 'musicPath': './assets/music/Time To Party -SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Jai Lava Kusa _2017_.jpg', 'title': 'Tring Tring :: SenSongsMp3.Co', 'album': 'Jai Lava Kusa (2017)', 'year': '2017', 'artist': 'Jr Ntr, Rashi Khanna, Nivetha Thomas', 'musicPath': './assets/music/Tring Tring-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Hit 2 _2022_.jpg', 'title': 'Urike Urike :: SenSongsMp3.Com', 'album': 'Hit 2 (2022)', 'year': '2022', 'artist': 'Adivi Sesh, Meenakshi Chaudhary, Rao Ramesh', 'musicPath': './assets/music/Urike Urike.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Vesane O Nicchena :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Vesane Nicchena.mp3'},
{'backgroundImage': './assets/images/Salaar _2023_.jpg', 'title': 'Vinaraa :: SenSongsMp3.Com', 'album': 'Salaar (2023)', 'year': '2023', 'artist': 'Prabhas, Shruti Haasan, Prithviraj Sukumaran,  Jagapathi Babu', 'musicPath': './assets/music/Vinaraa.mp3'},
{'backgroundImage': './assets/images/Liger _2022_.jpg', 'title': 'Waat Laga Denge :: SenSongsMp3.Com', 'album': 'Liger (2022)', 'year': '2022', 'artist': 'Vijay Devarakonda, Ananya Pandey, Ramya Krishnan,Mike Tyson', 'musicPath': './assets/music/Waat Laga Denge.mp3'},
{'backgroundImage': './assets/images/Rowdy Boys _2021_.jpg', 'title': 'Ye Zindagi :: SenSongsMp3.Com', 'album': 'Rowdy Boys (2021)', 'year': '2021', 'artist': 'Ashish, Anupama Parameswaran', 'musicPath': './assets/music/Ye Zindagi.mp3'},
{'backgroundImage': './assets/images/Kushi _2023_.jpg', 'title': 'Yedhaki Oka Gaayam :: SenSongsMp3.Com', 'album': 'Kushi (2023)', 'year': '2023', 'artist': 'Vijay Devarakonda, Samantha', 'musicPath': './assets/music/Yedhaki Oka Gaayam.mp3'},
{'backgroundImage': './assets/images/Ori Devuda _2022_.jpg', 'title': 'Yendhi Ra Life Idhi :: SenSongsMp3.Com', 'album': 'Ori Devuda (2022)', 'year': '2022', 'artist': 'Vishwak Sen, Venkatesh, Mithila Palkar', 'musicPath': './assets/music/Yendhi Ra Life Idhi.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '01 - Bham Bham Bole-(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/01 - Bham Bham Bole - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '02 - Ammadu Appachi-(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/02 - Ammadu Appachi - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '03 - Radhe Govinda -(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/03 - Radhe Govinda  - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '04 - Ghallu Ghallu -(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/04 - Ghallu Ghallu  - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '05 - Dayi Dayi Damma -(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/05 - Dayi Dayi Damma  - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Indra _2002_.jpg', 'title': '06 - Ayyo Ayyo Ayyayyo -(www.SenSongsMp3.co)', 'album': 'Indra (2002)', 'year': '2002', 'artist': 'Indra', 'musicPath': './assets/music/06 - Ayyo Ayyo Ayyayyo  - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Suzume.jpg', 'title': 'Suzume no Tojimari - Suzume Theme Song', 'album': 'Suzume', 'year': '2023', 'artist': 'Suzume', 'musicPath': './assets/music/Suzume no TojimariSuzumeTheme Song.mp3'},
{'backgroundImage': './assets/images/Dr.Stone.jpg', 'title': 'Rude-α 『LIFE』- Dr.Stone', 'album': 'Dr.Stone', 'year': '2021', 'artist': 'Dr.Stone', 'musicPath': './assets/music/Rude-α 『LIFE』.mp3'},
{'backgroundImage': './assets/images/33-Max Verstappen.jpg', 'title': '33 Max Verstappen', 'album': 'Max Verstappen', 'year': '2020', 'artist': 'Max Verstappen', 'musicPath': './assets/music/Carte Blanq & Maxx Power - 33 Max Verstappen.mp3'},
{'backgroundImage': './assets/images/Top Gun Maverick.jpg', 'title': 'I Ain’t Worried', 'album': 'Top Gun Maverick', 'year': '2021', 'artist': 'OneRepublic', 'musicPath': './assets/music/OneRepublic - I Ain’t Worried (From “Top Gun_ Maverick”).mp3'},
{'backgroundImage': './assets/images/Adele.webp', 'title': 'Skyfall', 'album': 'Skyfall', 'year': '2013', 'artist': 'Adele', 'musicPath': './assets/music/Skyfall.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Allasani Vaari :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Allasani Vaari - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Break The Rules :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Break The Rules - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema_1998_.jpg', 'title': 'Ee Manase Se Se-My3Songs.Com', 'album': 'Tholi Prema(1998)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Ee Manase Se-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema_1998_.jpg', 'title': 'Emi Sodara-My3Songs.Com', 'album': 'Tholi Prema(1998)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Emi Sodara-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema_1998_.jpg', 'title': 'Gagananiki-My3Songs.Com', 'album': 'Tholi Prema(1998)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Gagananiki-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Ninnila :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Ninnila - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema_1998_.jpg', 'title': 'Romance Rythms-My3Songs.Com', 'album': 'Tholi Prema(1998)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Romance Rythms-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Sunona Sunaina :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Sunona Sunaina - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Toliprema :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Toliprema - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema _2018_.jpg', 'title': 'Vinnane Vinnane :: SenSongsMp3.Co', 'album': 'Tholi Prema (2018)', 'year': '2018', 'artist': 'Varun Tej, Raashi Khanna', 'musicPath': './assets/music/Vinnane Vinnane - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Tholi Prema_1998_.jpg', 'title': 'Yemaindo Yemo-My3Songs.Com', 'album': 'Tholi Prema(1998)', 'year': '2016', 'artist': 'My3Songs.Com', 'musicPath': './assets/music/Yemaindo Yemo-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Edo Jarugutondi', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Aravind Srinivas, Renuka', 'musicPath': './assets/music/Edo Jarugutondi.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Fidaa', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Vedala Hemachandra, Malavika', 'musicPath': './assets/music/Fidaa.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Hey Mister', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Deepak', 'musicPath': './assets/music/Hey Mister.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Hey Pillagaada', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Sinduri Vishal, Sinov Raj', 'musicPath': './assets/music/Hey Pillagaada.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Oosupodu', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Vedala Hemachandra', 'musicPath': './assets/music/Oosupodu.mp3'},
{'backgroundImage': './assets/images/Fidaa - _2017_.jpg', 'title': 'Vachinde', 'album': 'Fidaa - (2017)', 'year': '2017', 'artist': 'Madhu Priya, Ramki', 'musicPath': './assets/music/Vachinde.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Ardham Leni Navvu :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Ardham Leni Navvu - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Ga Gha Megha :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Ga Gha Megha - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Miami :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Miami - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Pedda Puli :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Pedda Puli - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Vaaram :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Vaaram - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Chal Mohan Ranga _2018_.jpg', 'title': 'Very Very Sad :: SenSongsMp3.Co', 'album': 'Chal Mohan Ranga (2018)', 'year': '2018', 'artist': 'Nithin, Megha Akash', 'musicPath': './assets/music/Very Very Sad - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'AB Yevaro Nee Baby :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/AB Yevaro Nee Baby - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'Baitikochi Chuste :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/Baitikochi Chuste - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'Dhaga Dhagamaney :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/Dhaga Dhagamaney - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'Gaali Vaaluga :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/Gaali Vaaluga - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'Kodakaa Koteswar Rao :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/Kodakaa Koteswar Rao - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Agnyaathavaasi _2018_.jpg', 'title': 'Swagatham Krishna :: SenSongsMp3.Co', 'album': 'Agnyaathavaasi (2018)', 'year': '2018', 'artist': 'Pawan Kalyan, Keerthy Suresh, Anu Emmanuel', 'musicPath': './assets/music/Swagatham Krishna - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Evare-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/1-Evare-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Bang Bang-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/2- Bang Bang-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Ennosarlu-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/3-Ennosarlu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Evadu Evadu-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/4-Evadu Evadu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Agarottula-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/5- Agarottula-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': ' Prema Pusene-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/6- Prema Pusene-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Premam _2016_.jpg', 'title': 'Ninna Leni-SenSongsMp3.Co', 'album': 'Premam (2016)', 'year': '2016', 'artist': 'Naga Chaitanya, Sruthi Hassan, Madonna Sebastain, Anupama Parameswaran', 'musicPath': './assets/music/7-Ninna Leni-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Chaila Chaila-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Chaila Chaila-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Naa Pere Kanchanamaala-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Naa Pere Kanchanamaala-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Pattu Pattu-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Pattu Pattu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Sande Poddu-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Sande Poddu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Shankerdada M.B.B.S-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Shankerdada M.B.B.S-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Thellarindoi-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Thellarindoi-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Shankar Dada MBBS _2017_.jpg', 'title': 'Ye Jilla-SenSongsMp3.Co', 'album': 'Shankar Dada MBBS (2017)', 'year': '2000', 'artist': 'Chiranjeevi, Sonali Bendre', 'musicPath': './assets/music/Ye Jilla-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Aaraduguluntada-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Aaraduguluntada-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Inka Cheppaale-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Inka Cheppaale-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Mari Antaga-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Mari Antaga-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Meghaallo-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Meghaallo-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Seethamma Vakitlo Sirimalle Chettu-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Seethamma Vakitlo Sirimalle Chettu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Vaana Chinukulu-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Vaana Chinukulu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Seethamma Vakitlo Sirimalle Chettu_2013_.jpg', 'title': 'Yem Cheddaam-SenSongsMp3.Co', 'album': 'Seethamma Vakitlo Sirimalle Chettu(2013)', 'year': '2014', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Yem Cheddaam-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': '02 - Nuvvemaya Chesavo - SenSongsMp3.co', 'album': 'Okkadu - (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika', 'musicPath': './assets/music/02 - Nuvvemaya Chesavo - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': '03 - Cheppave Chirugali - SenSongsMp3.co', 'album': 'Okkadu - (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika', 'musicPath': './assets/music/03 - Cheppave Chirugali - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': '05 - Attarintiki - SenSongsMp3.co', 'album': 'Okkadu - (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika', 'musicPath': './assets/music/05 - Attarintiki - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': '06 - Sahasam - SenSongsMp3.co', 'album': 'Okkadu - (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika', 'musicPath': './assets/music/06 - Sahasam - SenSongsMp3.co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': 'Hare Rama-SenSongsMp3.Co', 'album': 'Okkadu (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika Chawla', 'musicPath': './assets/music/Hare Rama-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Okkadu _2003_.jpg', 'title': 'Hay Rey Hai-SenSongsMp3.Co', 'album': 'Okkadu (2003)', 'year': '2003', 'artist': 'Mahesh Babu, Bhumika Chawla', 'musicPath': './assets/music/Hay Rey Hai-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Adharaku-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Adharaku-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Avunu Nizam-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Avunu Nizam-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Chandamama-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Chandamama-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Neetho Cheppana-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Neetho Cheppana-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Pilichina-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Pilichina-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Athadu_2005_.jpg', 'title': 'Pillagali-SenSongsMp3.Co', 'album': 'Athadu(2005)', 'year': '2012', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Pillagali-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Apple Beauty  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Apple Beauty  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Jayaho Janatha  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Jayaho Janatha  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Nee Selavdigi  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Nee Selavdigi  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Pakka Local  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Pakka Local  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Pranaamam  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Pranaamam  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Janatha Garage _2016_.jpg', 'title': 'Rock On Bro  - SenSongsMp3.Co', 'album': 'Janatha Garage (2016)', 'year': '2016', 'artist': 'Jr NTR, Samantha, Mohanlal, Nithya Menen', 'musicPath': './assets/music/Rock On Bro  - SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/1 Nenokkadine_2013_.jpg', 'title': 'Aww Tuzo Mogh Korta-SenSongsMp3.Co', 'album': '1 Nenokkadine(2013)', 'year': '2013', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Aww Tuzo Mogh Korta-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/1 Nenokkadine_2013_.jpg', 'title': 'London Babu London Babu-SenSongsMp3.Co', 'album': '1 Nenokkadine(2013)', 'year': '2013', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/London Babu London Babu-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/1 Nenokkadine_2013_.jpg', 'title': 'O Sayonara Sayonara-SenSongsMp3.Co', 'album': '1 Nenokkadine(2013)', 'year': '2013', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/O Sayonara Sayonara-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/1 Nenokkadine_2013_.jpg', 'title': 'Who Are You-SenSongsMp3.Co', 'album': '1 Nenokkadine(2013)', 'year': '2013', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/Who Are You-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/1 Nenokkadine_2013_.jpg', 'title': 'You Are My Love-SenSongsMp3.Co', 'album': '1 Nenokkadine(2013)', 'year': '2013', 'artist': 'SenSongsMp3.Co', 'musicPath': './assets/music/You Are My Love-SenSongsMp3.Co.mp3'},
{'backgroundImage': './assets/images/Aravinda Sametha - _2018_.jpg', 'title': 'Anaganaganaga', 'album': 'Aravinda Sametha - (2018)', 'year': '2018', 'artist': 'Armaan Malik', 'musicPath': './assets/music/01 - Anaganaganaga.mp3'},
{'backgroundImage': './assets/images/Marvel Anthem - _2019_.jpg', 'title': 'Marvel Anthem', 'album': 'Marvel Anthem - (2019)', 'year': '2019', 'artist': 'A.R. Rahman', 'musicPath': './assets/music/01 - Marvel Anthem.mp3'},
{'backgroundImage': './assets/images/Aravinda Sametha - _2018_.jpg', 'title': '02 - Peniviti', 'album': 'Aravinda Sametha - (2018)', 'year': '2018', 'artist': 'Kaala Bhairava', 'musicPath': './assets/music/02 - Peniviti.mp3'},
{'backgroundImage': './assets/images/Aravinda Sametha - _2018_.jpg', 'title': 'Yeda Poyindo', 'album': 'Aravinda Sametha - (2018)', 'year': '2018', 'artist': 'Nikitha Srivalli, Kailash Kher, Penchal Das', 'musicPath': './assets/music/03 - Yeda Poyindo.mp3'},
{'backgroundImage': './assets/images/Aravinda Sametha - _2018_.jpg', 'title': 'Reddy Ikkada Soodu', 'album': 'Aravinda Sametha - (2018)', 'year': '2018', 'artist': 'Daler Mehndi, Anjana Sowmya', 'musicPath': './assets/music/04 - Reddy Ikkada Soodu.mp3'},
{'backgroundImage': './assets/images/Aravinda Sametha - _2018_.jpg', 'title': 'Reddamma Thalli (Film Version)', 'album': 'Aravinda Sametha - (2018)', 'year': '2018', 'artist': 'Mohana Bhogaraju', 'musicPath': './assets/music/05 - Reddamma Thalli (Film Version).mp3'},
{'backgroundImage': './assets/images/Devara _2024_.jpg', 'title': 'All Hail The Tiger', 'album': 'Devara (2023)', 'year': '2024', 'artist': 'Anirudh Ravichander, Natalie Di Luccio', 'musicPath': './assets/music/All Hail The Tiger.mp3'},
{'backgroundImage': './assets/images/Devara _2024_.jpg', 'title': 'Fear', 'album': 'Devara (2024)', 'year': '2024', 'artist': 'Anirudh Ravichander', 'musicPath': './assets/music/Fear.mp3'},
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

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-item="${i}">
      <img src="${musicData[i].backgroundImage}" width="800" height="800" alt="${musicData[i].album} Album Poster"
        class="img-cover">
        <div class="album-container">
    <p class="album-name">${musicData[i].title}</p>
</div>


      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



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

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
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

const audioSource = new Audio(musicData[currentMusic].musicPath);

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

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

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