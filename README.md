# Object Oriented Programming in JavaScript
## 4 pillars of OOP
* Encapsulation --> reduce complexity + increase reusability
* Abstraction --> reduce complexity + isolate impact of changes
* Inheritance --> Eliminate redundant code
* Polymorphysm --> Refactor ugly switch-case statements

## Objects
* object literal syntax
* factory
* constructor function (new, this)
* constructor property -> every object has a constructor property
```
let x = {};
JS engin will translate that to
let x = new Object();
```
```
'', "", ``
instead of
new String()
```
* Functions are objects! (array also)
* Value Types - Number, String, Boolean, Symbol, undefined, null
* Reference Types - Object, Function, Array
```
Primitives are copied by their value
Objects are copied by their reference
```
* Private properties and methods

## Inheritance
Every object has a prototype, except the root object.
* instance member, prototype member

## ES6
* The scope of a variable defined with var is function scope or declared outside any function, global.
* The scope of a variable defined with let is block scope.
* Variables and constants declared with let or const are not hoisted!