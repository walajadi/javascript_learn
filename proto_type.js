console.log('proto type');

// functions : access properties 

function foo(a, b){
	return a * b;
};
// foo.length => 2
// foo.constructor => Functions

// Adding Methods and Properties Using the Prototype
function Gadget(name, color) {
     this.name = name;
     this.color = color;
     this.whatAreYou = function(){
       return 'I am a ' + this.color + ' ' + this.name;
    }
};

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
	return 'Rating: ' + this.rating + ', price: ' + this.price;
};

// Own Properties versus prototype Properties
Gadget.prototype.getInfo = function() {
	return 'Rating: ' + Gadget.prototype.rating + ', price: ' + Gadget.prototype.price;
};



