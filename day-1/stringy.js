// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Takes in a string
O: The length of the input as a number
C: N/A
E: N/A
*/

function length(string) {
    // YOUR CODE BELOW HERE //


    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 * I: A string
 * O: The inputted string in lowercase
 * C: N/A
 * E: If input string is empty, return null
 */

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //return string in lower case
   return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to uppercase.
 * I: A string
 * O: A string made into upper case
 * C: N/A
 * E: N/A
 */

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // return string made into upper case
    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * 
 * I: A string
 * O: The same string forced to dash-case ex: "Hello World" -> 'hello-world'
 * C: Try using String methods split and join or use global replace
 * E: N/A
 */

function toDashCase(string) {
    // make variable for holding parameter string
    // change string to lower case
    var answer = string.toLowerCase();
    // use replace method to replace the spaces with a dash
    answer = answer.replace(/\s+/g, "-");
    return answer;
  }



/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * 
 * I: A string and a single character
 * O: Boolean: true if first letter of string and single letter equal, false if not
 * C: N/A
 * E: Both upper and lower case are valid
 */

function beginsWith(string, char) {
    // variable for 1st letter of the string
    var firstLetter = string[0];
    // variable for boolean output
    var answer;
    
    // make variables for upper case and lower case char
    var upperChar = char.toUpperCase();
    var lowerChar = char.toLowerCase();
    
    // if firstLetter === upper or lower char, answer is true
    if (firstLetter === upperChar || firstLetter === lowerChar) {
      answer = true;
    } else {
      answer = false;
    }
    // return answer
    return answer;
  }



/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: A string and a single character
 * O: Boolean: true if last letter of string and single letter equal, false if not
 * C: N/A
 * E: Both upper and lower case valid
 */

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
 // variable for last letter
  var lastLetter = string[string.length-1];
  // variable for boolean output
  var answer;
  
  // make variables for upper case and lower case char
  var upperChar = char.toUpperCase();
  var lowerChar = char.toLowerCase();
  
  // if firstLetter === upper or lower char, answer is true
  if (lastLetter === upperChar || lastLetter === lowerChar) {
    answer = true;
  } else {
    answer = false;
  }
  // return answer
  return answer;
    // YOUR CODE ABOVE HERE //
}



/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  // return stringOne concatenated with stringTwo
  return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}



/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 I: Strings
 O: All inputed strings joined together ex: ("my", "name") -> "myname"
 */
 function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
// variable args is an array of the inputs
  var args = Array.from(arguments);
// return args all joined together with no seperators
return args.join("");
  // YOUR CODE ABOVE HERE //
}



/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
// variable for answer
var answer;
// if string one is longer return it, if not return string two
if (stringOne.length > stringTwo.length){
  answer = stringOne;
} else {
  answer = stringTwo;
}
  return answer;
  // YOUR CODE ABOVE HERE //
}



/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
// make variable output
var output;
// if stringOne is higher alphabetically, output is 1
// use comparison operator < to check whether stringOne is higher alphabetically
if (stringOne < stringTwo){
  output = 1;
  // use comparison operator > to check whether stringOne is lower alphabetically
} else if (stringOne > stringTwo){
  output = -1;
} else if (stringOne = stringTwo){
  output = 0;
}
return output;
  // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
// make variable output
var output;
// if stringOne is lower alphabetically, output is 1
// use comparison operator < to check whether stringOne is lower alphabetically
if (stringOne > stringTwo){
output = 1;
// use comparison operator > to check whether stringOne is higher alphabetically, if so output = -1
} else if (stringOne < stringTwo){
output = -1;
// if the strings are equal, output is 0
} else if (stringOne = stringTwo){
output = 0;
}
return output;
// YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}