
const newDate1 = new Date()
const newDate2 = Date.now()

// console.log(newDate1, newDate2)
// console.log(typeof newDate1, typeof newDate2)
// console.log(newDate1)
// console.log(newDate1.getTime())
// console.log(typeof newDate1.getTime())
// console.log(typeof newDate1.toJSON())
// console.log(newDate1.toJSON())
// console.log(newDate1.toTimeString())
// console.log(newDate1.toLocaleDateString())
// console.log(newDate1.getFullYear())
// console.log(newDate1.getHours())


const defineDate1 = new Date(2020, 2, 40)
console.log(defineDate1);

const defineDate2 = new Date("2020-01-25")
console.log(defineDate2);

const y = defineDate2.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
})
console.log(y);





