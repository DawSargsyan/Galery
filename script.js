$(document).ready(function() {

    $("ul").on("click" , "img" , function() {
        var effect = $("#imgEffect").val();
        var duration = $("#imgDuration").val() * 1000;
        var img = $(this).attr('src');

        if (effect == "Fade") {
            $("#mainImg").fadeOut(duration, function() {
                $(this).attr('src', img);
            }).fadeIn(duration);
        }else {
            $("#mainImg").slideUp(duration, function() {
                $(this).attr('src', img);
            }).slideDown(duration);
        }
    })

    var mainImg = $("#mainImg");
    
    $("#btnEnlarge").click(function() {
        mainImg.animate({ width :  "+=100" , height : "+=100"} , 500, function() {
            if ("width" == "1400px") {
                mainImg.animate({ width :  "1400" , height : "1050"} , 500,)
            }
        });


       
    });
    $("#btnShrink").click(function() {
        mainImg.animate({width : "-=100" , height : "-=100"} , 500 );
    });

})