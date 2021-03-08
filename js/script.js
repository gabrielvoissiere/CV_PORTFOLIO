// animation du burger et apparition du menu
document.querySelector(".burger").addEventListener('click', function () {
    document.querySelector("nav").classList.toggle("slide")
    document.querySelector(".l2-1").classList.toggle("rotleft")
    document.querySelector(".l2-2").classList.toggle("rotright")
    document.querySelector(".l1").classList.toggle("hide")
    document.querySelector(".l3").classList.toggle("hide")
    document.querySelector("body").classList.toggle("stop")
})

window.addEventListener('DOMContentLoaded' , () => {
    // a remplir
})