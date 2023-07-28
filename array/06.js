//array destructing
const array1=["swanpnil",2,5,34,"sagar"]
let[value1,value2,...value3]= array1;
console.log(value1);
console.log(value2);
console.log(value3);
console.log("type of value1 is:"+typeof(value1));
console.log("type of value2 is:"+typeof(value2));
console.log("type of value3 is:"+typeof(value3));

//skip elemet in any position
// comma (,) is used to skip
const array2=["item1","item2","item3","item4","item5","item6","item7","item8"];
let[v1,v2,,v3,...v]=array2;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v);



