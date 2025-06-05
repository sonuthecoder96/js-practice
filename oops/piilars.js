//ENCAPSULATION

//RESTRICTING DIRECT ACESS OF DATA OBJECT

class bankaccount{
    #balance = 0;//by placing hash we can prevent it
    //we also define acces functions 
    getbalanc(){
        return "$"+this.#balance;
    }
}

let account = new bankaccount()
console.log(account.getbalanc())

//ABSTRACTION

//HIDE THE COMPLEX IMPLEMENTATION DETAIL

class coffemachine{
    start(){
        //call db
        //filter value

        return "starting machine"

    }
    brewcoffee(){
        //complex calculation
        return "brewing coffe"
    }

}
let mymachine = new coffemachine();

console.log(mymachine.start())

//POLYMORPHISM

//THE ABILITY OF SOMETHING TO HAVE TO DISPLAYED IN MORE THAN ONE FORM

class Bird{
    fly(){
        return "flying....."
    }
}

class penguin extends Bird{
    fly(){
        return "penguin cant fly";
    }
}

let bird = new Bird();
let penguins = new penguin();

console.log(bird.fly())
console.log(penguins.fly())

