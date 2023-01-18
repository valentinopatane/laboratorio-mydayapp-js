export function isSent(e) {
  return e.key === "Enter" || e.keyCode === 13 ? true : false;
}
export function isCanceled(e) {
  return e.key === "Escape" || e.keyCode === 27 ? true : false;
}
export function getElement(className, id) {
  const HTMLColecction = document.getElementsByClassName(className);
  return HTMLColecction[id];
}
