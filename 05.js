//trim()
//toUpperCase()
//toLowerCase()
//slice

//trim()
let firstName = " swapnil  shivaji  barahate ";
console.log(firstName.length);
firstName=firstName.trim();//trim function is remove starting and ending space of string
console.log(firstName.length);

//toUpperCase
let wifeName ="sonaLi Swapnil barAhate";
wifeName = wifeName.toUpperCase();//change string character in Upeer case
console.log(wifeName);

//toLowerCase
wifeName = wifeName.toLowerCase();//change string character in Lower case
console.log(wifeName);

//slice
//slice function is use to copy string index number wise syntax is variableName.slice(1,10) one is index start point 10 is end point
//find middele name
let middelName = wifeName.slice(7,14);
console.log(middelName+ " and original string is "+wifeName);