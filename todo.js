const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("div"); // Use uma div para conter o texto e o botão
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");

  const taskText = document.createElement("p");
  taskText.innerText = value;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "X";

  removeButton.addEventListener("click", () => {
    todoLane.removeChild(newTask);
  });

  newTask.appendChild(taskText);
  newTask.appendChild(removeButton);

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";
});
