const taskList = document.getElementById("task-list");
const queryArea = document.getElementById("query-area");
const addBtn = document.getElementById("add-btn");

let editTarget = null;

function addTaskInList() {
    let value = queryArea.value;


    // ✅ If edit is in progress
    if (editTarget) {
        editTarget.value = value;
        queryArea.value = "";
        addBtn.value = "Add";
        editTarget = null;
        return;
    }

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
        console.log(event);

        // Logic for deleting the todo
        if (event.target.id === "delete-btn") {
            event.target.parentElement.remove();
        }


        // Logic for marking complete and incomplete
        else if (event.target.classList.contains("checkbox")) {
            const textInput = event.target.nextElementSibling;
            if (event.target.checked === true) {
                textInput.style.color = "green";
                textInput.style.textDecoration = "line-through";
            }

            else {
                textInput.style.color = "black";
                textInput.style.textDecoration = "none";
            }

        }



        // logic for edit the todo
        else if (event.target.id === "edit-btn") {
            const inputBox = event.target.previousElementSibling;
            queryArea.value = inputBox.value;
            queryArea.focus();
            addBtn.value = "Update";
            editTarget = inputBox;

        }





    })


}

addBtn.addEventListener("click", addTaskInList)
