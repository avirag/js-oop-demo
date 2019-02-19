let person = { name: 'John'};

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false
});

person.name = 'Luke';
console.log(person);
