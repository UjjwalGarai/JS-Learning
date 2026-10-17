
const a = 10
let b = 20
var c = 30
let d = 40
const e = 50

if(true){
    const a = 20
    let b = 200
    var c = 300
    d = 400
    // e = 500
} 

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Nested function and their scopes

function getUser(){
    const useName = "Ujjwal"
    function greetings(){
        const message = "Welcome"
        console.log(`${message} ${useName}`);   // We can take the value from parent function   
    }
    console.log(`${message} ${useName}`); // from child we don't have access to from
}

// getUser()

if (true){
    const name = "Ujjwal"
    if(true){
        const age = 24
        console.log(`Welcome ${name}, you are ${age} year's old`);   
    }
    //console.log(age); // Do't have access to age   
}
// console.log(name);


// addTwo(7)
addOne(7)

function addOne(value){
    console.log(value + 1);
}

const addTwo = function(value){
    console.log(value + 2); 
}


