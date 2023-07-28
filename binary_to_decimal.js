const prompt = require('prompt-sync')({ sigint: true });
let binaryno = prompt("Enter the binary number: ");
binaryno = Number(binaryno);
function binaryToDecimal(binanuryno) {
    let ans = 0, rem, mul = 1;
    while (binaryno > 0) {
        rem = binaryno % 10;
        ans = ans + rem * mul;
        mul = mul * 2;
        // binaryno = parseInt(binaryno / 10); //return only number not decimal place
        binaryno = (binaryno / 10) | 0;  //return only number not decimal place
    }
    return ans;
}
let result = binaryToDecimal(binaryno);
console.log(result)