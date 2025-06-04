function multiply5(num){
    return num*5;
}

multiply5.power=2
console.log(multiply5(5))
console.log(multiply5.power)
console.log(multiply5.prototype)

function createUser(username,score){
    this.username = username
    this.score = score

}
createUser.prototype.increment = function(){
    this.score++;//injecting methods in function as it is protoype
}
createUser.prototype.preintMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai",25)//without new keyword  it not work as it intiates creation of new object
const tea = new createUser("tea",250)

chai.preintMe()

tea.preintMe()

