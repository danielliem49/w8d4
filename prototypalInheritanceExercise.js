Function.prototype.inherits = function (Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype
  this.prototype = new Surrogate()
  this.prototype.constructor = this
}

Function.prototype.inherits2 = function (Parent) {
  this.prototype = Object.create(Parent.prototype)
  this.prototype.constructor = this
}

function MovingObject() {}
MovingObject.prototype.move = function () {
    console.log('Its moving')
}

Ship.inherits(MovingObject);
function Ship() { }
Ship.prototype.sail = function () {
  console.log('We are sailing')
}

Asteroid.inherits(MovingObject);
function Asteroid() { }

const ship1 = new Ship()
const ast1 = new Asteroid()

ship1.move()
ship1.sail()
ast1.move()
ast1.sail()
