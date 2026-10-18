

const parent = document.querySelector('.parent-box')
const bodyElement = document.querySelector('body')
parent.addEventListener('click', function(e){
    const targetDivId = e.target.id
    bodyElement.style.backgroundColor = targetDivId
})