//array push and pop method is used add and remove in array end side
//push method is used to add element in array end point side
student = ["swapnil","vaibhav","shubham"];
console.log(student);
console.log(student.length);
student.push("bhushan");//element added
console.log(student);

student.push("dipak","vishal","anil","santosh");//multiple element add ate time
console.log(student);
console.log(student.length);

//pop method is use to remove element in last side
surname =["pawar","parekar","barahate","nerkar","chawhan","jadhav","surwase"];
surname.pop();
console.log(surname);
//pop method hi element remove pan karate and return pan karate remove kelela element
// remove kelela element apan store karu shakato variable madhe
address=["nimon","daregoan","manmad","shirdhi","rahuri","pune","mumbai","kolhapur"];
console.log("original array:");
console.log(address);
onecity = address.pop();
console.log("removed element is:"+ onecity);
console.log("array after removed element:");
console.log(address);

original =["a","b","c","d","e","f","g","h","i","k","l","m"];
dummarray=[]//removed value store karnaysathi empty array
for(let i=0;i<3;i++)
{
    dummarray.push(original.pop());
}
console.log(original);
console.log(dummarray);

//shift function he arraychay starting ne element remove karnya sathi vapartat
dummarray.shift();//shift function used to remove element starting side or left side
console.log(dummarray);
//unshift function he arraychay starting ne element add karnyasathi vapartat
dummarray.unshift("swan");
console.log(dummarray);
dummarray.unshift("ff","secnd","third");//apann ya madhe multiple element add karushakato
console.log(dummarray);


//example for practice
//dilelya array madhun barahate he nav remove kara
originalarray=["swapnil","barahate","anil","dipak","vaibhav","tushar","bhushan"];//input
//output ["swapnil","anil","dipak","vaibhav","tushar","bhushan"];
//solution
dummey=[];
let count=0;
temp="";
while(temp!="barahate")
{
    temp=originalarray.pop();
    if(temp=="barahate")
    {
        continue;
    }
    dummey.push(temp);
    count++;
}
console.log(dummey);
while(count>0)
{
    originalarray.push(dummey.pop());
    count--;
}
console.log(originalarray);

