// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

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

// • Add one new guest to the beginning of your array.
guests.unshift("Wali Khan");

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

guests.splice(2, 0, "Sohail Rana");

guests.push("Daniyal Nigori");

console.log("\nNew Invitations after get a bigger dinner table\n")
guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});