const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this['radius'] = radius;

    /* private */
    this[_radius] = radius;
  }

  // Instance Method
  // draw() {

  // }

  /* private */
  [_draw]() {

  }

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1);
// const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
console.log(Object.getOwnPropertyNames(circle));
console.log(Object.getOwnPropertySymbols(circle));




