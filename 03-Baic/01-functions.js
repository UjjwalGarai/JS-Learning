

// function addTwoNumbers(firstNumber = 6, secondNumber = 4){
//     console.log(firstNumber + secondNumber);
    
// }

// addTwoNumbers(3, undefined)
// addTwoNumbers()


// function addTwoNumbers(firstNumber, secondNumber){
//     const result = firstNumber + secondNumber
//     return result
//     console.log("Welcome")
    
// }

// // addTwoNumbers(3, undefined)
// console.log(addTwoNumbers(4, 7))

function checkUser(user){
    if(!user){
        return `Please enter your name`
    }
    return `Welcome ${user}`
}

console.log(checkUser())
console.log(checkUser(true))