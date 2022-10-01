// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guests = ["Mian Zain", "Talha Mughal", "Sajid Rajput"];

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});

console.log(`Dear ${guests[2]}, cannot be able to came at dinner party`);

guests[2] = "Muhammad Hamza";

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});

console.log("<- We found a bigger dinner table for our guests ->");

guests.unshift("Wali Khan");

guests.splice(2, 0, "Sohail Rana");

guests.push("Daniyal Nigori");

console.log("\nNew Invitations after get a bigger dinner table\n")
guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});


// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\n<= Due to late delivery of dinning table, We are able to invite only two guests =>\n");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (let index = 0; index <= 3; index++) {
    console.log(`Sorry! ${guests.pop()}, We are unable to invite you on a dinner due to late delivery of dinning table.`);
    
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (const element of guests) {
    console.log(`Dear ${element}, You are still invited to a dinner at 7am.`);
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();

console.log(`\n\nGuests: ${guests}`);