const buttons = document.querySelectorAll(".btn");
const subsection = document.querySelector(".subsection");
buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const id = e.currentTarget.dataset.id;
        const elements = subsection.querySelectorAll(`.content`);
        elements.forEach(function(item){
            if(item.id === id) {
                item.classList.remove("disable");
            }
            else {
                item.classList.add('disable');
            }
        });

    });
});