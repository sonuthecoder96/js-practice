//function req another function and take as parameter

function maketea(typeoftea){
    
    return typeoftea;

}

function processtea(teafFunction){
     return teafFunction("hello")
     
}

let order = processtea(maketea)
console.log(order)

function createteamaker(){
    return function(teatype){
        return `making ${teatype}`
    };
}
let teamker = createteamaker();
let result = teamker("green tea");
console.log(result)