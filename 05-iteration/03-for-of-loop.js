
// For of

// Array
const vegitabiles = ["Onion", "Bitter Gaurd", "Pumpkin"]
for (const vegitable of vegitabiles) {
    // console.log(vegitable); 
}

// String
const greetings = "Hellow World!"
for (const greeting of greetings) {
    // console.log(greeting);
}

// Map -------

const map1 = new Map()
map1.set([1,3,6], ["Ujjwal", "Rai", "Kumar"])
map1.set("name", "Ujjwal")
map1.set("age", 21)
map1.set("name", "Tiyasa")

for (const [key, value] of map1){
    // console.log(`${key} : ${value}`);  
    // console.log(`${typeof key} : ${value}`);  
}

// We can't use Object in for of loop
const obj1 = {
    "age": 21,
    name: "Ujjwal"
}
for (const object of obj1) {
    // console.log(object);
    
}


