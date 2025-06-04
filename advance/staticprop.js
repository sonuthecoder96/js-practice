class User{
    constructor(username){
    
       this.username = username ;

    
    }
    logme (){

        console.log("user logged in")

    }


    static createid(){
        return 123  //now this method is not given to object
    }
}

const sonu = new User("sonu")
console.log(sonu.createid()) //this method is not available give erroe

//even in extended class is not shared


