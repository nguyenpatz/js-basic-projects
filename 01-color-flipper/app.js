const colors = [
    "green",
    "red",
    "rgba(133,122,200)",
    "#f15025"
];

const length = colors.length;

const myMain = document.querySelector(".main");
const color = document.querySelector(".color");

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const myNumber = getRandomNumber();
    myMain.style.backgroundColor = colors[myNumber]; 
    color.textContent = colors[myNumber];
    color.style.color = colors[myNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * length);
}