function saymyname(){
    console.log("s")
    console.log("o")
    console.log("n")
    console.log("u")
}
saymyname//refrene of function
saymyname()//calling a function

//function addtwono(n1,n2){
//    console.log(n1+n2);
//}

function addtwono(n1,n2){
    let res = n1+n2;
    return res;
}

function loginuserMessage(username){
    return `${username} just logged in`;
}
loginuserMessage("sonu")//doesnt print anythis as not stored and printed
console.log(loginuserMessage("sonu"))
console.log(loginuserMessage())//if nothing is passed it shows undefined
function loginuserMessage2(username = "sonu"){
    //username not given still it takes sonu by default
    return `${username} just logged in`;
}

//rest operator ... same as spread
function calculatecartprice(...num){
    return num
}
console.log(calculatecartprice(1,2,3,4));//return array of parameters

function calculatecartprice1(val1,val2,...num){
    return num
}
console.log(calculatecartprice1(1,2,3,4));//val1 val2 go to them else go them

//passsing object in function

const user = {
    username : "sonu",
    price  : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}`);
}

handleObject({
    username:"sam",
    price:300
})//we can also pass object by creating during call

//passing array in function

function returnfirstval(getArray){
    return getArray[0];
}
const arr = [1,2,3];
console.log(returnfirstval(arr))