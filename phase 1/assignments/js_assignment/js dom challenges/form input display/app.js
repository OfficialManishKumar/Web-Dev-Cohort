/**
 * Write your challenge solution here
 */
let nameInput = document.querySelector('#nameInput')
let jobInput = document.querySelector('#jobInput')
let ageInput = document.querySelector('#ageInput')
let bioInput = document.querySelector('#bioInput')

let nameDisplay = document.querySelector('#nameDisplay')
let jobDisplay = document.querySelector('#jobDisplay')
let ageDisplay = document.querySelector('#ageDisplay')
let bioDisplay = document.querySelector('#bioDisplay')

function liveUpdater (source, display){
    source.addEventListener('input',function(){
        display.innerHTML = source.value
    })
}
liveUpdater(nameInput, nameDisplay)
liveUpdater(jobInput, jobDisplay)
liveUpdater(ageInput, ageDisplay)
liveUpdater(bioInput, bioDisplay)