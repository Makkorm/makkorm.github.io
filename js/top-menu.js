(function(){

    var menuBtn = $("#btn-top-menu"),
        menuBox = $("#top-nav");

    menuBtn.bind("click", showMenu);

    function showMenu(){
        menuBox.slideToggle();
    }
}());