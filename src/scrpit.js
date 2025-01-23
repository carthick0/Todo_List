// Get references to DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

// Event listener for form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    addTask(task);
    saveTask(task);
    todoInput.value = ""; // Clear the input
  }
});

// Add task to the DOM
function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTask(task, li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// Save task to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task));
}

// Delete task from localStorage and DOM
function deleteTask(task, li) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  todoList.removeChild(li);
}
