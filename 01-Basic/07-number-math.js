const score = new Number(240)
// console.log(score);

const balance = 100000000
// console.log(typeof balance.toLocaleString("en-IN"));

const price = 1240.346
// console.log(price.toFixed(2));
// console.log(price.toExponential(1));

// +++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++

const newNumber = 2.456
// console.log(newNumber)

console.log(Math.PI)
console.log(Number.isFinite(3453594))
console.log(Number.isFinite(Infinity))
console.log(Number.MAX_VALUE * 2)
console.log(Math.abs(-8))
console.log(Math.abs(-8 - -19))
console.log(Math.ceil(8.1))
console.log(Math.floor(8.9))
console.log(Math.round(8.9))
console.log(Math.random() * 100)

// Return random number between Minimum and maximum

const minimumNumber = 5
const maximumNumber = 7

const randomNumber = Math.floor((Math.random() * ((maximumNumber - minimumNumber) + 1)) + minimumNumber)
console.log(`Your Lucky number is ${randomNumber}`)



