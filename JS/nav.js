document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("header-transparente");
        } else {
            header.classList.remove("header-transparente");
        }
    });
});