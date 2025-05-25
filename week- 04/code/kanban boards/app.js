let taskState = {
    "toDo":[],
    "preogress":[],
    "completed":[],
}

// Giving box to add Tasks
const addTask = document.getElementById('addTask')
const taskCreatorBG = document.getElementById('taskCreatorBG')
const taskCreator = document.getElementById('taskCreator')
const toDoTasks = document.getElementById('toDoTasks')
addTask.addEventListener('click',function(){
    taskCreatorBG.style['z-index'] = '1';
    taskCreatorBG.addEventListener('click',function(event){
        if(taskCreator.contains(event.target)){}
        else{taskCreatorBG.style['z-index'] = '-1'}
    })
})


// Adding tasks in the box
const addingTask = document.getElementById('addingTask')
addingTask.addEventListener('click',function(){
    let task = document.createElement('p');
    const taskInput = document.querySelector('#taskCreator>input[type="text"]')
    task.innerText = taskInput.value
    task.setAttribute('class','tasks')
    task.setAttribute('draggable','true')
    const colorofTask = document.querySelector('input[name="color"]:checked')
    task.style['border'] = `3px dashed  ${colorofTask.value}`
    
    // Delete Button
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "🗑️"
    deleteBtn.addEventListener('click',function(){task.remove()})
    deleteBtn.style['margin'] = "0px 0px 0px 30px"
    deleteBtn.classList.add('deleteTask')

    task.appendChild(deleteBtn)
    toDoTasks.appendChild(task)
    taskInput.value = ""
    taskCreatorBG.style['z-index'] = '-1'
    dragTasks(task)
})
const tasks = document.getElementsByClassName('tasks')

// Adding dragging in tasks
function dragTasks(task){
    task.addEventListener('dragstart',function(){
        task.classList.add('flying')
    })
    task.addEventListener('dragend',function(){
        task.classList.remove('flying');
        for(let box of boxes){
            box.children[5].classList.remove('drag-over');
        }
    })
}

// adding tasks in box
const boxes = document.getElementsByClassName('box')
for(let box of boxes){
    box = box.children[5]
        // Add highlight when dragging over
    box.addEventListener('dragenter', function(){
        box.classList.add('drag-over');
    })
    
    // Remove highlight when leaving
    box.addEventListener('dragleave', function(){
        box.classList.remove('drag-over');
    })
    // When the task is hovering over a box
    box.addEventListener('dragover',(e)=>{
        let flyingElement = document.querySelector('.flying')
        box.appendChild(flyingElement)
        e.preventDefault()
    })
}

// Task Sorter
const sortTasks = document.getElementsByClassName('sortTasks')
for(let sortBtn of sortTasks) {
    sortBtn.addEventListener('click', function() {
        // Get the parent box's tasks container
        const tasksContainer = sortBtn.parentElement;
        const tasks = Array.from(tasksContainer.getElementsByClassName('tasks'));
        
        // Sort tasks by text content
        tasks.sort((a, b) => {
            // Get text content without the delete button text
            const textA = a.innerText.replace('🗑️', '').trim().toLowerCase();
            const textB = b.innerText.replace('🗑️', '').trim().toLowerCase();
            return textA.localeCompare(textB);
        });
        
        // Remove existing tasks
        tasks.forEach(task => task.remove());
        
        // Add sorted tasks back
        tasks.forEach(task => tasksContainer.appendChild(task));
    });
}