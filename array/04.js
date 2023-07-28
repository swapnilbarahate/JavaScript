// const kyeword use array decleration time 
//const use kela tar direct array change nahi hot
//push,pop,slice,shift,unshift,...spred,concat etc.
//method cha use karun apan array value change karu shakto

const array1=[1,3,5,7,4,4," ","swanp", ,"w"];
console.log(array1);
//array1=[];// show this error-Uncaught TypeError: Assignment to constant variable.
array1.push("barahate");
console.log(array1);
let array2=[1,2,3,4,5,6,7,8,9,10];
console.log(array2);
array2= array2.concat(array1);
console.log(array2);
