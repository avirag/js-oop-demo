function Circle(radius) {
  // Instance member
  this.radius = radius;

  this.move = function() {
    console.log('move');
  }
}

/* Circle.prototype === c1.__proto__ */

// Prototype member
Circle.prototype.draw = function() {
  console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}

// Renturns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for(let key in c1) console.log(key);

