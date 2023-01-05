const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let counter = 0;
slides.forEach(function(item, index) {
    item.style.left = `${index * 100}%`;
});


btnPrev.addEventListener('click', function() {
    counter--;
    carousel()
});

btnNext.addEventListener('click', function() {
    counter++;
    carousel();
});

function carousel() {
    if(counter < slides.length - 1 ) {
        btnNext.style.display = "block";
    } else {
        btnNext.style.display = "none";
    }
    if(counter > 0) {
        btnPrev.style.display = "block";
    } else {
        btnPrev.style.display = "none";
    }

    slides.forEach(function(slide, index) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
 
}

btnPrev.style.display = "none";