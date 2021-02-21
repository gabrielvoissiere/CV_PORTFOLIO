let i = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        right();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39 ) {
        right();
    }
});

function right() {
    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        i++
    }
    else if (i == 2) {  
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        i=0
    }
}

function left() {
    if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        i++
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        i++
    }
    else if (i == 2) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        i=0
    }
}
