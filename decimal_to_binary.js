const prompt = require('prompt-sync')({sigint: true});
let n = prompt("Enter decimal number: ");
n = Number(n);
let  mul = 1, ans = 0;
function decimalToBinary(n) {
    while (n > 0) {
        var rem = n % 2;
        ans = ans + rem * mul;
        mul = mul * 10;
        n = (n/2)|0;
    }
    return ans;
}

var result = decimalToBinary(n);
console.log(result);