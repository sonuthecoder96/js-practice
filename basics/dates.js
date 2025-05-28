// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let mycreateddate = new Date(2023,0,23)
//let mycreateddate = new Date(2023,0,23,5,3)
let mycreateddate = new Date("01-14-2023")

console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp)//return time in milisecond till that date
console.log(mycreateddate.getTime())

console.log(Math.floor(Date.now()/1000))//gives in seconds instead of ms

newdate.toLocaleString('default',{
    weekday:"long",
})