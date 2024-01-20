const people = ["Pedro", "Pablo", "Vilma", "Betty"];

const hi = document.querySelector(".sayHi");
const bye = document.querySelector(".sayBye");

const greetPerson = (name) => "Hi " + name;

const greetPeople = (people, greet, callback) => {
    for (let i = 0; i < people.length; i++){
        const p = document.createElement("p");
        p.innerText = callback(people[i]);
        greet.appendChild(p);
    }
}

greetPeople(people, hi, greetPerson);
greetPeople(people, bye, (personName) => "Bye " + personName);

