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
