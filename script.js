document.addEventListener("DOMContentLoaded", () => {
    let draggedElement = null;

    document.querySelectorAll(".image").forEach((image) => {
        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault(); // Allows dropping
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement && draggedElement !== e.target) {
                // Swap the background images
                let tempBg = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = tempBg;
            }
        });
    });
});