/**
 * Write your challenge solution here
 */

let accordion = document.querySelector('.accordion')

for (let i = 0; i < accordion.childElementCount; i++){
    accordion.children[i].children[1].style['max-height'] = "0px";
    accordion.children[i].children[0].addEventListener('click',function(){
        if(accordion.children[i].children[1].style['max-height'] == "0px"){
            accordion.children[i].children[1].style['max-height'] = "max-content";
        }
        else{
            accordion.children[i].children[1].style['max-height'] = "0px";
        }
    })

}
