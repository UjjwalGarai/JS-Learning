## Challenge 1: The Asynchronous Trap
Task: Write a function called delayedGreeting(name) that returns a Promise. Inside the promise, use a setTimeout of 2 seconds to resolve with a string: Hello, [name]!.

Goal: Use async/await to call this function and store the resolved string inside a variable, then console.log it. Make sure you understand why you must use await to catch that value.

```javascript

```

## Challenge 2: Class vs. Constructor Function Prototypes
Task:
Create a constructor function called Vehicle(make, model) and add a method called startEngine to its prototype using dot notation (Vehicle.prototype.startEngine = ...).

Create an ES6 class called ElectricVehicle that extends or mimics it, with a method called chargeBattery.

Goal: Create an instance of each, and verify which one has enumerable prototype methods by checking their property descriptors using Object.getOwnPropertyDescriptors().

```javascript
async function delayedGreeting(name) {
  const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`Hello, ${this.name}!`);
    }, 2000);
  });

  const greetingMessage = await promiseOne;
  console.log(greetingMessage);
}

delayedGreeting("Ujjwal");
```

## Challenge 3: The propertyIsEnumerable Detective
Task: Write a small script using either your Vehicle or Mobile class from earlier.

Goal: Write three console logs using propertyIsEnumerable:

Check an instance property (should be true).

Check an inherited prototype method called directly on the instance (should be false).

Check that exact same prototype method called directly on the ClassName.prototype (should be true or false depending on how it was added—prove why!).

## Challenge 4: Custom Property Descriptors
Task: Create an empty object const userAccount = {}.

Goal: Use Object.defineProperty() to add a property called pinCode with the value 9999, but set enumerable: false and writable: false. Test what happens when you try to change the pinCode and when you try to loop through Object.keys(userAccount)

```javascript

```