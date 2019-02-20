class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {}
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);

// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function () {};

// Class Declaration
class Circle {}

// Class Expression
const Square = class {}
