
const clock = document.querySelector('.clock')
    



setInterval(function(){
    const timeNow = new Date().toLocaleTimeString()
    clock.innerHTML = timeNow
}, 1000)