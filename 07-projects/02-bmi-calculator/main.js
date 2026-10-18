

const subBtn = document.querySelector('input[type="button"]')
const resultValue = document.querySelector('#resultValue')
const resultMessage = document.querySelector('#resultMessage')

subBtn.addEventListener('click', function(e){
    e.preventDefault()
    // console.log(e)
    const height = heightValidation(document.querySelector('#height').value)
    const weight = weightValidation(document.querySelector('#weight').value) 
    
    if(!height || !weight) return

    const bmiScore = ((weight / (height * height)) * 10000).toFixed(2)
    let message = ''
    if(bmiScore < 18.5){
        message =  `You are Underweight`
    } else if(bmiScore >= 18.5 && bmiScore < 25){
        message =  `You are Normal weight`
    } else if(bmiScore >= 25 && bmiScore < 30){
        message =  `Overweight`
    }else if(bmiScore >= 30 && bmiScore < 35){
        message =  `You are Obesity `
    } else if (bmiScore >= 35) {
        message =  `You are Severe obesity`
    }

    // console.log(Boolean(bmiScore))
    // console.log(bmiScore)
    if (!isNaN(bmiScore)){
        resultValue.innerHTML = `<h4><b>${bmiScore}</b></h4>`
    }else{
        resultValue.innerHTML = ''
    }
    resultMessage.innerHTML = `<p>${message}</p>`
    document.querySelector('#height').value = ''
    document.querySelector('#weight').value = ''
    
})


function heightValidation(height){
    const heightInt = parseFloat(height)
    if(heightInt < 50 || heightInt > 200 || isNaN(heightInt)){
        alert('Please enter a valid height')
        return
    }else {
        return heightInt
    }
}

function weightValidation(weight){
    const weightInt = parseFloat(weight)
    if(weightInt < 0 || weightInt > 200 || isNaN(weightInt)){
        alert('Please enter a valid weight')
        return
    }else {
        return weightInt
    }
}


