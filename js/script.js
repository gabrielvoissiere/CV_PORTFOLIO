$(document).ready(function(){

    // animation du burger et volet menu
    $(".burger").click(function () { 
        $("nav").toggleClass("slide") 
        $(".l2-1").toggleClass("rotleft")
        $(".l2-2").toggleClass("rotright")  
        $(".l1, .l3").toggleClass("hide")
        $("body").toggleClass("stop")
    });

    // bouton filtre des page realisations
    $(".all").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".scolaire, .professionel, .personnel").removeClass("disapear")
    });

    $(".perso").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".personnel").removeClass("disapear")
        $(".scolaire, .professionel").addClass("disapear")
    });

    $(".pro").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".professionel").removeClass("disapear")
        $(".scolaire, .personnel").addClass("disapear")
    });

    $(".sco").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".scolaire").removeClass("disapear")
        $(".professionel, .personnel").addClass("disapear")
    });

    // validation du formulaire
        if ($("#name") == "") {
            $("#caution").text("Veuillez remplir tous les champs")
            $("#submit");addClass("disabled")
        }
})