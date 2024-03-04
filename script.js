const inputTag = document.querySelector("#taskInput")
const addButton = document.querySelector("#myButton")
let allTaskList=[]
let completedTaskList = []
inputTag.addEventListener("input", (event)=>{
    addTasks(event.target.value)
})
addButton.addEventListener("click",(event)=>{
    newTasks(inputTag.value)
    inputTag.value =""
})

function addTasks(eventInfo) {
    addButton.style.display = "block"
    if(inputTag.value<=0){
        addButton.style.display = "none"
    }
    
}
const unOrderedList = document.getElementById("tasksList");

unOrderedList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("deleteButton")) {
        deleteItem(event);
    }
});

function newTasks(taskName) {
    if (taskName === ""){
        alert("please name your task")
    }
    else{
    const liElement = document.createElement("li");
    const buttonElement = document.createElement("button");
    liElement.classList.add("listElement");
    liElement.textContent = taskName;
    buttonElement.classList.add("deleteButton");
    liElement.appendChild(buttonElement);
    unOrderedList.appendChild(liElement);
    allTaskList.push(taskName);
    updateTheTasks()

}
}

function deleteItem(event) {
    const listItem = event.target.closest("li");
    if (listItem) {
        completedTaskList.push(listItem.textContent)
        listItem.remove();
    }
    updateTheTasks()
}



///// Complete all task implementations
const completeAllTaskButton = document.querySelector("#completeAll")
completeAllTaskButton.addEventListener("click", completeAlltask)
function completeAlltask(){
    if (unOrderedList.children.length>0){  
        let child = unOrderedList.lastElementChild;
        console.log(child)
        while (child) {
            unOrderedList.removeChild(child);
            child = unOrderedList.lastElementChild;
        }
}
updateTheTasks()

}

const numberOfTask = document.querySelector("#numberOfTasks");

function updateTheTasks() {
    let activeTasks = 0;

    // Iterate over list items and count active tasks
    for (const listItem of unOrderedList.children) {
        if (!listItem.classList.contains("completed")) {
            activeTasks++;
        }
    }

    numberOfTask.innerHTML = `${activeTasks} are Tasks left `;
}

const allTasksButton =document.getElementById("allSpan")
allTasksButton.addEventListener("click",()=>{showTasks(allTaskList)})

function showTasks(tasksList) {
    completeAlltask()
    tasksList.forEach((task) => {
        newTasks(task)
    })
}

const completeTasksButton = document.getElementById("completedSpan")
completeTasksButton.addEventListener("click", ()=>{showTasks(completedTaskList)})


