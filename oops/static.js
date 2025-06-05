//STATIC METHODS IN CLASS ARE METHODS WHICH ARE JUST USED BY CLASS ITSELF NOT Y OTHERS

class calci{
    static add(A,B){
        return A+B;
    }
}

// let minical = new calci();
// console.log(minical.add(2,3))//this will not work

// instead we use this

console.log(calci.add(2,9));