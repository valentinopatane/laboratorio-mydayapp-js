import { getElement, isCanceled, isSent } from "./utils";

const editTask = (t, label) => {
  const editInput = getElement("edit", t.id);
  const view = getElement("view", t.id);
  view.style.display = "none";
  editInput.style.display = "block";
  editInput.focus();
  editInput.addEventListener("keyup", (e) => {
    const isSaved = isSent(e);
    const isOut = isCanceled(e);
    if (isOut) {
      view.style.display = "block";
      editInput.style.display = "none";
    }
    if (isSaved) {
      t.title = e.target.value.trim();
      label.textContent = t.title;
      view.style.display = "block";
      editInput.style.display = "none";
    }
  });
};

export default editTask;
