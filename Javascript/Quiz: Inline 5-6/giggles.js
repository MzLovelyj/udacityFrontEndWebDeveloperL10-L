/* Programming Quiz: Inline Functions (5-6) */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function giggles(l) {
    var ha = "";
    for (x = 0; x < l; x++) {
        ha += "ha";
    }

    return ha + "!";
});