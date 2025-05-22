/**
 * Write your challenge solution here
 */

let bulb = document.querySelector('.bulb')
let Button = document.querySelector('#toggleButton')
let Status = document.querySelector('#status')

Button.addEventListener('click',function(){
    if (Status.innerText == "Status: Off"){
        bulb.style = "background-color: #f1c40f;"
        document.body.style = "background-color:rgba(241, 196, 15, 0.4);"
        Status.innerText = "Status: On"
        Button.innerText = "Turn Off"
    }
    else if (Status.innerText = "Status: On"){
        bulb.style = "background-color: #95a5a6;"
        document.body.style = " background-color: #f5f5f5"
        Status.innerText = "Status: Off"
        Button.innerText = "Turn On"
    }
})