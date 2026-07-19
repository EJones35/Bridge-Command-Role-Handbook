const dropdown = document.querySelector(".role-dropdown");

dropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.removeAttribute("open");
    });
});

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.removeAttribute("open");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        dropdown.removeAttribute("open");
    }
});
