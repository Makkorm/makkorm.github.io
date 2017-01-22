(function(){

    var slider = $("#slider"),
        sliderWrap = $(".slider-wrap"),
        item = slider.find("li"),
        timer = 10000,
        width = $(window).width();

    item.css({"width": width});

    if (width >= 751){
        var start = setInterval(next, timer);
    }


    $(window).resize(function(){
        width = $(window).width();
        item.css({"width": width});
        clearInterval(start);

        if (width >= 751){
            start = setInterval(next, timer);
        }
    });

    function next(){

        item = slider.find("li");

        sliderWrap.animate({"right": width},1000, function(){
            item.eq(0).clone().appendTo(slider);
            item.eq(0).remove();
            sliderWrap.css({"right": "0px"});
        });

    }

    //var start = setInterval(function(){
    //
    //    index++;
    //    item.fadeOut(900);
    //    item.eq(index).fadeIn(900);
    //
    //}, 5000);
}());