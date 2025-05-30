const user = {
    username : "sonu",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)//print cur object with cur properties

    }
    //this is used to acess current context
}
user.welcomeMessage()
user.username = "new"
user.welcomeMessage()

console.log(this)//in global in node enviornment it return empty object
//in browser it return window object

function chai(){
    let username = "sonu";
    console.log(this.username)
    //in it this not works it returns undefined object
}
chai()

//+++++++++++++++++++++++++ARROW FUNCTION
const addtwo = (num1,num2)=>{
    return num1+num2
}
//another way
const add1 = (num1,num2)=>  num1+1//used when one liner functions
const add2 = (num1,num2)=>  (num1+2)//another way
//object only returned by above method
const add3 = (num1,num2)=>  ({username:"abc"})
