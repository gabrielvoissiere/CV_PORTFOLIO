$(document).ready(function(){

    $(".burger").click(function () { 
        $("nav").toggleClass("slide") 
        $(".l2-1").toggleClass("rotleft")
        $(".l2-2").toggleClass("rotright")  
        $(".l1, .l3").toggleClass("hide")
        $("body").toggleClass("stop")
    });

})