let textInput = document.getElementById('textInput')
let createBtn = document.getElementById('createBtn')
let selectedColors = document.getElementById('selectedColors')

function createElement(){
    let btnElement = document.createElement('button');
    let color = textInput.value;
    btnElement.innerText = `Change background color to: ${color}`;
    btnElement.style.backgroundColor = color;
    btnElement.addEventListener('click', function() {
        document.body.style.backgroundColor = color;
    });
    selectedColors.appendChild(btnElement);
}
createBtn.addEventListener('click',function(){
    if (textInput.value == null || textInput.value == undefined || textInput.value == ""){
        alert("Please Enter the hex code of color First.")
    }
    else{
        createElement()
    }
})