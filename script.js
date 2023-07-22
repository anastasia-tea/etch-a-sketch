
const screen = document.querySelector(".screen");

const clear = document.querySelector("#clear");

const slider = document.querySelector(".slider");
const number = document.querySelector(".number");

function start() {

    for (let i = 0; i < 256; i++) {

        const div = document.createElement("div");
        div.classList.add("pixel");
        
        div.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        })

        screen.appendChild(div);
    }

};

//clear etch-a-sketch
clear.addEventListener("click", function () {

    let size = document.querySelector(".slider").value;
    let area = size * size;
    

    let pixels = screen.children;

    for (let i = 0; i < area; i++) {
        pixels[i].style.backgroundColor = "white";
    }

});

//slider for screen dimensions
slider.addEventListener("click", function () {

    let size = document.querySelector(".slider").value;
    let area = size * size;

    number.textContent = size;

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < area; i++) {

        const div = document.createElement("div");
        div.classList.add("pixel");
        
        div.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        })

        screen.appendChild(div);
    }

});

start();
