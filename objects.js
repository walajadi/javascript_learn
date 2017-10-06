// alert('objects.js');

// simple obj
var hero = {
	breed: 'Turtle',
    occupation: 'Ninja',
    say: function() {
       return 'I am ' + hero.occupation;
     }
};


// obj contains an obj
var book = {
  name: 'Catch-22',
  published: 1961,
  author: {
    firstname: 'Joseph',
    lastname: 'Heller'
  }
};

// some methods
typeof hero.breed;
hero.name = 'leonardo';
delete hero.name; // return True.

// using init constructor
function Hero() {
     this.occupation = 'Ninja';
}

var hero = new Hero();
hero.occupation;
// "Ninja"

// with function. 
function Hero(name) {
     this.name = name;
     this.occupation = 'Ninja';
     this.whoAreYou = function() {
       return "I'm " + this.name + " and I'm a " + this.occupation;
     }
}
var h1 = new Hero('Michelangelo');
h2 = new Hero('Donatello');
h1.whoAreYou();
h2.whoAreYou();

// without new 
var h = Hero('Leonardo');
typeof h;
// undefined because 'new' is missing.
// Because you had this inside Hero, a global variable (a property of the global object) called name was created.
window.name;
// "Leonardo"
// If you call the same constructor function but this time using new, then a new object is returned and this refers to it.
h2 = new Hero('Michelangelo');
typeof h2;
 // "object"

 // constructor property
 h2.constructor
 // Hero(name)
