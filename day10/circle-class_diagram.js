class Circle {
  constructor(radius, color, ...arr) {
    this.radius = radius;
    this.color = color;
    this.arr = function () {
      // for storing multiple inputs
      for (circle of Circle) {
        return this.radius && this.color;
      }
    };
  }
  get radius() {
    // radius logic
  }
  get color() {
    // color logic to get color
  }
  set radius(radius) {
    //logic
  }
  set color(color) {
    //logic
  }

  get area() {
    //area logic with inputs
  }
}

let circle1 = new Circle();
let circle2 = new Circle(2); // with radius
let circle3 = new Circle(2, "red"); // with radius and color
