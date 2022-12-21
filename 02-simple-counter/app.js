const mainDisplay = document.querySelector(".main-display");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

let valueRemember = parseInt(mainDisplay.textContent);

btnIncrease.addEventListener("click", function() {
    valueRemember++;
    mainDisplay.textContent = valueRemember;
    mainDisplay.style.color = "green";
});

btnDecrease.addEventListener("click", function() {
    valueRemember--;
    mainDisplay.textContent = valueRemember;
    mainDisplay.style.color = "red";

});

btnReset.addEventListener("click", function() {
    valueRemember = 0;
    mainDisplay.textContent = valueRemember;
    mainDisplay.style.color = "#000";
});