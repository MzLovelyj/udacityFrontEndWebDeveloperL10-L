//Programming Quiz: Changing the Loop (4-4)
/*Directions:
Rewrite the following while loop as a for loop:
Remember that a for needs the following: 
for ( start; stop; step ) {
  // do this thing
}

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}*/

for (var x = 9; x >= 1; x--) {
    //var x = 9;(Start)
    //x >= 1; ( Stop)
    //x-- (step) 
    console.log("hello " + x);
    // do this thing: x starts at 9 if x is >= 1 do this x -1 
}