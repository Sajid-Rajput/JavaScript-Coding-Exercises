// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

"use strict";

function sandwich(items) {
    console.log("\n\t<- Welcome to my Sandwich Shop ->\t\n");
    console.log("***I will make a great sandwich for you. Tell me about the additional items that you want add on a sandwitch***\nYour additional items are:\n")

    items.forEach(element => {
        console.log(`+ "${element}"`)
    });

    console.log("\nYour Sandwitch is ready...");
    console.log(`\t<- Thank you for coming at our Sandwitch Shop ->\t\n`);
}

sandwich(["Cheese", "Olive Oil", "Cabbage", "Tikka"]);
sandwich(["Pepperoni", "Mushrooms", "Onions"]);
sandwich(["Black Pepper", "Egg York", "Black Olives", "Cheese", "Mustard Sauce", "Butter"]);