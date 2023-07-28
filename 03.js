//let keyword vs var keyword vs const keyword
//declare variable with let keyword
//let and const are block scope
//var  is function scope
//var is used in function scope any where
function test(love){
    if(love){
        var firstName ="Swapnil";
        var surname = "Barahate";
    }
    console.log("my name is"+" "+firstName +" "+surname);
}

test(true);

//let  is used in only declared block scope
function test2(love){
    if(love){
        let firstName ="Sonali";
        let surname = "Barahate";
        console.log("my name is"+" "+firstName +" "+surname);
    } 
}
test2(true);

//let  is used in only declared block scope
function test3(love){
    if(love){
        const nickName ="sona";
        const surname = "Barahate";
        console.log("Nick Name is"+" "+nickName +" "+surname);
    }
    
}
test3(true);