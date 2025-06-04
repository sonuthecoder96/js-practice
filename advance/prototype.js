let myName = "sonu   "
//creating a method true length which trim mspaces


String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`)
}
console.log(myName.truelength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman : "sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//injecting a property in object
Object.prototype.sonu = function(){
    console.log("sonu is present in all objects");
}
heroPower.sonu()
myHeros.sonu()//this so this object property goes to everyone due to protoype behaviour as all things ->refer objects 


//now we check if we inject some property on array is it reflected to object or not
Array.prototype.heysonu= function(){
    console.log("hey sonu")
}

myHeros.heysonu()
//heroPower.heysonu() it gives error as we inject propert at lower level it cant acces by higher level

myName.truelength()
