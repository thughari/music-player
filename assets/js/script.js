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