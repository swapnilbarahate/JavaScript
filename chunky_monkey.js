// Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays 
//with the length provided by size (second argument). There are 4 green checks (objectives) our
// code needs to pass in order to complete this Algorithm:

// (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
// ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
// ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
// ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

// //first way
// let arr = [2,5,8,9,10,6,3];
// let size = 8;

// function chunkyMonkey(arr,size)
// {
//     let temp =[];
//     for(let i =0;i<arr.length;i+=size)
//     {
//         temp.push(arr.slice(i, i + size));
//     }
//     return temp;
// }

// let result = chunkyMonkey(arr,size);
// console.log(result);

//second way
let arr = [2,5,8,9,10,6,3,4,5];
let size = 5;

function chunkyMonkey(arr,size)
{
    
    let result =[];
    let i =0;
    while(i<arr.length)
    {
        let temp =[];
        while(temp.length!=size && i!=arr.length)
        {
            temp.push(arr[i])
            i++;
        }
        result.push(temp);
        temp = [];
    }
    return result;
}

let result = chunkyMonkey(arr,size);
console.log(result);
