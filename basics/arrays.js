//++++++++++++++++++++++++ARRAYS+++++++++++++++++++++++++++++++
 const myarr = [0,1,2,3,5,true,'name']//constain diffrent datatypes
 //arrays create shallow copy share same refrence
 // deep copy do not share same refrence copy is made

 const myheros = ["shaktiman","naagraj"]

 const Myarr2 = new Array(1,2,3,4)


 //Array Methods
 myarr.push(6)
 console.log(myarr)
 myarr.pop()
 console.log(myarr)
 myarr.unshift(9)//to push at first place
 console.log(myarr)
 myarr.shift()
 //to pop from first
 console.log(myarr.includes(9))
 console.log(myarr.indexOf(3))
 const newArr = myarr.join() //converts arrys to string

 console.log(myarr)
 console.log(newArr)
 console.log(typeof newArr)

 //slice, splice

 console.log("A",myarr);

 const myn1 = myarr.slice(1,3);//it doesn't include end point but not change array

 console.log(myn1)
 
 console.log("B",myarr);


 const myn2 = myarr.splice(1,3);//it includes last end point also remove that part from orignal array
 console.log(myn2)
  console.log("C",myarr);



