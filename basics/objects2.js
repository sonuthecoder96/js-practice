//const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "23abc"
tinderuser.name = "sammy"
tinderuser.loggedin = false

//console.log(tinderuser)

const regularuser = {
    email:"asbs@gamil.com",
    fullname:{
        userfullname:{
            firstname:"abc",
            lastname : "def"
        }

    }
}
console.log(regularuser.fullname.userfullname.lastname)

//merging objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2};
console.log(obj3)
console.log(obj4)
console.log(Object.keys(tinderuser));//return array of keys of given object
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('islooggged'))//check object have this property or not

//object destructuring

const {loggedin:lin} = tinderuser
console.log(lin)