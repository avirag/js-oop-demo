const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    // 1st approach
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });

    // 2nd approach
    privateProps.set(this, {
      radius: radius,
      move: () => {}
    });

    privateProps.get(this).radius;
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
  }
}

const c = new Circle(1);