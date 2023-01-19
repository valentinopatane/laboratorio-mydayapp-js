import "./css/base.css";
import Tasks from "./js/Tasks";
import { isSent } from "./js/utils";

const TasksService = new Tasks();

// ----------------- Get Tasks

TasksService.getTasks();

// ----------------- Add Task

const inputTask = document.querySelector(".new-todo");

inputTask.autofocus;

inputTask.addEventListener("keyup", (e) => {
  const newTask = {
    id: Date.now(),
    title: e.target.value.trim(),
    completed: false,
  };

  const enterPressed = isSent(e);
  if (enterPressed && e.target.value != "") {
    TasksService.addTask(newTask);
    e.target.value = "";
  }
});

// ----------------- Delete completed tasks

const deleteButton = document.querySelector(".clear-completed");

deleteButton.addEventListener("click", () => {
  TasksService.deleteCompleted();
});

// ----------------- Filters

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  if (location.hash.slice(2) == filter.text.toLowerCase()) {
    filter.classList.add("selected");
  } else if (location.hash == "#/" || location.hash == "") {
    filters[0].classList.add("selected");
  }

  filter.addEventListener("click", (e) => {
    filters.forEach((f) => f.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});

window.addEventListener("hashchange", () => {
  TasksService.getTasks();
});

// ----------------- Delete Button
