//we can delay an action like a function or console.log with "setTimeout"
let greet = "Hi monkey donkey";
console.log(greet);

//setTimeout can delay an action
setTimeout(() => {
    console.log("Delayed 2 seconds --> ", greet);
}, 2000);

//setInterval can repeat an action in an indefinite loop
setInterval( () => {
    console.log("Repeats every 3 seconds --> ", greet);
}, 1000);

// to stop an interval we need to assing it to a variable and put inside a counter
let counter = 1; //we initialize the counter

//Once it reaches the desired number of cycles, its execution ends.
let interval = setInterval(() => {
    console.log("This is a temporary interval ", counter);
    if (counter == 10) {
        clearInterval(interval);
    }
    counter++;
}, 1000);


//1:16