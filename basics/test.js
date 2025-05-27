console.log("hello")
const accountId = 14453
let accountemail = "abc@gmail.com"
var accountpassword = "12345"
accountCity = "jaipur"

//accountId = 2; //not allowed

accountemail = "sjsj"
accountpassword = "999"
accountCity =  "delhi"

console.table([accountId,accountemail,accountpassword])
/*
Prefered not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
