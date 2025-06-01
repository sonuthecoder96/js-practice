//const coding = ["js","cpp","c","java"]
// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)
//for each loop never return anything means undefined
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.filter((num)=>num>4)

const newnums2 = myNums.filter((num)=>{
    
    //here we have to explicitly return
    return num>5;
})

console.log(newnums)
console.log(newnums2)
const newmynums = myNums.map((num)=>num+10)
console.log(newmynums)

//chaining 

const chaing = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>10)

//elemnts passed on basis of chainig

console.log(chaing)

//REDUCE


const mytotal = myNums.reduce(function(accumulatar,curvl){
    console.log(`accumulator = ${accumulatar},curval = ${curvl}`)
    return accumulatar+curvl;
},0)

const mytotal2 = myNums.reduce((acc,cur)=>acc+cur,0) 

