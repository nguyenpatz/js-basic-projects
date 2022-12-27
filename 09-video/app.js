const preloader = document.querySelector(".preloader");
const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
const showPreloader = "show";
const slideBtn = "slide";

switchBtn.addEventListener("click", function() {
    if(!switchBtn.classList.contains(slideBtn)) {
        switchBtn.classList.add(slideBtn);
        videoContainer.pause();
    } else {
        switchBtn.classList.remove(slideBtn);
        videoContainer.play();
    }
});

window.addEventListener("load",function() {
    preloader.classList.add(showPreloader);
});