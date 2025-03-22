// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * PRINT ARRAY VALUES
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // for loop going over an array and print the values
  for (var i = 0; i < array.length-1; i++){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE -code passed//
}

/** 
 * PRINT ARRAY VALUES IN REVERSE
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // for loop going backwards over the array
  for (var i = array.length-1; i >= 0; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE - code passed//
}


/** 
 * GET OBJECT KEYS
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // for in loop that returns keys using Object.keys
  for (var key in object){
    return Object.keys(object);
  }
  // YOUR CODE ABOVE HERE - code passed//
}


/** 
 * PRINT OBJECT KEYS
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // for in loop that prints keys using Object.keys
  var keys = Object.keys(object);
  for (i = 0; i < keys.length; i++){
    console.log(keys[i]);
  }
  // YOUR CODE ABOVE HERE - code failed //
}


/** 
 * GET OBJECT VALUES
 * Given an input Object, return an Array containing the Object's values.
 I: object
 O: an array of the object's value ex: 
 */
 function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // for in loop that returns object values using Object.values
  for (var key in object){
    return Object.values(object);
  }
  // YOUR CODE ABOVE HERE - code passed //
}



/** 
 * PRINT OBJECT VALUES
 * Given an input Object, return an Array containing the Object's values.
 I: object
 O: an array of the object's value ex: 
 */
 function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // assign variable to array of values
  var values = Object.values(object);
  // loop over array and console.log each value
  for (i = 0; i < values.length; i++){
    console.log(values[i]);
  }
  // YOUR CODE ABOVE HERE - code failed//
}


/** 
 * GET OBJECT LENGTH
 * Given an input Object, return the number of key/value pairs stored within that Object.
 I: An object
 O: A number representing how many key/value pairs are in the object
 */
 function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // for in loop going over object and returns how many key value pairs - use Object.keys(object).length
  for (var key in object){
    return Object.keys(object).length;
  }
  // YOUR CODE ABOVE HERE - code passed//
}

/** 
 * PRINT OBJECT VALUES IN REVERSE
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 I: An object
 O: The values of the object, printed in reverse order
 */
 function printObjectValuesInReverse(object) {
  // assign variable to Object.values(object) 
  var valuesReverse = Object.values(object);
  // for loop iterating over values array backwards and printing
    for (i = valuesReverse.length - 1; i >= 0; i--){
      console.log(valuesReverse[i]);
    } 
};

// code failed











// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}