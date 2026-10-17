
// Rest parameter ..., Object and Array handle

function calculateCartPrice(value1, value2, ...value){
    return value
}

// console.log(calculateCartPrice(100, 200, 400, 500, 600));


function calculateCartPrice2(value1, value2, ...value){
    return value.reduce((total, v) => total + v, 0 )
}

// console.log(calculateCartPrice2(100, 200, 400, 500, 600));

// Handle Object ------------------------------------------------------

const obj = {
    userName: "Prasanta",
    age: 26
}

function handleObject(obj){
    return `Welcome ${obj.userName}, \nYour age is ${obj.age}`
}
console.log(handleObject(obj));


// Handle Array ------------------------------------------------------
const arr = [100, 200, 600]
function handleArr(arr){
    return `Second value of this array is ${arr[1]}`
}
console.log(handleArr(arr));


