document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedItem = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      draggedItem = e.target;
      e.target.style.opacity = "0.5";
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedItem !== e.target) {
        // Swap content
        let temp = draggedItem.innerHTML;
        draggedItem.innerHTML = e.target.innerHTML;
        e.target.innerHTML = temp;
      }
      draggedItem.style.opacity = "1";
      draggedItem = null;
    });

    image.addEventListener("dragend", (e) => {
      e.target.style.opacity = "1";
    });
  });
});
