const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");


let counter = 0;

function counterFunction (value) {
    counter = counter + value
    counterElement.innerText = counter;
    if (counter >= 10) {
        plusBtn.setAttribute("disabled", true);
    } else {
        plusBtn.removeAttribute("disabled");
    }
    // Negative Count Code 
    if (counter <= 0) {
        minusBtn.setAttribute("disabled", true);
    } else {
        minusBtn.removeAttribute("disabled");
    }
}


plusBtn.addEventListener("click", () => {
        counterFunction(1)
})

minusBtn.addEventListener("click", () => {
        counterFunction(-1)
})