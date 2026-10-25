
console.log(Object.getOwnPropertyDescriptors(Math))

console.log(Math.PI)

Object.defineProperty(Math, 'PI', {
    writable: true,
    value: 4,
    enumerable:true
})

console.log(Math.PI)