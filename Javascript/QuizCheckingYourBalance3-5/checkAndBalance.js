/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

var balance = 1200.90;
var checkBalance = true;
//changing isActive to true displays the balance!
var isActive = true;


// your code goes here
if (checkBalance && isActive && balance > 0) {
    console.log('Your balance is $' + balance.toFixed(2) + '.');
} else if (!isActive) {
    console.log('Your account is no longer active');
} else if (balance === 0) {
    console.log('Your account is empty.');
} else if (balance < 0) {
    console.log('Your balance is Negative. Please contact your bank.');
} else {
    console.log('Thank you, have a nice day!');
}