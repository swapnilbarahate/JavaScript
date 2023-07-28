const prompt=require("prompt-sync")({sigint:true});//input ghenyasathi vaparta
let str;

str = prompt("Enter the string: ");

console.log(str);
let i=0;
let j= (str.length)-1;
str = str.split("");
while(i<j)
{
	let temp= str[i];
	str[i]= str[j]
	str[j]= temp;
	i++;
	j--;
    
   
}
str = str.join("");
