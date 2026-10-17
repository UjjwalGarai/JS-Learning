
const coding = ["JavaScript", "SQL", "Python"]

coding.forEach( function printArrayItem(item){
    // console.log(item);  
})

coding.forEach( function (item){
    // console.log(item);  
})

coding.forEach(element => {
//    console.log(element) 
});
coding.forEach(printItem)

function printItem(item){
    // console.log(item);
}

coding.forEach((item, index, arr) => {
    // console.log(`Item ${item} Index ${index} array ${arr}`);  
})

const languages =[
    {
        name: "JavaScript",
        type: "JS"
    },
    {
        name: "Python",
        type: "PY"
    },
    {
        name: "PostGres",
        type: "SQL"
    },
]

languages.forEach((item) => {
    console.log(item.name);
    
})