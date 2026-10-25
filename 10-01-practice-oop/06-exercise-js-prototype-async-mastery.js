
async function delayedGreeting(name) {
  const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`Hello, ${this.name}!`);
    }, 2000);
  });

  const greetingMessage = await promiseOne;
  console.log(greetingMessage);
}

// delayedGreeting("Ujjwal");

/*
Challenge 2: Class vs. Constructor Function Prototypes
Task:

Create a constructor function called Vehicle(make, model) and add a method called startEngine to its prototype using dot notation (Vehicle.prototype.startEngine = ...).

Create an ES6 class called ElectricVehicle that extends or mimics it, with a method called chargeBattery.

Goal: Create an instance of each, and verify which one has enumerable prototype methods by checking their property descriptors using Object.getOwnPropertyDescriptors().
*/

function Vehicle(make, model){
    this.make = make
    this.model = model
}

Vehicle.prototype.startEngine = function(){
    console.log(this.make, this.model)
}

class ElectricVehicle extends Vehicle{
    constructor(make, model){
        super(make, model)
        // super(model)
    }
    chargeBattery(){
        console.log(`Mimic of vehicle ${this.make}, ${this.model}`)
    }
}


const ev = new ElectricVehicle('Hero', '2.2')
const v = new Vehicle('Honda', '4.4')
// console.log(ev.chargeBattery())
// console.log(ev.startEngine())
// console.log(v.startEngine())

// console.log(Object.getOwnPropertyDescriptors(Vehicle.prototype))
// console.log(Object.getOwnPropertyDescriptors(ElectricVehicle.prototype))

// Start Engine is enumarable property




/*
Challenge 3: The propertyIsEnumerable Detective
Task: Write a small script using either your Vehicle or Mobile class from earlier.

Goal: Write three console logs using propertyIsEnumerable:

Check an instance property (should be true).

Check an inherited prototype method called directly on the instance (should be false).

Check that exact same prototype method called directly on the ClassName.prototype (should be true or false depending on how it was added—prove why!).
*/

class Vehicle2{
    constructor(carName, model, realease){
        this.carName = carName
        this.model = model
        this.realease = realease
    }
    start(){
        console.log('Car is ready')
    }
}

Vehicle2.prototype.welcome = 'Welcome' 

const maruti = new Vehicle2('Suzuki', 'VS2018', true)

console.log(maruti.propertyIsEnumerable('carName'));
console.log(maruti.propertyIsEnumerable('start')); // false becaue it is not direct property of maruti instance
console.log(Vehicle2.prototype.propertyIsEnumerable('start')); // false becaue it is  direct property of Vehicle2 but it defined as a method iinside class block {}
console.log(Vehicle2.prototype.propertyIsEnumerable('welcome')); // true becaue it is  direct property of Vehicle2 and difined via dot notation outside of alss block

// console.log(Object.getOwnPropertyDescriptor(maruti, 'carName'))

/*
Challenge 4: Custom Property Descriptors
Task: Create an empty object const userAccount = {}.

Goal: Use Object.defineProperty() to add a property called pinCode with the value 9999, but set enumerable: false and writable: false. Test what happens when you try to change the pinCode and when you try to loop through Object.keys(userAccount)
*/

const userAccount = {
    'name': 'Ujjwal',
    address: 'Demus'
}
Object.defineProperty(userAccount,'pincode',{
    value: '722134',
    writable: false,
    enumerable: false
})


userAccount.pincode = '1234'
console.log(userAccount)

console.log(Object.getOwnPropertyDescriptors(userAccount))

const obj1 = Object.getOwnPropertyDescriptors(userAccount)
console.log(obj1.pincode.value);

console.log(userAccount)

for (const [key, value] of Object.entries(userAccount)){
    console.log(key, value)
}

// The observation pincode is not showing in log also not get while loop
