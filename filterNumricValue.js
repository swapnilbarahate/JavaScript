// write program to filter the numeric value in arry do not give any  other empty array
//EX. arr= [1,"swapnil","e",3,6,8,0,"e","s"]
//o/p arr=[1,3,6,8,0]
let arr = [1, "swapnil", "e", 3, 6, 8, 0, "e", "s"];
function removeCharcter(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            var removed = arr.splice(i, 1);
            i--;
            console.log("Removed element: " + removed);
        }
    }
}
removeCharcter(arr);

console.log(arr);
// splice method is used to add and remove element in array at  specific  index wise
// write a program to filter the array charecter item in array and add the next item is "found"
//let arr1= [1,"hi",2,"hello",3,4,5];
//o/p is arr1= [1,"found","hi",2,"found","hello",3,4,5];
let arr1= [1,"hi",2,"hello",3,4,5];
let i=0;
while(i<arr1.length)
{
    if(typeof(arr1[i])=='string')
    {
        arr1.splice(i,0,"found");
        i++;
    }
    i++;
}
console.log(arr1);

