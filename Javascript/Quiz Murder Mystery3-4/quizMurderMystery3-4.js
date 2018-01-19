/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery" /* your conditional goes here */ ) {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    }
} else if (room === "dining room" /* your conditional goes here */ ) {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    }
} else if (room === "ballroom" /* your conditional goes here */ ) {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    }
} else {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    }
}

if (solved) {
    console.log( /* your message goes here*/ suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}