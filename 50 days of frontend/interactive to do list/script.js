const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasksContainer = document.querySelector(".tasks");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") return;

  const task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = `
        <span class="task-text">${text}</span>

        <div class="buttons">
            <button class="complete">✔</button>
            <button class="edit">✏</button>
            <button class="delete">🗑</button>
        </div>
    `;

  tasksContainer.prepend(task);

  taskInput.value = "";

  addDelete(task);
  addComplete(task);
  addEdit(task);
}

function addDelete(task) {
  const deleteBtn = task.querySelector(".delete");

  deleteBtn.addEventListener("click", () => {
    task.remove();

    updateStats();
  });
}

function addComplete(task) {
  const completeBtn = task.querySelector(".complete");

  completeBtn.addEventListener("click", () => {
    task.classList.toggle("completed");

    updateStats();
  });
}

function addEdit(task) {
  const editBtn = task.querySelector(".edit");

  const taskText = task.querySelector(".task-text");

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskText.textContent);

    if (newText !== null && newText.trim() !== "") {
      taskText.textContent = newText;
    }
  });
}

function updateStats() {
  const total = document.querySelectorAll(".task").length;

  const completed = document.querySelectorAll(".completed").length;

  document.getElementById("total").textContent = total;

  document.getElementById("completed").textContent = completed;
}

updateStats();

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");

allBtn.addEventListener("click", () => {
  document.querySelectorAll(".task").forEach((task) => {
    task.style.display = "flex";
  });
});

activeBtn.addEventListener("click", () => {
  document.querySelectorAll(".task").forEach((task) => {
    if (task.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
});

completedBtn.addEventListener("click", () => {
  document.querySelectorAll(".task").forEach((task) => {
    if (task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});
