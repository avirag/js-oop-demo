function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

/* Circle.prototype = Object.create(Object.prototype); // objectBase */
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();


// new Circle.prototype.constructor(1)
// equal to
// new Circle(1)

function Square(size, color) {
  Shape.call(this, color);

  this.size = size;
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);

  console.log('duplicate - overwrite');
}

const sq = new Square(2, 'green');