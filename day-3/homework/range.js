// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 
 I: Two numbers as parameters
 O: An array containing all the integers between the two numbers
 C: use a loop and the push method
 E: if the 1st number is greater than the 2nd, return the range in reverse order
 */
 function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
  // holder array for my numbers range
  var numbersRange = [];
  // if start < end - for loop forwards and push
  if (start < end){
    for (var i = start; i <= end; i++){
      numbersRange.push(i);
  // if start > end - for loop backwards other way and push
    }
  } else if (start > end){
    for (var j = start; j >= end; j--){
      numbersRange.push(j);
    }
  }
  // return numbersRange array
  return numbersRange;
    // YOUR CODE GOES ABOVE HERE //
}

//console.log(range(0, 5)); // works!
//console.log(range(6, 1)); // works!





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}