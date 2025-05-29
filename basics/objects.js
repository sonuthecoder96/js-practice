//singleton
//Object.create in this singleton is created

//object literals

const mysym  = Symbol("key1")
const JsUser  = {
    name: "sonu",
    "full name":"sonu sonu",
    [mysym]:"mykey1",
    age:18,
    location : "delhi",
    email : "abc@gamil.com",
    isloggedin : false

}
console.log(JsUser.name)
console.log(JsUser["full name"])
console.log(JsUser["email"])
console.log(JsUser[mysym])
console.log(typeof JsUser[mysym])


JsUser.email = "hello.com"
//Object.freeze(JsUser)//now no changes gone done in objects
JsUser.email = "123.com"
console.log(JsUser)



JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
    //by this we can acces all properties of current object
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)//return function object but function not get executed
console.log(JsUser.greeting2())