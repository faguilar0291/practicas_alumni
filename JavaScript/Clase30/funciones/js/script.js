//This is a declared function
function probeA() {
    console.log("I´m the A function");
}

//This is an expresed function
//That means that is a function declared inside a variable.
const probeB = function probeB(){
    console.log("I´m the B function");
}

//This is an anonymous function + an expresed function
const probeC = function () {
    console.log("I´m the C function");
}

// This is an expresed function + an arrow function
const probeD = () => {
    console.log("I´m the D function");
}

//This is an expresed function + a single line arrow funtion
const probeE = () => console.log("I´m the E function");

//This is an expresed function + an arrow funtion + explicit return
const sum = (a, b) => {
    const c = a + b;
    return c; //explicit return
}

console.log(sum(5, 6));