

let musicStarted = false;
let music = new Audio("sounds/music.mp3");
music.volume = 0.15;

// Start music on first click
function startMusic() {
  if (!musicStarted) {
    music.play().catch((err) => {
      console.log("Music play failed:", err);
    });
    musicStarted = true;
  }
      const startScreen = document.querySelector(".start-screen");
    startScreen.classList.add("hide");
        
    setTimeout(() => {
      startScreen.style.display = "none";
      document.querySelector(".fade").style.display = "block"; // show intro screen
    }, 10);
}


document.addEventListener("keypress", function(event) {
  if (event.key === " ") {
    var intro = document.querySelector(".fade");
    intro.classList.add("hide");
    music.pause();
    music.currentTime = 0;

    setTimeout(() => {
      intro.style.display = "none";
      document.querySelector(".main").style.display = "block";
      start();
    }, 1000);
  }
});



 function start(press){
 var buttons = document.querySelectorAll("button")
 buttons.forEach(function(button){
    button.style.display = "none";
 });
 document.addEventListener("keypress",function (event){
    makesound(event.key);
 });
function makesound(key){
    console.log(event.key);
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            alert("ONLY USE KEYS W A S D  J K l press spacebar to continue");
            break;
    }
}
}

 