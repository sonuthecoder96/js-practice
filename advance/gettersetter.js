class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    //getter setter bith should be define together
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        //this.password = value;//this is wrong as both constructor and setter try to set value cause stack overflow 
        //the solution this is to make new property during setting
        //we add underscore this should be done in both getter and setter
         this._password = value.toUpperCase()
    }
}


const sonu = new User("abc@.com","abc");
console.log(sonu.password);


