const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });

    panel.addEventListener("mouseenter", () => {
        if (!panel.classList.contains("active")) {
            panel.classList.add("hovered");
        }
    });

    panel.addEventListener("mouseleave", () => {
        if (!panel.classList.contains("active")) {
            panel.classList.remove("hovered");
        }
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
        panel.classList.remove("hovered");
    });
};
