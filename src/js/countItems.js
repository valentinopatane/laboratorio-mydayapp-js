const countItems = (tasks) => {
  const counter = document.querySelector(".todo-count");
  let pending = 0;
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task.completed == false) pending++;
  }
  counter.innerHTML = `<strong>${pending}</strong> ${
    pending == 1 ? "item" : "items"
  } left`;
};

export default countItems;
