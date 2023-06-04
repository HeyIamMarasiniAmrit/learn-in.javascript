// var, let, const
// var
var a = 10
function f() {
    console.log(a)
}
f();
console.log(a);


//let
let a = 10;
function f() {
    if (true) {
        let b = 9
 
        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block
    console.log(b);
}
f()
 
// It prints 10
console.log(a)

//const
const a = 10;
function f() {
    a = 9
    console.log(a)
}
f();