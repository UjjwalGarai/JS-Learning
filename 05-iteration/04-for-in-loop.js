

const arr = [1, 4, 6, 8]

for (const key in arr) {
    // console.log(arr[key]);
}

const obj = {
    "Name": "Ujjwal",
    age: 24
}

for (const key in obj) {
    // console.log(obj[key]);   
}

const map = new Map()
map.set("name", "Tiyasa")
map.set(new Date(2025, 5, 1), "Birthday")
// ---------- For Map object forin loop not work
for (const key in map) {
    // console.log(key);  
}

const str = "Hello World!"
for (const key in str) {
    console.log(str[key]);  
}

