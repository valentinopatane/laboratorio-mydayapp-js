import countItems from "./countItems";
import createChild from "./createChild";
import { isSent } from "./utils";

const addTask = ({ tasks, mainSection, footerSection }) => {
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
      tasks.push(newTask);

      if (mainSection.style.display == "none") {
        mainSection.style.display = "block";
        footerSection.style.display = "block";
      }

      createChild(newTask, tasks);
      countItems(tasks);
      e.target.value = "";
    }
  });
};
export default addTask;
