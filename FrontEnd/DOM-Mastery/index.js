const taskList = document.getElementById("task-list");
const queryArea = document.getElementById("query-area");
const addBtn = document.getElementById("add-btn");

function addTaskInList() {
    let value = queryArea.value;
    const list = document.createElement("li");
    list.classList.add("todo-list")
    list.innerHTML = `
      <input type="checkbox" class="checkbox">
                    <input type="text" name="" class="list" value="${value}">
                    <input type="button" id="edit-btn"  value="Edit">
                    <input type="button" id="delete-btn" value="Delete">
    `;
    if (value) {
        taskList.appendChild(list);
        queryArea.value = null;
    }

    else {
        window.alert("Please enter your query");
    }



    list.addEventListener("click", function (event) {
        if (event.target.id == "delete-btn") {
            event.target.parentElement.remove();
        }
        console.log(event);
        


    })


}

addBtn.addEventListener("click", addTaskInList)
