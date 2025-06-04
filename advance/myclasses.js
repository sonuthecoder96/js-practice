//introduced in ES6
class user{
    constructor(username,email,password){
        this.username = username
        this.email = email;
        this.password = password
    }
    encryptedpassword(){
        return "abc"+this.password
    }
    changeussername(){
        return this.username.toUpperCase();
    }



}

const chai = new user("chai","abc.gmail.com","123")

console.log(chai.encryptedpassword());
console.log(chai.changeussername());


//we can also do by this old method
/*function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}*/