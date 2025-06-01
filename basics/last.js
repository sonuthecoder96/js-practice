const coding = ["js","cpp","c","java"]

coding.forEach( function(item){
    console.log(item);
    
} )
//also pass arrow function
coding.forEach( (val) => {
    console.log(val);
    
} )

//we also pass predefined functions in callback function req by foreach 

function printme(item){
    console.log(item);

}

coding.forEach(printme)//only we have to pass refrence

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//iterating on arrays of object
const mycoding = [
    {
        languagename:"javascript",
        extension:"js"
    }
    ,
    {
        languagename:"cplusplus",
        extension:"cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})