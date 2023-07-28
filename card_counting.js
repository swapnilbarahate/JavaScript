// first way
// let count = 0;

// function cc(card) {
//     // Only change code below this line
//     if (card <= 6) {
//         count++;
//     }
//     else if (card >= "10") {
//         count--;
//     }
// }
// let series = [10, "J", "Q", "K", "A"];
// series.forEach(cc);
// let result = count + (count > 0 ? " bet" : " Hold");
// console.log(result);

//second way using switch case
var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

//   msg = count + (count>0 ? " bet" : " Hold");


  return count;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
let seris =[10, "J", "Q", "K", "A"];
seris.forEach(cc);
let result= count + (count>0 ? " bet" : " Hold");
console.log(result);

