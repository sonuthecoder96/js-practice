let teaflavours = ["green tea","black tea","coffe"]
let softcopyteas = teaflavours;
teaflavours.pop()//it get reflected in both copies beacuse in array it refer to same memory refrence
console.log(softcopyteas)
console.log(teaflavours)

let hardcopy = [...teaflavours];//it doesn't chanfge it have there own array
teaflavours.pop()
console.log(hardcopy)

let citypop = {
    "london":12222,
    "delhi": 22233,
    "up" : 200000
}
let copy = {}
//creating copy of object using loop
for (const city in citypop) {
    console.log(citypop[city]);
    copy[city] = citypop[city]
    
}
console.log(copy)


