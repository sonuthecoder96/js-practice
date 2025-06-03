//previously they are not js part  for it we have to use bluebird library but now they are integrated in js as there core part
//creation of rpomis
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //db callls cryptography
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()//it connects with then
    },1000)

})
//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})
//without storing in variable
new Promise(function(resolve,reject){
    //Do an async task 2
    
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)

}).then(function(){
    console.log("2nd promise consumed")
})


//transfering data from promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        resolve({username:"sonu",email:"abc@"})//it also transfer data
    },1000)

})
promiseThree.then(function(user){
    console.log(user)//we get data from promisethree
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            //no error so we resolved it
            resolve({username:"sonu",pass:"abc@"})//it also transfer data
        }
        else{
            reject("Error soomethingwent wrong")//it send given messge 
        }
    },1000)

})
//for extracting given data we use chainig of then
promisefour.then((user)=>{
   console.log(user)
   return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error);//it catches eroor and eroor message
}).finally(()=>{
    console.log("promise is resolved or rejected")
})//tells work is completed or not



const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            //no error so we resolved it
            resolve({username:"javascript",pass:"123"})//it also transfer data
        }
        else{
            reject("Error js went wrong")//it send given messge 
        }
    },1000)

});

async function consumePromisefive() {
   try{ const response = await  promisefive//you wait untill promise completed hence awiat uses
    console.log(response)
   }
   catch(error){
    console.log(error)

   }
    
}
consumePromisefive()

//fetch
fetch('https://api.github.com/users/sonuthecoder96')
.then((response)=>{
    return response.json()//converts repose in json format
}).then((data)=>{
    //managing recived data
    console.log(data)
})
.catch((error)=>console.log(error))
