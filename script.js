document.addEventListener("DOMContentLoaded", () => {
    let draggedElement = null;

    document.querySelectorAll(".image").forEach((image) => {
        // Store the dragged element
        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
        });

        // Allow elements to be dropped
        image.addEventListener("dragover", (e) => {
            e.preventDefault(); // Necessary to allow dropping
        });

        // Swap images when dropped
        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement && draggedElement !== e.target) {
                // Swap background images
                let tempBg = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = tempBg;
            }
        });
    });
});
