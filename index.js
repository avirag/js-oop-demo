// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1); // without 'new' keyword 'this' references the Window object

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const circle1 = new Circle1(1);

let x = { value: 10};
let y = x;
x.value = 20;

 