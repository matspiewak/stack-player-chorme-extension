let root = document.querySelector(":root");
let progressPercent = 0;

var mediaStack = [
    "https://www.youtube.com/watch?v=7S-CkchE5g8&list=RD7S-CkchE5g8&start_radio=1",
    "https://www.youtube.com/watch?v=m4LrW5f4dyc",
    "https://www.youtube.com/watch?v=NOBBXfWEdW0&list=RDNOBBXfWEdW0&start_radio=1",
    "https://www.youtube.com/watch?v=BBxgzISkCLQ&list=RDMMBBxgzISkCLQ&start_radio=1",
];

var [a,b,c,d] = mediaStack;

function playMusic(url) {
    var a = new Audio(url);
    a.play();
}

function progressIncerase() {
  console.log(progressPercent);
  playMusic(a);
  while (progressPercent <= 100) {
    root.style.setProperty("--playerProgress", progressPercent++ + "%");
  }
  
}

document
  .getElementById("playButton")
  .addEventListener("click", playMusic(a));
