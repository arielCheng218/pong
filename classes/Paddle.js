//
class Paddle {
  constructor() {
    this.width = 150;
    this.height = 10;
    this.position = 0;
  }

  update() {
    onmousemove = (e) => {
      this.position = e.clientX - getViewWidth() / 2 - this.width / 2; // get distance from mouse to center
    };
  }

  getMinMax() {
    return [
      getViewWidth() / 2 + this.position,
      getViewWidth() / 2 + this.position + this.width,
    ];
  }

  draw() {
    fill("#00aa6d");
    rect(
      getViewWidth() / 2 + this.position,
      getViewHeight() - 100,
      this.width,
      this.height
    );
  }
}
