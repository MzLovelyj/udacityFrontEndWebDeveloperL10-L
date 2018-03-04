/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here

rainbow.splice(2, 1, "Yellow", "Green");
//Remove 1 element from index 2, and insert "Yellow","Green"
rainbow.push("Purple");
//Adding "Purple" to the end of the array

console.log(rainbow);