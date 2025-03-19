// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
  // for loop that prints numbers 1-100
  for (var number = 1; number <= 100; number++){
  // if the number is a multiple of 3 and 5 print "FizzBuzz"
    if (number % 3 === 0 && number % 5 === 0){
      console.log("FizzBuzz");
  // if the number is a multiple of 3 print "Fizz"
    } else if (number % 3 === 0){
      console.log("Fizz");
  // if the number is a multiple of 5 print "Buzz"
    } else if (number % 5 === 0){
      console.log("Buzz");
  // otherwise, just print the number
    } else {
      console.log(number);
    }
  }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}