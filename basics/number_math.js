const score = 400
console.log(score)

const balance = new Number(100)

console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))

const otherno = 23.8966

console.log(otherno.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//converts to indian standard


// ++++++++++++++MATHS++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.random());//return 0 to 1


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)

