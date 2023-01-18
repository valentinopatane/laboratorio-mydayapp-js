import "./css/base.css";
import addTask from "./js/addTask";
import createChild from "./js/createChild";
import deleteCompleted from "./js/deleteCompleted";

//--------------------- Hide main & footer

const tasks = [];
const mainSection = document.querySelector(".main");
const footerSection = document.querySelector(".footer");

if (tasks.length != 0) {
  tasks.forEach((t) => {
    createChild(t);
  });
  countItems(tasks);
} else {
  mainSection.style.display = "none";
  footerSection.style.display = "none";
}

// -----------------

addTask({ tasks, mainSection, footerSection });
deleteCompleted(tasks);
