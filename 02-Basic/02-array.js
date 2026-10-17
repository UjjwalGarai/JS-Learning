const fruits = ["Apple", "Orange", "Pine Apple"]
const vegitables = ["Cucumber", "Bitter Gaurd", "Pumpkin"]

// Merge two array
// fruits.push(vegitables)
// const vegFruits = fruits.concat(vegitables)
// const vegFruits2 = [...fruits, ...vegitables, 4]

// console.log(vegFruits2)

// From, IsArray, of

const user = {
    name: "Tiyasa",
    Age: 24
}

console.log(Object.keys(user));


const arrCheck = Array.isArray(Object.keys(user))
const arrFrom = Array.from(Object.keys(user))
const arrOf = Array.of("as", 56, [2,4])

console.log(arrOf);
console.log(arrFrom);

const arr2= [2, 4, [5.7, 8], 2, 4, [6, 18, [12, 87]]]
console.log(arr2.flat(Infinity));
console.log(arr2.flat(2));







