//object inside in array

const array =[
    {name:"swapnil",surname:"barahate",age:21},
    {name:"bhushan",surname:"nerkar",age:26}
];
console.log(array);
for(let user of array)
{
    console.log(user);
    console.log(user.name)//only print name
}

//nested destructuring
const users = [
    {userid:1,username:"shubham",age:21},
    {userid:2,username:"vaibhav",age:25},
    {userid:3,username:"bhau",age:24},
    {userid:4,username:"swapnil",age:24}
]

const [user1,user2,...user3]=users;
console.log(user1);
console.log(user2);
console.log(user3);

//destrtuctu and change name key name
const[{userid:user1Id,username:user1Name ,age},,{userid:user3Id,username:user3Name}]=users;
console.log(user1Id);
console.log(user1Name);
console.log(age);
console.log(user3Id);
console.log(user3Name);
