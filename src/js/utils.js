export const isSent = (e) => {
  return e.key === "Enter" || e.keyCode === "13" ? true : false;
};
export const findIndex = (array, id) => {
  return array.map((e) => e.id).indexOf(Number(id));
};
