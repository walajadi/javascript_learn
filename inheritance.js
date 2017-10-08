console.log('inherit it');

// Prototype Chaining Example
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

