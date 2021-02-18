$(document).ready(function(){

    $(".burger").click(function () { 
        $("nav").toggleClass("slide") 
        $(".l2-1").toggleClass("rotleft")
        $(".l2-2").toggleClass("rotright")  
        $(".l1, .l3").toggleClass("hide")
        $("body").toggleClass("stop")
    });

    $(".all").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".scolaire, .professionel, .personnel").css("display", "block")
    });

    $(".perso").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".personnel").css("display", "block")
        $(".scolaire, .professionel").css("display", "none")
    });

    $(".pro").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".professionel").css("display", "block")
        $(".scolaire, .personnel").css("display", "none")
    });

    $(".sco").click(function () { 
        $(this).siblings().removeClass("select")
        $(this).addClass("select")
        $(".scolaire").css("display", "block")
        $(".professionel, .personnel").css("display", "none")
    });
})