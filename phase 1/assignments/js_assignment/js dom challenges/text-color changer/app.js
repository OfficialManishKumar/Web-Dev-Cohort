/**
 * Write your challenge solution here
 */

let mainHeading = document.querySelector('#mainHeading')
let redButton = document.querySelector('#redButton')
let greenButton = document.querySelector('#greenButton')
let blueButton = document.querySelector('#blueButton')
let purpleButton = document.querySelector('#purpleButton')
let resetButton = document.querySelector('#resetButton')

function textColorChanger(button, color){
    button.addEventListener('click',function(){
        mainHeading.style = `color: ${color};`
    })
}
textColorChanger(redButton, "red")
textColorChanger(greenButton, "green")
textColorChanger(blueButton, "blue")
textColorChanger(purpleButton, "purple")
textColorChanger(resetButton, "default")