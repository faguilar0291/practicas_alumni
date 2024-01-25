const xhr = new XMLHttpRequest();
console.log(xhr.readyState);

xhr.open("GET", "./files/saludo.txt");
console.log("a. ReadyState ", xhr.readyState);

xhr.addEventListener("progress", () => {
    console.log("b. ReadyState ", xhr.readyState);
});

// xhr.addEventListener("load", () => {
//     console.log("c. Ready State ", xhr.readyState);
// });

xhr.onload = () => {
    console.log("c. Ready State ", xhr.readyState);
};

xhr.send();
console.log("Objeto Completo", xhr);

//1:52