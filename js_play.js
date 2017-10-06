// scope
var global = 1;
   function f() {
     var local = 2;
     global++;
     return global;
}

f();
f();

// callback functions

function one() {
     return 1;
 }
 
function two() {
	return 2;
}

function invoke_and_add(a, b){
     return a() + b();
}
invoke_and_add(one, two); // return 3

// 2nd option
invoke_and_add(function(){return 1;}, function(){return 2;})


// inner / private functions
var a = function(param) {
	var b = function(theinput) {
       return theinput * 2;
    }
    return 'The result is ' + b(param);
}

