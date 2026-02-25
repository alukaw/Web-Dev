function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Add new task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.classList.add("task-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.type = "button";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
}