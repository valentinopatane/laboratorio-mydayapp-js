import createChild from "./createChild";

const deleteCompleted = (tasks) => {
  const deleteButton = document.querySelector(".clear-completed");

  deleteButton.addEventListener("click", (e) => {
    const notCompleted = tasks.filter((t) => t.completed == false);
    const ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
    notCompleted.forEach((t) => {
      createChild(t);
    });
    tasks.splice(0, tasks.length, ...notCompleted);
  });
};
export default deleteCompleted;
