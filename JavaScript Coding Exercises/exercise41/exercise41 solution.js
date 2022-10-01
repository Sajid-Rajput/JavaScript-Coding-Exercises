// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

"use strict";

function show_magicians(magicians_name){
    magicians_name.forEach(element => {
        console.log(element);
    });
}

show_magicians(["Magician Sajid", "Magician Daniyal", "Magician Hamza", "Magician Zain"]);