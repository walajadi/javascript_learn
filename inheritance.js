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

