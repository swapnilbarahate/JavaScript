//object 
//Objects in JavaScript are dynamic collections of key-value pairs. The key is always a string and has to be unique in the collection.
//n JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example.
// A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. 
//The same way, JavaScript objects can have properties, which define their characteristics.

//object syntax
//const obj1={key1:"value1",key2:"value2",key3:"value3"};
const person ={
    name:"swapnil",
    surname:"barahate",
    age:24,//integer value
    skill:["html","CSS","javaScript","PHP","C"]//array
}
console.log(person);

//how to access object value
console.log(person.person);
person.skill.push("SQL");
console.log(person.skill);

//how to add key value pair in object
person.gender ="Male";
console.log(person);

//how to access object value using []
console.log(person["age"]);
//key hi nehami string aste object madhe
person["father name"]="shivaji barahte";//add key valie pair using[]
console.log(person);
const key1 ="email"//variable vapurun key add karnyasathi
person[key1]="barahateswapnil2017@gmail.com";
console.log(person);

//how to iterate object
//for....in loop
let key;
for(key in person)
{
    //console.log(key);//kye name milate
    //console.log(key+":"+person[key]);key and value pair
    console.log(`${key} : ${person[key]}`);//key and value pair
}

//Object.keys()
//object chay key find  karate
//array madhe result yeto key ya array madhe store hotat
console.log(Object.keys(person));
//Objec.values();
console.log(Object.values(person));

//for....of loop and Object.keys vaparun
// object itrate karushakto
for(key of (Object.keys(person)))
{
    console.log(`${key} : ${person[key]}`);
}

//computed properties
const k1 = "objkey1";
const k2 = "objkey2";
const val1 = "objvalue1";
const val2 = "objvalue2";

const obj ={
    [k1]:val1,
    [k2]:val2
}
console.log(obj);

//or 
const a1 ="obj2key1"
const a2 ="obj2key2";
const value1 ="obj2v2alue1";
const value2 ="obj2value2";
const obj2={};
obj2[a1]=value1;
obj2[a2]=value2;
console.log(obj2)
