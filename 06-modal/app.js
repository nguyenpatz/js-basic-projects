const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const modalContainer = document.querySelector(".modal-overlay");
const activeModal = "show-modal";
openBtn.addEventListener("click", ()=> {
    modalContainer.classList.add(activeModal);
});
closeBtn.addEventListener("click", ()=> {
    modalContainer.classList.remove(activeModal);
});