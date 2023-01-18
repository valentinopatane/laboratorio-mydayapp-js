import { findIndex, isSent } from "./utils";

class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("mydayapp-js")) || [];
    this.count = this.tasks.length;
  }
  checkTasks() {
    const mainSection = document.querySelector(".main");
    const footerSection = document.querySelector(".footer");
    if (this.tasks.length == 0) {
      mainSection.style.display = "none";
      footerSection.style.display = "none";
      return false;
    } else {
      mainSection.style.display = "block";
      footerSection.style.display = "block";
      return true;
    }
  }
  getCount() {
    const counter = document.querySelector(".todo-count");
    let pending = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.completed == false) pending++;
    }
    counter.innerHTML = `<strong>${pending}</strong> ${
      pending == 1 ? "item" : "items"
    } left`;
  }
  checkBoxes() {
    const checkboxes = document.querySelectorAll(".toggle");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        this.completeTask(e.target.id);
      });
    });
  }
  labels() {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.addEventListener("dblclick", (e) => {
        this.editTask(e.target.id);
      });
    });
  }
  getTasks() {
    const checkTasks = this.checkTasks();
    if (checkTasks) this.getCount();

    const ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
    this.tasks.map((task) => {
      let li = document.createElement("li");

      li.innerHTML = `
                  <li class="${task.completed ? "completed" : null}">
                      <div class="view" id="${task.id}">
                          <input class="toggle" type="checkbox" id="${
                            task.id
                          }" ${task.completed ? "checked" : ""}/>
                          <label class ="label" id="${task.id}">${
        task.title
      }</label>
                          <button class="destroy" id="${task.id}"></button>
                      </div>
                      <input class="edit" value="${task.title}" id="${
        task.id
      }" />
                  </li>`;

      ul.appendChild(li);
    });

    this.checkBoxes();
    this.labels();

    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
    localStorage.setItem("mydayapp-js", JSON.stringify(this.tasks));
    this.getTasks();
  }
  completeTask(taskId) {
    const taskCompleted = this.tasks.find((t) => t.id == taskId);
    taskCompleted.completed = !taskCompleted.completed;

    const elemPosition = findIndex(this.tasks, taskId);

    this.tasks[elemPosition] = taskCompleted;

    localStorage.setItem("mydayapp-js", JSON.stringify(this.tasks));
    this.getTasks();
  }
  deleteCompleted() {
    const notCompleted = this.tasks.filter((t) => t.completed == false);
    this.tasks = notCompleted;
    this.getTasks();
    localStorage.setItem("mydayapp-js", JSON.stringify(this.tasks));
  }
  editTask(idTask) {
    const editInputs = document.querySelectorAll(".edit");
    const views = document.querySelectorAll(".view");
    editInputs.forEach((input) => {
      if (input.id == idTask) {
        input.style.display = "block";
        views.forEach((view) => {
          if (view.id == input.id) {
            view.style.display = "none";
            input.focus();
            input.setSelectionRange(-1, -1);
            input.addEventListener("keyup", (e) => {
              if (isSent(e)) {
                const task = this.tasks.find((t) => t.id == idTask);
                task.title = e.target.value.trim();

                const index = findIndex(this.tasks, idTask);
                this.tasks[index] = task;

                localStorage.setItem("mydayapp-js", JSON.stringify(this.tasks));

                view.style.display = "block";
                input.style.display = "none";

                this.getTasks();
              }
              if (e.key == "Escape" || e.keyCode == "27") {
                view.style.display = "block";
                input.style.display = "none";
              }
            });
          }
        });
      }
    });
  }
}
export default Tasks;
