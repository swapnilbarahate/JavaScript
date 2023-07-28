//primetive vs reference data type
//primetive type
//primetive type chya value direct stack mandhe store astat
let num1=6;
let num2 = num1;
console.log(num1); //o/p-6
console.log(num2);//o/p-6
num1++;//change value num1
console.log(num1);//o/p-7
console.log(num2);//o/p

//reference type
//array is reference type
//reference type chya value heap madhe store astat and stack medhe tyancha heap file madhil memory address asto
array1=["item1","ite2","ite3","item4"];
array2=array1;
console.log(array1);
console.log(array2);
array1.push("item5");//add 1 item in array1
console.log(array1);//item5  pushed only array1 but this added array1 as well as array2
console.log(array2);//o/p-['item1', 'ite2', 'ite3', 'item4', 'item5']

//how to clone or copy array in another array
//three methods 
//1)using slice
//2)using ... spred oprator
//3)using concat method
//using slice copy array to another array
list1=["asdf","sdfd",2,"vivek","s"," ","item","item2"];
list2=list1.slice(0);
console.log(list1);
console.log(list2);
console.log(list1===list2);
list1.push("item3");
console.log(list1);
console.log(list2);

//using ... spread oprator ex-[...arrayname]
roam1=["A","B","C","D","E","F"];
roam2=[...roam1];
console.log(roam1);
console.log(roam2);
console.log(roam1==-roam2);
roam1.pop();
console.log(roam1);
console.log(roam2);

//using concat oprator
line1=["A","B","C","D","E","F"," ","swap",1,5,7,9,"item1","item2"];
line2=[].concat(line1);
console.log(line1);
console.log(line2);
console.log(line1==-line2);
line1.pop();
console.log(line1);
console.log(line2);

console.log("\n");
//array madhe array ani extra element add karnya sathi
first=[1,3,5,7,4,3,5,,4,"swapnil","shivaji"];
//second= first.slice(0).concat("barahate","family");//first way
// second=[].concat(first,"barahate","nimon")//second way
second=[...first,"barahate","nimon"]//third way
console.log(first);
console.log(second);

