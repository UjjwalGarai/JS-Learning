
///           OOP Concept and constructor function

function User(username, age){
    this.username = username
    this.age = age
    this.ageCheck = function(){
        console.log(this.age)
    }
    return this
}

User.prototype.welcome = function(){
    console.log(`Welcome ${this.username}`)
}

const user1 = new User("Ujjwal", 30)
const user2 = new User("Tiyasa", 3)

// console.log(typeof user1)
// console.log(user1.username)
// console.log(user1.welcome())
console.log(user2)

// ------------ Class Modern approch--------------------------

class UserClass {
    constructor(username, age){
        this.username = username
        this.age = age
    }

    ageCheck(){
        console.log(`Your age is ${this.age}`)
    }
}

UserClass.prototype.welcome = function(){
    console.log(`Welcome ${this.username}`)
}

const user3 = new UserClass('Prasanta', 67)
const user4 = new UserClass('Raju', 9)

console.log(user3)



// console.log(user3.ageCheck())
// console.log(user4.welcome())

