const { Circle, Square, Triangle } = require("./shapes");

describe("Triangle", () => {
  test("does it render?", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square", () => {
  test("does it render?", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, , 182 56, 182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  test("does it render?", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
