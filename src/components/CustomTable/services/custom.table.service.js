export const isModal = (e) => {
  if (e.target.classList[0] === "modal-body") return true;
  if (e.target.parentElement.classList[0] === "modal-body") return true;
  if (e.target.parentElement.parentElement.classList[0] === "modal-body") return true;
  return false;
};

export const isButton = (e) => {
  return e.target.type === "button";
};
