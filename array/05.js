// for of loop use in array itret
//for of loop direct value retur karate
//for of he same for loop sarkhech ahe but ya madhe array length chi garaj naste;
const students=["swapnil","vaibhav","sagar","ishwar","shubham","paka"];
let student;
for(student of students)
{
    console.log(student);
    console.log(student.length);//length print
}
console.log(students);
console.log(students.length);//array chi length find karnyasathi
console.log("\n");
console.log("***for in loop output***");
//fon in loop
//for in loop array elementch chi index number return karte;
const fruits=["apple","baNana","panapple","orange","mango","pomogrante"];
const fruits2=[]; 
for(let fruit in fruits)
{
    console.log(fruit);
    fruits2.push(fruits[fruit]);
}
console.log(fruits2);

//for loop
//for loop ne print karnua sathi array la length have aste
const array1=['asdf','sagar',1,4,7,'sdf'];
for(i=0;i<array1.length;i++)
{
    console.log(array1[i]);
}

//Which games is made in India?
const allGames=['cricket','holiball','tenis','gilli Danda',2,4,6,'carom','football','ches','kuStHi','basketball','kabbdi','hockey','badminton','Mallakhamb','Kabaddi','Kusti'];
const indianGames=['mallakhamb','kabaddi','kusthi','Gilli Danda'];
let game;
let indian;
for(game of allGames)
{
    game=game+"";
    game=game.toUpperCase();
    for(indian of indianGames)
    {
        indian=indian+"";
        indian=indian.toUpperCase();
        if(game===indian)
        {
            console.log(indian);
        }
    }
}