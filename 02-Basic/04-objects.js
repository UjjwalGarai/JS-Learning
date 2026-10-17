
// Concat object, Nested Object , extarct object key and values as array, Destrucring

const trinderUser = {
    name: "Ram",
    email: "ram@gmail.com",
    age: 56,
    isLoggedIn: false
}
const fbUser = {
    1: "a",
    2: "b"
}
// Concat ------------------------------------
// console.log(trinderUser);
const obj3 = {trinderUser, fbUser}
const obj4 = Object.assign({}, trinderUser, fbUser) // Alays use {} first otherwise first become as target
const obj5 = {...trinderUser, ...fbUser }
// console.log(obj3);
// console.log(trinderUser);
// console.log(obj5);

// Nested object -----------------
const userInfo = {
    name: "Tiyasa",
    address: {
        dist: "Bankura",
        block: "Raipur",
        fullName: {
            firstName: "Tiyasa",
            lastName: "Garai"
        }
    }
}

// console.log(userInfo.address.fullName.lastName);




const objKeys = Object.keys(trinderUser)
const objValues = Object.values(trinderUser)
const objEntries = Object.entries(trinderUser)
// console.log(trinderUser.hasOwnProperty("name2"));


// console.log(objEntries);

// for (const [key, values] of Object.entries(trinderUser)){
//     console.log(`${key} and ${values}`);
    
// }

// Object Destructuring
const macUser = {
    name: "Ram",
    email: "ram@gmail.com",
    age: 56,
    isLoggedIn: false
}
const {name:fname, age} = macUser

console.log(fname, typeof age);
console.log(macUser);

