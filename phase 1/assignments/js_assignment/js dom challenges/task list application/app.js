/**
 * Write your challenge solution here
 */

let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');
let totalTasksNum = document.getElementById('totalTasksNum');
let completedTasksNum = document.getElementById('completedTasksNum');

let completedTasks = 0;

document.addEventListener('click',function(){
    let totalTasks = document.querySelector('#taskList').children.length;
    totalTasksNum.innerText = totalTasks;
    completedTasksNum.innerText = completedTasks;
})

addButton.addEventListener('click',function(){
    // For List Items
    let Li = document.createElement('li')
    Li.innerHTML = taskInput.value
    taskList.appendChild(Li)
    taskInput.value = ""

    // For "Complete Button"
    let Button = document.createElement('button')
    Button.innerHTML= "Completed"
    Li.appendChild(Button)
    Button.addEventListener('click',function(){
        Li.remove()
        completedTasks += 1
    })

    // For "Complete Button"
    let delButton = document.createElement('button')
    delButton.innerHTML= "delete"
    Li.appendChild(delButton)
    delButton.addEventListener('click',function(){
        Li.remove()
    })

    if (document.body.contains(document.querySelector('.empty-list'))){document.querySelector('.empty-list').remove()}
})
    console.log(completedTasks)