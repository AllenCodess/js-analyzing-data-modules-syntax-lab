
// Make sure you run: npm install datejs
require('datejs'); 

function combineUsers(...args) {
  // Step 2: Initialize return object
  let combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop and merge arrays into users
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date using datejs
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Step 7: Return the object
  return combinedObject;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};}