class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

//now we inherits with extends

class teaccher extends user{
    constructor(username,email,pass){
        super(username)//now this go to extended class and set property and pass this in backend
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
       console.log(`A NEW COURSE ADDED BY ${this.username}`)
    }



}
const chai = new teaccher("chai","abc",113);

chai.addCourse()
console.log(chai instanceof teaccher);//tells it is instance of given class or not