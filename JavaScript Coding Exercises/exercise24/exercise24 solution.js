// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
let name = "Muhammad Sajid Ali Khan";
console.log(name == "Muhammad Sajid Ali Khan"); //true
console.log(name != "Muhammad Sajid Ali Khan"); //false

// • Tests using the lower case function
console.log(name.toLowerCase() == "muhammad sajid ali khan"); // true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 10;
console.log(number == 20);//false
console.log(number != 20);//true
console.log(number > 20);//false
console.log(number < 20);//true
console.log(number >= 20);//false
console.log(number <= 20);//true

// • Tests using "and" and "or" operators
let num1 = 10;
let num2 = 20;

console.log(num1<20 && num2>10?"true":"false"); // true
console.log(num1<5 || num2>50?"true":"false"); // false


let arr = [10,20,30,40,50]
// • Test whether an item is in a array
console.log(arr.includes(50)); //true

// • Test whether an item is not in a array
console.log(arr.includes(100)); //false