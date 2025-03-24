// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return contact object with id, nameFirst, nameLast
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        // create a length method that when invoked returns the number of contacts
       length: function(){
        return contacts.length;
       },
       
      // addContact method to add a contact
       addContact: function(contact){
        contacts.push(contact);
       },
      
      // findContact(fullName) that returns the object with the name (if it exists)
       findContact: function(fullName){
        var fullNameArray = fullName.split(' ');
        // for loop that goes over the contacts array
        for (var i = 0; i < contacts.length; i++){
            // need to change input of fullName into 2 parts - check nameFirst and nameLast 
            // if nameFirst = 1st thing in fullName && nameLast = 2nd thing
            if (contacts[i].nameFirst === fullNameArray[0] && contacts[i].nameLast === fullNameArray[1]){
                return contacts[i]
                // else return undefined?
            } 
        }
         return undefined;
       },
      
      //removeContact(contact) that takes an object to be removed from the list
      removeContact: function(contact){
        // for loop going over contacts
        for (var i = 0; i < contacts.length; i++){
            // if input contact first name/ last name === first name/ last name of contacts object
          if (contact.nameFirst === contacts[i].nameFirst && contact.nameLast === contacts[i].nameLast){
            //splice method to remove the contact object
            contacts.splice(i, 1);
          }
        }
        //return contacts; ?
      },
      
      //printAllContactNames - return a string of full names
      /*
      I: contacts array
      O: list (string) of nameFirst + nameLast for each contact, separated by a line break
      C:
      E: the last full name should not have a new line after it
      */
      printAllContactNames: function(){
        // iterate through contacts array
        // try making a holder array for full names
  
      var namesToPrint = [];
      for (var i = 0; i <= contacts.length - 1; i++){
         // for each contact, print a string of nameFirst + nameLast and a line break
  
        // make a variable called fullName that is nameFirst + " " + nameLast
        var fullName = contacts[i].nameFirst + " " + contacts[i].nameLast;
  
         // if it is NOT the last contact, have a line break - if it is print without the line break
         // push into holder array
        if (i !== contacts.length - 1){
          namesToPrint.push(fullName + '<br>');
        } else if (i === contacts.length - 1) {
          namesToPrint.push(fullName);
        }
      }
      // print the namesToPrint array as a string
      console.log(namesToPrint.toString());
     }
  
  // YOUR CODE GOES ABOVE HERE //
  } // return bracket
  
  } // last bracket




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}