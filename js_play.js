// scope
var global = 1;
   function f() {
     var local = 2;
     global++;
     return global;
}

f();
f();
