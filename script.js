
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.target.classList.add("selected");
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        let temp = e.target.innerHTML;
        e.target.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = temp;
      }
    });

    image.addEventListener("dragend", () => {
      draggedElement.classList.remove("selected");
      draggedElement = null;
    });
  });
});
