// #!/usr/bin/env node

'use strict';

/** 
 * CREATE GREATER THAN FILTER
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 
 I: A string or a number (base)
 O: A function that tests whether a given value is greater than the base
 */

//first version with variable assign to my function 
function createGreaterThanFilter(base) {
    // make a variable assigned to a function that tests whether a value is greater than the base
    // if value > base return true else return false
    var greaterThanBase = function(value){
      if (value > base){
        return true;
      } else {
        return false;
      }
    }
    return greaterThanBase;
  }



/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 I: Base (string or number)
 O: A function that tests whether a value is less than the base
 */
 function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
  // assign 
  var isLessThanBase = function(value){
    if (value < base){
      return true;
    } else {
      return false;
    }
  }  
  return isLessThanBase;
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 I: A single character
 O: A function that tests whether a given string is the inputted character
 C: N/A
 E: case INSENSITIVE
 */
 function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
  // assign variable to function(string) 
  // will test if startsWith is string[0] 
  // to make it case insensitive try using if string[0].toLowerCase() === startsWith.toLowerCase() 
  var doesThisStartWith = function(string){
    if (string[0].toLowerCase() === startsWith.toLowerCase()){
      return true;
    } else {
      return false;
    }
  }
  return doesThisStartWith;
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 I: A single character
 O: A function that tests whether a given string ends with the character
 C: N/A
 E: Case insensitive
 */
 function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  // assign variable to function(string) 
  // function(string) tests whether last letter in string is equal to endsWith - case insensitive
  var doesThisEndWith = function(string){
    if (string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
      return true;
    } else {
      return false;
    }
  }
  return doesThisEndWith;  
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 
 I: An array of strings AND a function for modifying strings
 O: return the array of strings, modified
 C: loop over the strings
 E: N/A
 */
 function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
   // holder array to return later
   var modifiedArray = []; 
   //for loop that goes over strings, modifies, then pushes into holder 
   for (var i = 0; i < strings.length; i++){
     modifiedArray.push(modify(strings[i]));
   }  
  return modifiedArray;
    // YOUR CODE ABOVE HERE //
}


// examples below on how to call this function
var upperCase = modifyStrings(['a', 'b', 'c'], function(str){ return str.toUpperCase() });
// => ['A', 'B', 'C']

var addExclamation = modifyStrings(['a', 'b'], function(str){ return str + "!" });
// => ['a!', 'b!']



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 
 I: Array of strings + a function to test the strings
 O: A boolean - true if all the strings passed the test, false if not
 */
 function allStringsPass(strings, test) {
  // YOUR CODE BELOW HERE //
 
 var isItTrue = [];
 //for loop going over strings and pass into test, push to array
 for (var i = 0; i < strings.length; i++){
   isItTrue.push(test(strings[i]));
   }
 //for loop that goes over new array
 // check if anything is false and if it is, return false
 // if whole loop goes uninterrupted, it must mean it is true
 for (var j = 0; j < isItTrue.length; j++){
   if(isItTrue[j] === false){
     return false;
   }
 }
// check if anything is false and if it is, return false
// if whole loop goes uninterrupted, it must mean it is true
return true;
// YOUR CODE ABOVE HERE
}

// examples below are ways to call this function
var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){ return str[0] === 'a'});
// => true (begins all strings begin with 'a')

var longerThan4 = allStringsPass(['alex', 'aaron'], function(str) { return str.length > 4});
// => false (not all strings have a length greater than 4)








// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}