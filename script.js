const dropdown = document.querySelector(".role-dropdown");

dropdown.addEventListener("change", function () {
    if (!this.value) return;

    document.getElementById(this.value).scrollIntoView({
        behavior: "smooth"
    });

    this.selectedIndex = 0;
});
