// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

"use strict";

function show_magicians(magicians_name){
    magicians_name.forEach(element => {
        console.log(element);
    });
}

function make_great(magician_name) {
    let accessor = 0
    magician_name.forEach(element => {
        magician_name[accessor] = `The Great ${element}`;
        ++accessor;
    });

    return magician_name;
}

let magician = ["Magician Sajid", "Magician Daniyal", "Magician Hamza", "Magician Zain"];

let magician_copy = [...magician];

let great_magician = make_great(magician_copy);

show_magicians(magician);
console.log(show_magicians(great_magician));