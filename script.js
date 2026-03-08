class Task{
    constructor(description){
        this.description = description
        this.completed = false
    }
}

let tasks = []

const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("taskList")

addBtn.addEventListener("click", addTask)

function addTask(){

    const description = input.value.trim()

    if(description === "") return

    const task = new Task(description)

    tasks.push(task)

    input.value = ""

    renderTasks()
}

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed

    renderTasks()
}

function deleteTask(index){

    tasks.splice(index,1)

    renderTasks()
}

function renderTasks(){

    list.innerHTML = ""

    tasks.forEach((task,index)=>{

        list.innerHTML += `
        <li class="${task.completed ? "completed" : ""}">
        
        <span onclick="toggleTask(${index})">
        ${task.description}
        </span>

        <button class="delete-btn" onclick="deleteTask(${index})">
        Delete
        </button>

        </li>
        `
    })
}