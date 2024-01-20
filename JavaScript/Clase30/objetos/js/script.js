//Person objet declaration
const person = {
    pname: "Juan",
    age: 25,
}

console.log(person);

//Accesing to the "name" property of the person objet
console.log("El nombre de usuario es: ", person.pname);

/* ---------- Objets Array ---------- */
const player1 = {
    pname: "Pepe",
    numberShirt: 3,
    position: "Defender",
    kick: function () {
        console.log("Kicking the ball...");
    },
    run: function () {
        console.log("Runing....");
    },
};

const player2 = {
    pname: "Juan",
    numberShirt: 5,
    position: "Forwarder",
    kick: function () {
        console.log("Kicking the ball...");
    },
    run: function () {
        console.log("Runing....");
    },
};

//This is an object array
const team = [ player1, player2];

console.log(team);
console.log(team[0]);
console.log("Player 1 is: " + team[0].pname);
console.log("He has the shirt number: " + team[0].numberShirt);
console.log("He plays at the position: " + team[0].position);
team[0].kick();
team[0].run();
console.log(team[1]);
console.log("Player 2 is: " + team[1].pname);
console.log("He has the shirt number: " + team[1].numberShirt);
console.log("He plays at the position: " + team[1].position);
team[1].kick();
team[1].run();

/* I left the class 30 at 2;16*/