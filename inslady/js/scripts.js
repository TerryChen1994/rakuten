(function ($) {
    "use strict";

    // menu scroll
    // window.addEventListener("scroll", function () {
    //     var header = document.querySelector(".header-1");
    //     header.classList.toggle("sticky", window.scrollY > 0)
    // })

    // Main menu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // auto-popup
    $(document).ready(function () {
        setTimeout(function () {
            $('#autopopup-option').css('display', 'block');
        }, 2500);
        $('#close-button').click(function () {
            $('#autopopup-option').css('display', 'none');
        })

    });

    $(".auto_popup ").css("display", "none");

    // magnificPopup
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //Loader
    jQuery(window).load(function () {
        $(".loader").fadeOut(1500);
    });
    $('.popbtn').click(function(){
        $(".product-popupList").addClass('active');
    });
    $('.close-popup button').click(function () {
        $('.product-popupList').removeClass("active");
    })

    // scroll top
    window.addEventListener('scroll',function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active" , window.scrollY >500)
    })
    const btnTopToScroll = document.querySelector("#scrollToTop");

    btnTopToScroll.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    })
})(jQuery);