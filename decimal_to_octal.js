const prompt = require('prompt-sync')({ sigint: true });
let decimal = prompt("Enter the decimal number: ");
decimal = Number(decimal);
function decimalToOctal(decimal){
    let ans=0,mul=1,rem;
    while(decimal>0)
    {
        rem = decimal%8;
        ans = ans + rem * mul;
        mul = mul*10;
        decimal = parseInt(decimal/8);//ignore after decimal place value
    }
    return ans;
}
let octal = decimalToOctal(decimal);
console.log(octal);

//i/p:8 o/p:10
//i/p:7 o/p:7
//i/p:10 o/p:12
