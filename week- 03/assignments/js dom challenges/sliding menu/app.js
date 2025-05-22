/**
 * Write your challenge solution here
 */
let openMenu = document.querySelector('.toggle-btn')
let panel = document.querySelector('.panel')
let closeButton = document.querySelector('.close-btn')
let menuItem = document.querySelectorAll('.menu-item')

openMenu.addEventListener('click',function(){
    panel.style["right"] = '0px'

    document.addEventListener('click', function(event){
        // If click is outside panel and menu is open
        if(!panel.contains(event.target) && !openMenu.contains(event.target) && panel.style["right"] === "0px"){
            panel.style["right"] = '-360px'
        }
    })

    closeButton.addEventListener('click',function(){
        panel.style["right"] = '-360px'
    })
})

menuItem.forEach(Element=>{
    Element.addEventListener('click',function(){
        alert(`You had clicked over the Element named "${Element.innerText}"`);
        panel.style["right"] = '-360px'
    })
})
