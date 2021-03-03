// animation du burger et apparition du menu
document.querySelector(".burger").addEventListener('click', function () {
    document.querySelector("nav").classList.toggle("slide")
    document.querySelector(".l2-1").classList.toggle("rotleft")
    document.querySelector(".l2-2").classList.toggle("rotright")
    document.querySelector(".l1").classList.toggle("hide")
    document.querySelector(".l3").classList.toggle("hide")
    document.querySelector("body").classList.toggle("stop")
})

// boutton filtre
document.querySelector(".all").addEventListener('click', function () {
    document.querySelector(".all").classList.add("select")
    document.querySelector(".perso").classList.remove("select")
    document.querySelector(".pro").classList.remove("select")
    document.querySelector(".sco").classList.remove("select")

    var personnel = document.querySelectorAll(".personnel");
    for (let i = 0; i < personnel.length; ++i) {
        personnel[i].style.display = "block";
    }

    var professionel = document.querySelectorAll(".professionel");
    for (let i = 0; i < professionel.length; ++i) {
        professionel[i].style.display = "block";
    }

    var scolaire = document.querySelectorAll(".scolaire");
    for (let i = 0; i < scolaire.length; ++i) {
        scolaire[i].style.display = "block";
    }
})

document.querySelector(".perso").addEventListener('click', function () {
    document.querySelector(".all").classList.remove("select")
    document.querySelector(".perso").classList.add("select")
    document.querySelector(".pro").classList.remove("select")
    document.querySelector(".sco").classList.remove("select")

    var personnel = document.querySelectorAll(".personnel");
    for (let i = 0; i < personnel.length; ++i) {
        personnel[i].style.display = "block";
    }

    var professionel = document.querySelectorAll(".professionel");
    for (let i = 0; i < professionel.length; ++i) {
        professionel[i].style.display = "none";
    }

    var scolaire = document.querySelectorAll(".scolaire");
    for (let i = 0; i < scolaire.length; ++i) {
        scolaire[i].style.display = "none";
    }
})

document.querySelector(".pro").addEventListener('click', function () {
    document.querySelector(".all").classList.remove("select")
    document.querySelector(".pro").classList.add("select")
    document.querySelector(".perso").classList.remove("select")
    document.querySelector(".sco").classList.remove("select")

    var personnel = document.querySelectorAll(".personnel");
    for (let i = 0; i < personnel.length; ++i) {
        personnel[i].style.display = "none";
    }

    var professionel = document.querySelectorAll(".professionel");
    for (let i = 0; i < professionel.length; ++i) {
        professionel[i].style.display = "block";
    }

    var scolaire = document.querySelectorAll(".scolaire");
    for (let i = 0; i < scolaire.length; ++i) {
        scolaire[i].style.display = "none";
    }
})

document.querySelector(".sco").addEventListener('click', function () {
    document.querySelector(".all").classList.remove("select")
    document.querySelector(".sco").classList.add("select")
    document.querySelector(".perso").classList.remove("select")
    document.querySelector(".pro").classList.remove("select")

    var personnel = document.querySelectorAll(".personnel");
    for (let i = 0; i < personnel.length; ++i) {
        personnel[i].style.display = "none";
    }

    var professionel = document.querySelectorAll(".professionel");
    for (let i = 0; i < professionel.length; ++i) {
        professionel[i].style.display = "none";
    }

    var scolaire = document.querySelectorAll(".scolaire");
    for (let i = 0; i < scolaire.length; ++i) {
        scolaire[i].style.display = "block";
    }
})