// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
"use strict";

function titleCase(name) {
    let $name = name.split(" ");
    let finalName = new Array;
    $name.forEach(element => {
        finalName.push(element[0].toUpperCase() + element.slice(1));
    });
    return finalName.join(" ");
}


let personName = "muhammad sajid ali khan";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase(personName));