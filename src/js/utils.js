export const isSent = (e) => {
  return e.key === "Enter" || e.keyCode === "13" ? true : false;
};

// -----------------

export const findIndex = (array, id) => {
  return array.map((e) => e.id).indexOf(Number(id));
};

// -----------------

export const drawList = (tasks) => {
  const ul = document.querySelector(".todo-list");
  ul.innerHTML = "";
  tasks.map((task) => {
    let li = document.createElement("li");

    li.innerHTML = `
                <li class="${task.completed ? "completed" : null}">
                    <div class="view" id="${task.id}">
                        <input class="toggle" type="checkbox" id="${task.id}" ${
      task.completed ? "checked" : ""
    }/>
                        <label class ="label" id="${task.id}">${
      task.title
    }</label>
                        <button class="destroy" id="${task.id}"></button>
                    </div>
                    <input class="edit" value="${task.title}" id="${task.id}" />
                </li>`;

    ul.appendChild(li);
  });
};
