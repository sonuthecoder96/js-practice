//switch case
const month = 3

switch(month){
    case 1:
        console.log("january")
        break;//withou break whole code executed excpet default
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("april")
        break;

    default:
        //executed whem nothing case satisfied
        console.log("nothing")
        break;
    
}

//TRUTHY or fallcy

const emptyobj = {}
if(Object.keys(emptyobj).length==0){
    console.log("empty object")
}

//Nullis caolescing Operator (??):null undefined
let val1;
val1 = 5??10
console.log(val1)
val1 = null??10



console.log(val1)
