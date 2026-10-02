

// Primitive Datatype ---------------------------------------------------------------------------------

// 7 Types: String, Number, BigInt, Boolean, undefined, null, Symbol
const name = "Ujjwal"
const age = 23
const referenceId = 78347235098243758n
const isLoggedIn = true
let clientName;
const temperature = null
const itemId1 = Symbol(123)
const itemId2 = Symbol(123)

// console.log(itemId1 == itemId2)


// Reference (non - primitive datatype) ---------------------------------------------------------------------------------
// 3 Types: Object, Array, Function 

const user = {
    Name: "Ujjwal",
    Age: 32
}

const fruits = [1, 2, "Apple", false]
const greeting = () => {
    const userName = "Sampa"
    console.log(userName)
}

function greeting2(){
    const userName = "Sampa"
    console.log(userName)
}

// console.log(user, fruits, greeting, greeting2)
// console.log(typeof greeting);
// console.log(typeof greeting2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory 2 Types
// A. Stack (Primitive)   B. Heap (Non-Primitive)

// Stack give us a copy and Heap give us a reference

let univercity = "Vidyasagar"
let college = univercity
college = "Medinipure College"

console.log("It wont be change because it gave us a copy to the collage variable not a reference: ",univercity)

const user1 = {
    email: "user@google.com",
    upi: "user1@ibl"
}
const user2 = user1
user2.email = "user2@google.com"
console.log("It will change the value because it work as reference " , user1)