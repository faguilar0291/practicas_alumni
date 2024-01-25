
const heigth = document.getElementById("id-heigth");
const width = document.getElementById("id-width");
const button = document.getElementById("id-button");

//we can use the "addEventListener" to "hear" an event on the html document
//finding it by an "id" that we can asing to a button in this case
button.addEventListener("click", () => console.log("Hi monkey donkey"));

// if we use onclick on the html document we can call a function from de Js document
// function greeter(){
//     console.log("Hi monkey donkey!");
// }

window.addEventListener("load", () => {
    heigth.textContent = window.innerHeight;
    width.textContent = window.innerWidth;  
})

window.addEventListener("resize", () => {
    heigth.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
})

// **************************************************************************************************

const input1 = document.getElementById("id-counter-1");
const input2 = document.getElementById("id-counter-2");
const input3 = document.getElementById("id-counter-3");

//const btn1 = document.getElementById("id-btn-counter-1");
const btn2 = document.getElementById("id-btn-counter-2");
const btn3 = document.getElementById("id-btn-counter-3");


//the first button increase the input number using the "onclick" function of the html document
function increase1() {
    console.log("1");
    input1.value = parseInt(input1.value) + 1;
}

//the second button increase the input number using a call to a function
function increase2(e) {
    e.preventDefault();
    input2.value = parseInt(input2.value) + 1;
}

btn2.onclick = increase2;


//the third button increase the input number using an "eventListener"

btn3.addEventListener("click", (e) => {
    e.preventDefault();
    input3.value = parseInt(input3.value) + 1
});