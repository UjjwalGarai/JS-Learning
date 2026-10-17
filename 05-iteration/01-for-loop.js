
// var i = 5

// for (var i = 0; i < 10 ; i++){      // Don't use "var" it will replace wotk as global
//     console.log(i);
// }
// console.log(`Value of i is ${i}`)

 // ------------------break will stop all the iteration ---------------------------------------

// for (let i = 1; i <= 10; i++) {   // Use break will stop all the following
//     console.log(i); 
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     } 
// }

 // --------- Continue will skip  current iteration ---------------------------------------

// for (let i = 1; i <= 10; i++) {  
//     console.log(i); 
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     } 
// }

// ---------- Nested for loop --------------------
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);       
//     }   
// }

// ---------- Handling array ---------------------------------

const fruits = ['Banana', 'Apple', 'Gouva']

// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);    
// }

// find odd or even number between minmumNumber and maxNumber
// const minmumNumber = 1
// const maxNumber = 5

// for (let i = minmumNumber; i < maxNumber; i++) {
//     if (i%2 == 0){
//         console.log(`${i} is a even number`);
//     }
//     if (i%2 !== 0) {
//         console.log(`${i} is a odd number`);
//     }    
// }

// find prime and  non-prime number between minmumNumber and maxNumber

const minmumNumber = 1
const maxNumber = 500

let primiNumbers = []

for (let i = minmumNumber; i <= maxNumber; i++) {
    if(i <= 1){
        continue
    }
    let isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0){
            isPrime = false
            break;
        }
        
    }
    if(isPrime){
       primiNumbers.push(i) 
    }
    
}
console.log(primiNumbers);
