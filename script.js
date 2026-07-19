const dropdown = document.querySelector(".role-dropdown");
const summary = dropdown.querySelector("summary");

function closeDropdown() {
    if (!dropdown.hasAttribute("open")) return;
    dropdown.removeAttribute("open");
    summary.focus();
}

dropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeDropdown);
});

document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        closeDropdown();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeDropdown();
    }
});
