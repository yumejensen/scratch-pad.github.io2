// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 * I: String
 * O: the string reversed
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // create holder array
    var reversedMessage = [];
    // make a for loop going over string backwards
    // push to reversedMessage array
    for (var i = input.length-1; i >= 0; i--){
      reversedMessage.push(input[i]);
    }
    // use join method to turn the array into a string
    return reversedMessage.join("");
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}