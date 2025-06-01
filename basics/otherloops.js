const arr = [1,2,3,4,5]
//FOR OFF LOOP
for (const iterator of arr) {
    console.log(iterator)
    
}
const greetings = "hello wrold!"
for(const i of greetings){
    console.log(`each char is ${i}`);
}

//MAPS

const map = new Map()
map.set('In','India')
map.set("usa","america")
map.set('In','India')//not get inserted as already existed
//only contain unique values
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myobject = {
    'game1':'gta6'
}
//object is not iteratble by foroff loop
// for (const i of myobject) {

    
// }

const myObject = {
    js:'javascript',
    cpp:'c++',
    python:'python'
}

//for in loop
for (const key in myObject) {
    console.log(`${key}->${myObject[key]}`)   
}

