import countItems from "./countItems";
import editTask from "./editTask";
import { getElement } from "./utils";

const createChild = (t) => {
  const ul = document.querySelector(".todo-list");
  let li = document.createElement("li");

  li.innerHTML = `
            <li>
                <div class="view" id="${t.id}">
                    <input class="toggle" type="checkbox" id="${t.id}"/>
                    <label class ="label" id="${t.id}">${t.title}</label>
                    <button class="destroy" id="${t.id}"></button>
                </div>
                <input class="edit" value="${t.title}" id="${t.id}" />
            </li>`;

  ul.appendChild(li);

  const checkbox = getElement("toggle", t.id);
  const label = getElement("label", t.id);

  checkbox.addEventListener("click", () => {
    t.completed = !t.completed;
    if (t.completed) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  label.addEventListener("dblclick", () => {
    editTask(t, label);
  });
};
export default createChild;
