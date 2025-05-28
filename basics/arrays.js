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


  //merging two array create problem let see how
  const marvel_hero = ['superman','batman']
  const desi_hero = ['shaktiman','mightyraju']

  marvel_hero.push(desi_hero)

  console.log(marvel_hero)//it treated whole array as one elemnt
  //same goes with concatination

  marvel_hero.pop()

  console.log(desi_hero+marvel_hero)

  const allheros =  marvel_hero.concat(desi_hero);

  //concat return new array after merging

  console.log(allheros)

  //also otherway of doing it is spread operator

  const all2hero = [...marvel_hero,...desi_hero]

  console.log(all2hero)


  //if there are many array in array to make it normal we use flat in it we give abouth depth until which

  const t = [1,2,3,[2,3,[1,3]]];
  const flatt = t.flat(Infinity)
  console.log(flatt)


  console.log(Array.isArray("sonu"))//tells array or not
  console.log(Array.from("sonu"))//make array from given type
  console.log(Array.from({name:"sonu"}))//intresting as in it empty array is returned because we dont specify we have make array of keys or value

  let x = 1
  let y = 2
  let z = 3

  //make array from elemnts return new array from elements

  console.log(Array.of(x,y,z));


