const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete");

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });
}