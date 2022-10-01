// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests = ["Mian Zain", "Talha Mughal", "Sajid Rajput"];

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner party at 7 pm.`);
});