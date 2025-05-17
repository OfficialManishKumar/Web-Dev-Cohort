let clockContainer = document.getElementsByClassName('clock-container')
let timeElement = document.getElementById('time')
let dateElement = document.getElementById('date')

function updateTime(){
    let time = new Date()       // getting time
    time = {
        "hours": `${time.getHours()%12 || 12}`,
        "minutes": `${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`,
        "seconds": `${time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}`,
        "suntime": `${time.getHours() >= 12 ? "Pm" : "AM"}`,
    }
    timeElement.textContent = `${time.hours}:${time.minutes}:${time.seconds} ${time.suntime}`

    // Date part
    time = new Date()
    dateElement.textContent = time.toDateString()
}


setInterval(() => updateTime(),1000)
// Starting function in running of code or we can also use IIFI
updateTime()