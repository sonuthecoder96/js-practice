//object literal
const user = {
    username:"sonu",
    logincnt:9,
    singhIn:true,

    getUserDetails: function(){
        console.log("Got user details")
        console.log(this.username)
    }
}
console.log(user.getUserDetails());

function User(username,logincnt,singhIn){
    this.username=username
    this.logincnt=logincnt;
    this.singhIn = singhIn;
    this.greeting = function(){
        console.log("welcome")
    }
    //varible  = value
    return this
}

//const user1 = User("hello",2,true);
//const user2 = User("override",2,false)
//console.log(user1)//it gives user2 as user2 overrides user 1

//thats why constructor is used
//now we use new then this problem not ocuur
const user1 = new User("hello",2,true);
const user2 = new User("override",2,false)
console.log(user1)
console.log(user2)


