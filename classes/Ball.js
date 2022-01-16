//
class Ball {
  constructor() {
    this.effect = new Audio("./assets/effect.wav");
    this.out = false;
    this.score = 0;
    this.radius = 15;
    this.maxSpeed = 10;
    this.position = createVector(innerWidth / 2, innerHeight / 2);
    this.velocity = p5.Vector.random2D().mult(this.maxSpeed);
  }

  bounce() {
    if (
      this.position.x > getViewWidth() - this.radius ||
      this.position.x < this.radius
    ) {
      this.velocity.x *= -1;
    }
    if (this.position.y < this.radius) {
      this.velocity.y *= -1;
    } else if (this.position.y > getViewHeight() - this.radius) {
      this.out = true;
    }
  }

  paddle(paddleMinMax) {
    if (
      round(this.position.x) >= paddleMinMax[0] + this.radius &&
      round(this.position.x) <= paddleMinMax[1] - this.radius &&
      round(this.position.y) >= getViewHeight() - 110 - this.radius &&
      round(this.position.y) <= getViewHeight() - 90 - this.radius
    ) {
      this.score++;
      this.velocity.y *= -1;
      this.effect.play();
    }
  }

  update(paddleMinMax) {
    this.velocity.limit(this.maxSpeed);
    this.bounce();
    this.paddle(paddleMinMax);
    // update position
    this.position.add(this.velocity);
  }

  draw(running) {
    fill("#fda104");
    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.radius);
    pop();
  }
}
