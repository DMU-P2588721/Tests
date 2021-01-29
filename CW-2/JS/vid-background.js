var videoPlayer = document.getElementById('myVideo');

// Auto play, half volume.
videoPlayer.play()
videoPlayer.volume = 0.1;

// Play / pause.
videoPlayer.addEventListener('click', function () {
  if (videoPlayer.paused == false) {
    videoPlayer.pause();
    videoPlayer.firstChild.nodeValue = 'Play';
  } else {
    videoPlayer.play();
    videoPlayer.firstChild.nodeValue = 'Pause';
  }
});
