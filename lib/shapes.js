class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" height="100" width="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="350" height="200" x="10" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height='100' width='100' points="0,200 300,200 150,0" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
