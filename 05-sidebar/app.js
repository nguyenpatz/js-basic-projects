const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mySidebar = document.querySelector(".sidebar");
const showSidebar = "show-sidebar";
const closeSidebar = "close-sidebar"
btnMenu.addEventListener("click", function () {
    mySidebar.classList.toggle(showSidebar);
});

btnClose.addEventListener("click", function () {
    mySidebar.classList.remove(showSidebar);
});