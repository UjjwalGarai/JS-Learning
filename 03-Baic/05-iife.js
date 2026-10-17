

let a = 10

console.log(`before iife a value is ${a}`);

console.log('DB connection 1');

(function dbConnection(num){
    a = 100
    console.log(`'DB Connected' ${num}`);
})(1);

console.log(`after iife a value is ${a}`);
console.log('DB connection 2');

((num) => {console.log(`DB Connected ${num}`);
})(2);

console.log('DB connection completed');


// --real example
const gameCounter = (function() {
    // This variable is completely PRIVATE. 
    // Code outside this IIFE cannot access or break it directly.
    let score = 0; 

    return {
        increment: function() {
            score++;
            console.log(`Current Score: ${score}`);
        },
        loseLife: function() {
            score--;
            console.log(`Current Score: ${score}`);
        },
        getScore: function() {
            return score;
        }
    };
})();

// How you use it:
gameCounter.increment(); // Current Score: 1
gameCounter.increment(); // Current Score: 2

// But you cannot touch the score directly!
// console.log(gameCounter.score); // Output: undefined