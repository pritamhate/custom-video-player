const video = document.getElementById("video");
const play = document.getElementById("play");
const stopVid = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause Video
function toggleVideoStatus() {
  //return true;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  //return true;
  if (video.paused) {
    play.innerText = "Play";
  } else {
    play.innerText = "Pause";
  }
}

// Update Progress & TimeStamp
function updateProgress() {
  //return true;
  //console.log(video.currentTime);
  //console.log(video.duration);

  progress.value = (video.currentTime / video.duration) * 100;

  //get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  //get the seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video progress
function setVideoProgress() {
  //return true;
  video.currentTime = (progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  //return true;
  video.pause();
  video.currentTime = 0;
}

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stopVid.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
