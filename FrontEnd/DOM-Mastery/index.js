const taskList=document.getElementById("task-list");
const queryArea=document.getElementById("query-area");
const addBtn=document.getElementById("add-btn");

function addTaskInList(){
    const list=document.createElement("li");
    list.classList.add("todo-list")
    const editBtn=document.createElement("button");
    const deleteBtn=document.createElement("button");



}

addBtn.addEventListener("click",addTaskInList)
