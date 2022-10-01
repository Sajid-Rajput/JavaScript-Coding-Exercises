// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let pizza = ['Tikka', 'Fajita', 'Pepperoni'];

for (let index = 0; index < pizza.length; index++) {
    console.log(pizza[index]);
    
}

// Modified for loop
for (let index = 0; index < pizza.length; index++) {
    console.log(`I like ${pizza[index]} pizza.`);
    
}

console.log(`I am a pizza lover. I really like pizzas that overload with cheese, and dough of pizzas are crunchy and full of green chillies, black olivies and mushrooms. And if the of the pizza fill with kebab and cheese, I honestly fall in loves with that kind of pizzas, such as I really love pizza!`)