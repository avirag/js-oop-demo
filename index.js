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

  let defaultLocation = {
    x: 0,
    y: 0
  };

  this.getDefaultLocation = function() {
    return defaultLocation;
  }

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if(!value.x || !value.y) {
        throw new Error('Invalid location');
      }
      defaultLocation = value;
    }
  });

  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1); // without 'new' keyword 'this' references the Window object
// another.defaultLocation = 1;

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

for (let key in circle) {
  if(typeof circle[key] !== 'function') {
    console.log(circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle) {
  console.log('Circle has a radius.');
}

