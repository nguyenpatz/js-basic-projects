const hex = [
    0,1,2,3,4,5,6,7,8,9,
    "A","B","C","D","E","F"
];

const length = hex.length;

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const myMain = document.querySelector(".main");

btn.addEventListener("click", function() {
    let myColor = "#";
    for(let x = 0; x < 6; x++) {
        myColor += hex[getRandomNumber()];
    }
    myMain.style.backgroundColor = myColor;
    color.textContent = myColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * length);
}