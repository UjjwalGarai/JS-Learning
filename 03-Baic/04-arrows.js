
const user1 = {
    userName: "Tiyasa",
    email: "t@gmail.com",
    welcomeMesage: function (){
        console.log(`Hi ${this.userName}`)
        console.log(this);
    }
    // console.log(this);
    
}

// console.log(user1);
console.log(user1.welcomeMesage());

// console.log(this);

const a = 10

function addTwo(num1, num2){
    console.log(this);
    // console.log(this.a);
    console.log(num1 + num2);
    
    
}
// addTwo(4, 6)

const addNumbers = (num1, num2) => (num1 + num2);
const objReturn = () => ({name: "abcd"});

console.log(objReturn());


