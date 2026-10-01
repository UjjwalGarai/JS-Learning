let numberString = false
let convertStringToNumber = Number(numberString)

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// false => 0 and true=> 1

// console.log(typeof convertStringToNumber)
// console.log(convertStringToNumber)

let anyValue = "12ab"
let convertAnyValuToBoolean = Boolean(anyValue)

// "abc"  => true  "" => false
// -1 => true 12 => true 0 => false
// undefined => false
// null => false


// console.log(typeof convertAnyValuToBoolean);
// console.log(convertAnyValuToBoolean);

let anyValueForString = null
let anyValueToString = String(anyValueForString)

// 12 => "12"
// false => "false" true => "true"
// null => "null"



console.log(typeof anyValueToString);
console.log(anyValueToString);

