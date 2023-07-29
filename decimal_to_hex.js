const prompt = require('prompt-sync')({ sigint: true });
let octal = prompt("Enter Octal Number: ");
octal = Number(octal);
function octalToDecimal(octal){
    let ans=0,mul=1,rem;
    while(octal>0){
        rem = octal%10;
        ans = ans + rem * mul;
        mul = mul*8;
        octal= parseInt(octal/10);
    }
    return ans;
}
let decimal = octalToDecimal(octal);
console.log(decimal);
  
//ip:10 op:8
//ip:7 op:7
//ip:12 op:10