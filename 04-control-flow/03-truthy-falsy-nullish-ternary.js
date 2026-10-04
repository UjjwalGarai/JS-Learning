const arr = []

// if (arr.length >= 1){
//     console.log('Array with value');
// }else{console.log('not an or empty array')}

const obj = {}
// if(Object.keys(obj).length >= 1){console.log('this is an object with value')}

// falsy values------------------------------------------------------
//Total 8 : false, null, undeifined, NaN, 0, -0, BigInt(0n), ''
// true values ------------------------------------------------------
// Examples : 'false', 'null', '0', 

// Nullish Coalesching Operator

const result = 42 ?? "Ujjwal";
const result2 = null ?? "Ujjwal";
const result3 = undefined ?? "Ujjwal";
const result4 = undefined ?? null ?? undefined ?? "Ujjwal";
// console.log(result,"\n", result2);

// let user;
// user ??= "Gest user"
// console.log(user);

// Ternary Operator-----------------
const val = 20;
val >= 10 ? console.log("Grater than 10") : console.log("Less than 10")
