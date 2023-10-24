'use strict';



/**
 * all music information
 */



const musicData = [
  {backgroundImage: "./assets/images/Oy!.jpg",title: "Oy! Oy!",album: "Oy",year: 2009,artist: "",musicPath: "./assets/music/01 - Oy! Oy! - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Yedhane Koiyyake",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/01 - Yedhane Koiyyake - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Naalona Pongenu",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/02 - Naalona Pongenu - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Oy!.jpg",title: "Saradaga",album: "Oy",year: 2009,artist: "No Spirit",musicPath: "./assets/music/02 - Saradaga - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Oy!.jpg",title: "Waiting For You",album: "Oy",year: 2009,artist: "No Spirit",musicPath: "./assets/music/03 - Waiting For You - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Yegasi Yegasi",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/03 - Yegasi Yegasi - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Oy!.jpg",title: "Anukoledenadu",album: "Oy",year: 2009,artist: "No Spirit",musicPath: "./assets/music/04 - Anukoledenadu - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Monna Kanipinchavu",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/04 - Monna Kanipinchavu - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "O Shanthi Shanthi",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/05 - O Shanthi Shanthi - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Oy!.jpg",title: "Povodhe Prema",album: "Oy",year: 2009,artist: "No Spirit",musicPath: "./assets/music/05 - Povodhe Prema - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Adhey Nannu",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/06 - Adhey Nannu - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Oy!.jpg",title: "Seheri",album: "Oy",year: 2009,artist: "No Spirit",musicPath: "./assets/music/06 - Seheri - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/surya-s-o-krishnan.avif",title: "Nidhare Kala",album: "SURYA SON OF KRISHNAN",year: 2008,artist: "No Spirit",musicPath: "./assets/music/07 - Nidhare Kala - SenSongsMp3.co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "Ola Olaala Ala",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/1-Ola Olaala Ala-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "Chilipiga",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/2-Chilipiga-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "Nenu Nuvvantu",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/3-Nenu Nuvvantu-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "Hello Rammante",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/4-Hello Rammante-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "O Range",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/5- O Range-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Orange.jpg",title: "Rooba Rooba",album: "Orange",year: 2010,artist: "No Spirit",musicPath: "./assets/music/6-Rooba Rooba-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Alanati Ramachandrudu",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Alanati Ramachandrudu-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Andaanike Aadanive",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Andaanike Aadanive-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Bangaru Kalla",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Bangaru Kalla-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Bhama Bhama",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Bhama Bhama-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "Chalore Chalore Chal (Telugu)",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/Chalore Chalore Chal (Telugu)-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Cheppamma Cheppamma",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Cheppamma Cheppamma-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Dum Dum Dum",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Dum Dum Dum-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Murari.jpg",title: "Ekkada Ekkada",album: "Murari",year: 2001,artist: "No Spirit",musicPath: "./assets/music/Ekkada Ekkada-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "Gaallo Thelinattunde",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/Gaallo Thelinattunde-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "Jalsa",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/Jalsa-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "Jennifer Lopez",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/Jennifer Lopez-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "My Heart Is Beating (Remix)",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/My Heart Is Beating (Remix)-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "My Heart Is Beating",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/My Heart Is Beating-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Divide.jpeg",title: "Perfect",album: "Single",year: 2017,artist: "Ed Sheeran",musicPath: "./assets/music/Perfect(Mr-Jatt1.com).mp3",
},
{backgroundImage: "./assets/images/Jalsa.jpg",title: "You & I",album: "Jalsa",year: 2008,artist: "No Spirit",musicPath: "./assets/music/You & I-SenSongsMp3.Co.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Annhiliate",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Annihilate.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Am I Dreaming",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Am-I-Dreaming.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "All The Way Live",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-All-The-Way-Live.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Danger-Spider",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Danger-Spider.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Hummingbird",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Hummingbird.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Calling",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Calling.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Silk and Cologne Spider Verse Remix",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Silk-and-Cologne-Spider-Verse-Remix.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Link Up",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Link-Up-Spider-Verse-Remix.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Self-Love",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Self-Love.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Home",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Home.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Nonviolent Communication",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Nonviolent-Communication.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Givin Up Not The One",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Givin-Up-Not-The-One.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Nas Morales",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Metro Boomin",musicPath: "./assets/music/Metro-Boomin-Nas-Morales.mp3",
},
{backgroundImage: "./assets/images/Across-the-spiderverse.jpg",title: "Mona Lisa",album: "Spiderman-Across-the-spiderverse",year: 2023,artist: "Dominic Fike",musicPath: "./assets/music/Dominic Fike - Mona Lisa (Official Audio) (320 kbps).mp3",
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

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].backgroundImage}" width="800" height="800" alt="${musicData[i].title} Album Poster"
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
audioSource.autoplay = true; 
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

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



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