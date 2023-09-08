var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

//start and pause button
const element = document.querySelector(".my-element");
const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");

startButton.addEventListener("click", startAnimation);
pauseButton.addEventListener("click", pauseAnimation);

function startAnimation() {
  element.style.animationPlayState = "running";
  isAnimationRunning = true; // Set animation flag to true when started
}

function pauseAnimation() {
  element.style.animationPlayState = "paused";
  isAnimationRunning = false; // Set animation flag to false when paused
}

//game working code
function handleKeyPress(event) {
  // Check if the pressed key is the Space key (key code 32)
  if (event.keyCode === 32 && character.classList != "animate") {
    jump();
  }
}

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 300);
}

//score counter
var checkDead = setInterval(function () {
  if (isAnimationRunning) {
    // Only update the score if the animation is running
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
      block.style.animation = "none";
      alert("Game Over. Score: " + Math.floor(counter / 100));
      counter = 0;
      block.style.animation = "block 1s infinite linear";
    } else {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(
        counter / 100
      );
    }
  }
}, 10);
