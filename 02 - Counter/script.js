let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let increase = document.querySelector("#increase");
let number = document.querySelector("#number");
let counter = 0;

const increaseNumber = () => {
    if (number.textContent >= 0) {
        number.style.color = "green";
    }
    counter++;
    number.textContent = counter;
    if (number.textContent == "0") {number.style.color = "black"};
};
const decreaseNumber = () => {
    if (number.textContent <= 0) {
        number.style.color = "red";
    }
    counter--;
    number.textContent = counter;
    if (number.textContent == "0") {number.style.color = "black"};
};
const resetNumber = () => {
    counter = 0;
    number.style.color = "black";
    number.textContent = counter;
};

increase.addEventListener("click", increaseNumber);
decrease.addEventListener("click", decreaseNumber);
reset.addEventListener("click", resetNumber);
