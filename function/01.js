//simple function
function hello(){
    console.log("hello wel come to javaScript");
}
hello();//function la  call/run/invoke  kele

function twoplusFour(){
    return 2+4;
}
console.log(twoplusFour());

//how to pass value in function
function sumoftwoNumber(num1,num2){
return num1+num2;
}
console.log(sumoftwoNumber(10,40));

//how to pass value in function
function subtractionoftwoNumber(a,b){
    (typeof(a)!="number")? a=0: a=a;
    (typeof(b)!="number")? b=0 : b=b;
return a-b;
}
console.log(subtractionoftwoNumber(80,60));

//function
//Input : array,target (number)
//output: index of target present in array
function findTarget(array,target){
    for(i=0;i<array.length;i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return "Not Found";
}
const array=[1,3,2,33,22,6,"swapnil",88,45,83,44,83];
console.log(findTarget(array,6));

//function 