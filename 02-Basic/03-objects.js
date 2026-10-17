
// Object constructor
const user1 = new Object({
    name: "Ujjwal",
    age: 24
})

//Object Function call
const user2 = Object({
    name: "Ujjwal",
    age: 24
})
// Object Literal
const user3 = {
    name: "Ujjwal",
    age: 24    
}
// console.log(user1, user2, user3);
// console.log(typeof user1,typeof user2, typeof user3);

// Object Property call and inject symbol as a property keys

const userInfo = {
    name: "Ujjwal",
    age: 25,
    email: "ujjwal.garai@google.com",
    isLoggedIn: false,
    "edu qualification": "Masters"
}

// console.log(userInfo);
// console.log(userInfo.age); // Property call by . notation
// console.log(userInfo["email"]); // Property call square backet[]
// console.log(userInfo["edu qualification"]); // Property call square backet[]


userInfo["edu qualification"] = "B.Sc."  // property value change
userInfo["address"] = "Bankura"  // New property inject
// New Sybol insert as a key
const newSymbol = Symbol("abc")
userInfo[newSymbol] = "Sybol value"  // New property inject
// Function as a property
userInfo.greetings = function (){console.log(`Welcom ${this.name}`);
}

userInfo["greetings"]()
console.log();
console.log();
