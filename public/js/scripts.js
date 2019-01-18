$(document).ready(function() {
    
    $("i").mouseenter(function() {
        $(this).css("transform", "scale(1.2)");
    })

    $("i").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    })

    $(".menu").click(function(){
        $(".side-menu").animate({width: 'toggle'});
      });

    $(".side-menu").mouseleave(function(){
        $(".side-menu").animate({width: 'toggle'});
    });

});