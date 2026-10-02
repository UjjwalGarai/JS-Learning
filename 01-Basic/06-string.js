
// Its a object type
const userName1 = new String("I   am a book")
// console.log(userName1)

// String type
const userName2 = "  I am a book   "
// console.log(userName2)

console.log(`Length: ${userName2.length}`)
console.log(`Upper Case: ${userName2.toUpperCase()}`)
console.log(`Lower Case: ${userName2.toLocaleLowerCase()}`)
console.log(`Trim: ${userName2.trim()}`)
console.log(`Bold HTML: ${userName2.bold()}`)
console.log(`strike : ${userName2.strike()}`)
console.log(`Blink HTML : ${userName2.blink()}`)
console.log(`subset : ${userName2.substring(-1, 7)}`)
console.log(`split : ${userName2.split(" ")}`)
console.log(`slice : ${userName2.slice(1, 6)}`)

const splitString = userName2.split(" ")
console.log(typeof splitString);
console.log(splitString);

