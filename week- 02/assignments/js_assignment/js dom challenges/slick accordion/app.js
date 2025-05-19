/**
 * Write your challenge solution here
 */

let accordionitem = document.querySelector('.accordion-item')

accordionitem.addEventListener('click',function(){
    accordionitem.appendChild(document.querySelector('.accordion-item > div#accordion-content'))
})


