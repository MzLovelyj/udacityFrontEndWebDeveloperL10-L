/*Directions: Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3!=3∗2∗1=6
4!=4∗3∗2∗1=24
5!=5∗4∗3∗2∗1=120

Save your final answer in a variable called solution and print it to the console.*/

solution = 12;
for (var factorial = 1; factorial < 12; factorial++) {
    solution *= factorial;
}
console.log(solution);

/* Factorial of 12.
solution starts at 12. solution * factorial will do the following: 
1. solution * factorial: 12 * 1 = 12
2. solution * factorial: 12 * 2 = 24
3. solution * factorial: 24 * 3 =  72
4. solution * factorial: 72 * 4 = 288
5. solution * factorial: 288 * 5 = 1,440
6. solution * factorial: 1,440 * 6 = 8,640
7. solution * factorial: 8,640 * 7  = 60,480
8. solution * factorial: 60,480 * 8 = 48,3840
9. solution * factorial: 483,840 * 9 = 435,4560
10. solution * factorial: 4,354,560 * 10 = 43,545,600
11. solution * factorial: 43545600 * 11 = 479,001,600
*/