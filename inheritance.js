console.log('inherit it');

/////////////////////////////////
// Prototype Chaining Example///
///////////////////////////////

function Shape(){
     this.name = 'shape';
     this.toString = function() {return this.name;};
};

function TwoDShape(){
  this.name = '2D shape';
}

function Triangle(side, height) {
	 this.name = 'Triangle';
	 this.side = side;
	 this.height = height;
	 this.getArea = function(){return this.side * this.height / 2;};
};

// inheritance magic
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

var my = new Triangle(5, 10);
my.getArea();
my.__proto__; // two d shape obj
my.__proto__.__proto__; // shape obj
my.__proto__.__proto__.__proto__; // obj
my instanceof Triangle; // True
my instanceof TwoDShape; // True
my instanceof Shape; // True
my instanceof Object; // True
Shape.prototype.isPrototypeOf(my); // True
TwoDShape.prototype.isPrototypeOf(my); // True
Triangle.prototype.isPrototypeOf(my); // True

// Moving Shared Properties to the Prototype

function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}

// take care of inheritance
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';


function Triangle(side, height) {
	this.side = side;
	this.height = height;
}
// take care of inheritance
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height / 2;};

// Inheriting the Prototype Only

function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = Shape.prototype; // prototype inherited here
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype 
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
	this.side = side;
	this.height = height;
}
// take care of inheritance
Triangle.prototype = TwoDShape.prototype; // prototype inherited here
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height / 2;}

