/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/

let guests = ["Mian Zain", "Talha Mughal", "Sajid Rajput"];

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});


// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`Dear ${guests[2]}, cannot be able to came at dinner party`);


// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests[2] = "Muhammad Hamza";


// • Print a second set of invitation messages, one for each person who is still in your list. 
guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});