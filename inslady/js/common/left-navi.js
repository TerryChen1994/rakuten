(function ($) {
    "use strict";

    $(".category-dt").on("click", function(){
        let nextDD = $(this).next(".category-dd");
        let display = nextDD.css("display");
        if(display == "none"){
            nextDD.show();
            $(this).children("i").removeClass("fas fa-angle-down");
            $(this).children("i").addClass("fas fa-angle-up")
        }else {
            nextDD.hide();
            $(this).children("i").removeClass("fas fa-angle-up");
            $(this).children("i").addClass("fas fa-angle-down")
        }
    })

    $(".price-selector-dt").on("click", function(){
        let nextDD = $(this).next(".price-selector-dd");
        let display = nextDD.css("display");
        if(display == "none"){
            nextDD.show();
            $(this).children("i").removeClass("fas fa-angle-down");
            $(this).children("i").addClass("fas fa-angle-up")
        }else {
            nextDD.hide();
            $(this).children("i").removeClass("fas fa-angle-up");
            $(this).children("i").addClass("fas fa-angle-down")
        }
    })

})(jQuery);