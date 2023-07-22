
const screen = document.querySelector(".screen");

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

start();
