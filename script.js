const video = document.getElementById("video");
const play = document.getElementById("play");
const stopVid = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause Video

//Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timestamp", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stopVid.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
