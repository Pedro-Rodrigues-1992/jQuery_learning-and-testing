$(document).ready(function(){
    $("h1").addClass("big-title");
    // $("h1").text("bye");
    // $("button").html("<em>Hey</em>");
    // $("img").attr("src");
    // $("a").attr("href", "https://www.yahoo.com");
    // $("h1").click(function(){
    //     $("h1").css("color", "purple");
    // });
    $("button").click(function(){
        // $("h1").hide();
        // $("h1").fadeOut();
        // $("h1").toggle();
        // $("h1").fadeToggle();
        // $("h1").slideToggle();
        // $("h1").animate({opacity: 0.5, margin:20});
        $("h1").slideUp().slideDown().text("how are you?").animate({opacity: 0.5});
    })
    $("input").keydown(function(event){
        $("h1").text(event.key)
    })
    $("h1").on("mouseover", function(){
        $("h1").css("color","purple");
    })

})


