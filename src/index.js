import "./css/base.css";
import addTask from "./js/addTask";
import countItems from "./js/countItems";
import createChild from "./js/createChild";
import deleteCompleted from "./js/deleteCompleted";

//--------------------- Hide main & footer

const tasks = JSON.parse(localStorage.getItem("mydayapp-js")) || [];
const mainSection = document.querySelector(".main");
const footerSection = document.querySelector(".footer");
console.log(JSON.stringify(tasks));
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
