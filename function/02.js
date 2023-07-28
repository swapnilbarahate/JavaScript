// let flag=0;
// function allcharRepeat(string){
//     for(i=0;i<string.length;i++)
//     {
//         for(j=0;j<string.length;j++)
//         {
            
//             if((string[i]===string[j]) && i!=j)
//             {
//                 flag=1;
//                 break;
//             }
//             else
//             {
//                 flag=0;
//             }
//         }
//         if(flag===1)
//         {
//             continue;
//         }
//         else{
//             return string[i] +" is Not repeated";
//         }
//     }
//     if(flag===1)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// let string="abcdbdacffe";
// console.log(allcharRepeat(string));

function repeatorNOt(input){
    let temp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(i=0;i<input.length;i++)
    {
        if((input[i].charCodeAt(0))>=65)
        {
           
            temp[(input[i].toUpperCase().charCodeAt(0))-65] = temp[(input[i].toUpperCase().charCodeAt(0))-65]+1;
        }
    }
    for(i=0;i<26;i++)
    {
        console.log(temp[i]);
        if(temp[i]===1)
        {
            return false;
        }
    }
    return true;
    
}
let input ="babcdef";
console.log(repeatorNOt(input));
