/** Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

// declares the laugh function
function laugh(num) {
    var ha = "";
    //TIP: You might need a loop to solve this!
    for (i = 0; i < num; i++) {
        ha = ha + "ha"
    }
    return ha + "!"; // returns value instead of printing it
}

console.log(laugh(4));