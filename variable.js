// **************Hi,there it is table of diffrence between var,let and const**************
// Feature		    var                           let	                                          const
// Scope	   Function-scoped 	                 Block-scoped	                                   Block-scoped
// Re-declare	   ✅ Allowed	                ❌ Not allowed	                                   ❌ Not allowed
// Re-assign	  ✅ Allowed	                     ✅ Allowed	                                        ❌ Not allowed
// Hoistin  ✅ Hoiste(initialized as undefined)	✅Hoisted(but uninitialized)	               ✅Hoisted(but uninitialized)
// *************intializing variables************
let a;
var y;
// let a;  throw redeclaration error
// var y; it will run 
// **************defining variables**********
a=60;
y=88.07;

const name='Malik Kamil'
// ************Printing variables*************
console.log(a)
console.log(y)
console.log(name)
