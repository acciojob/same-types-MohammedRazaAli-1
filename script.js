

function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  // Check if the types of the two values are the same
  return typeof value1 === typeof value2;
}

// Prompt the user for inputs
let input1 = prompt("Enter the first value:");
let input2 = prompt("Enter the second value:");
 
// Convert inputs to numbers if possible
let value1 = isNaN(Number(input1)) ? input1 : Number(input1);
let value2 = isNaN(Number(input2)) ? input2 : Number(input2);

// Show the result in an alert
alert(isSameType(value1, value2));

