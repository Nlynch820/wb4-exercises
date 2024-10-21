"use strict"

let person = {
    first: "Shawn",
    middle: "Corey",
    last: "Carter",
    age: 54,
    stageName: "Jay-Z",
    netWorthInBillions: 2.5,
}

console.log(person.stageName);

function printPerson(person) {
    console.log(person);
    
}
printPerson(person)

function createPerson() {
    let person = {
        first: "Beyonce",
        last: "Knowles",
    };
    person.first = "Beyonce";
    return person;

}

let spouse = createPerson()
console.log(spouse);
