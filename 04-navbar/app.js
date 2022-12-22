const btnMenu = document.querySelector(".btn-menu");
const links = document.querySelector(".links");

btnMenu.addEventListener("click", function() {
    links.classList.toggle("show-links");
});