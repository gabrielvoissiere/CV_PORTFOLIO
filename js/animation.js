var presentationPos = document.querySelector(".presentation").offsetTop
var presentation = document.querySelector(".presentation")

document.addEventListener("scroll", function() {
    var windowPosition = window.scrollY;
    var winHeight = window.innerHeight*1

    if (windowPosition+winHeight >= presentationPos) {
        presentation.setAttribute("id", "show")
    }

    var cursusBox = document.querySelectorAll(".cursus-boite")
    cursusBox.forEach(elm => {
        if (windowPosition+winHeight >= elm.offsetTop) {
            elm.setAttribute("id", "show");
        }
    });

    var competenceBox = document.querySelectorAll(".element")
    competenceBox.forEach(elm => {
        if (windowPosition+winHeight >= elm.offsetTop) {
            elm.setAttribute("id", "show");
        }
    });
})



