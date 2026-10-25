



class User{
    constructor(name, age){
        this.name = name     // 1. Instance property
        this.age = age
        this.info = function(){
            return `Hey ${this.name} welcome!!!\nYou are ${this.age} years old`
        }
    }

    welcome(){  // 2. Prototype property
            console.log(`Hey ${this.name} welcome to JS world!!!`)
        }
}

User.prototype.description = 'Description' // 3. Prototype Property

const userOne = new User("Ujjwal", 34)

// 1. Check what "userOne" owns directly:
console.log("--- Instance Descriptors ---");
console.log(Object.getOwnPropertyDescriptors(userOne))

// 2. Check what "User.prototype" owns directly:
console.log("--- Prototype Descriptors ---");
console.log(Object.getOwnPropertyDescriptors(User.prototype))

// 3. Check what the "User" class itself owns:
console.log("--- Class Descriptors ---");
console.log( Object.getOwnPropertyDescriptors(User))

