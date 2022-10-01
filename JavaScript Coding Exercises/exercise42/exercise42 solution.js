// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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

    show_magicians(magician_name);
}

make_great(["Magician Sajid", "Magician Daniyal", "Magician Hamza", "Magician Zain"]);