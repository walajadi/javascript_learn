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
