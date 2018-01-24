/*
 * Programming Quiz - Checking Your Balance (3-5)
 * Text has to match exactly to what Udacity wants
 for you to pass their test!So Pay attention!
*spent a lot of time matching words and punctuations.Useless but made me realize I need to pay attention to details.

 */

var balance = 1200.90;
var checkBalance = true;
//changing isActive to true displays the balance!
var isActive = true;


// your code goes here 
if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");
} else if (checkBalance === true && isActive === true && balance === 0) {
    console.log("Your account is empty.");
} else if (checkBalance === true && isActive === true && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
} else {
    console.log("Thank you. Have a nice day!");
}