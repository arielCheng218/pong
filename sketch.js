// global variables
var running = false;
var score = 0;
var paddle = null;
var ball = null;
const gameOver = new Audio("./assets/gameover.wav");

function setup() {
  // variables
  paddle = new Paddle();
  ball = new Ball();
  // create canvas
  vw = getViewWidth();
  vh = getViewHeight();
  createCanvas(vw, vh);
  // listen for left and right key presses
  window.onkeydown = (e) => {
    if (e.key === "Enter") {
      running = true;
      const fade = document.getElementsByClassName("start");
      fade[0].style.display = "none";
      fade[1].style.display = "none";
      const display = document.getElementsByClassName("run");
      display[0].style.display = "block";
      display[0].innerHTML = `points: ${score}`;
    }
  };
}

// main loop
function draw() {
  background("#000000");
  paddle.update();
  paddle.draw();
  if (running) {
    ball.update(paddle.getMinMax());
  }
  ball.draw();
  score = ball.score;
  const display = document.getElementsByClassName("run");
  display[0].innerHTML = `points: ${score}`;
  if (ball.out) {
    running = false;
    ball = new Ball();
    paddle = new Paddle();
    const display = document.getElementsByClassName("start");
    display[0].style.display = "block";
    display[1].style.display = "block";
    const fade = document.getElementsByClassName("run");
    fade[0].style.display = "none";
    fade[0].innerHTML = "`points: ${score}`";
    gameOver.play();
  }
}
