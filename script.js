
const screen = document.querySelector(".screen");

const clear = document.querySelector("#clear");

const slider = document.querySelector(".slider");
const number = document.querySelector(".number");

const classic = document.querySelector("#classic");
const grey = document.querySelector("#grey");
const rainbow = document.querySelector("#rainbow");

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

    while (screen.hasChildNodes()) {
        screen.removeChild(screen.firstChild);
    }

    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < area; i++) {

        const div = document.createElement("div");
        div.classList.add("pixel");
        
        div.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        });

        screen.appendChild(div);
    }

});

//button to return to black pixel color
classic.addEventListener("click", function () {

    let size = document.querySelector(".slider").value;
    let area = size * size;

    let pixels = screen.children;

    for (let i = 0; i < area; i++) {
        pixels[i].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        });
    }

});

//button to make pixel color grey that becomes ten percent more black
//each time pixel is highlighted
/*grey.addEventListener("click", function () {

    let size = document.querySelector(".slider").value;
    let area = size * size;

    let pixels = screen.children;

    for (let i = 0; i < area; i++) {
        pixels[i].addEventListener("mouseover", function (e) {

            let background = e.target.style.backgroundColor = "rgba(0,0,0,0.1)";
            let current = background.split(" ")[3];
            let num = parseFloat(current);

            if (num <= 0.9) {
                e.target.style.backgroundColor = `rgba(0,0,0, ${num + 0.1})`;
            }
            
        });
    }

});*/

//button that makes each highlighted pixel a random color
rainbow.addEventListener("click", function () {

    let size = document.querySelector(".slider").value;
    let area = size * size;

    let pixels = screen.children;

    for (let i = 0; i < area; i++) {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        pixels[i].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }

});

start();
