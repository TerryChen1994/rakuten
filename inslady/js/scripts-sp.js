(function ($) {
    "use strict";

    // menu scroll
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header-1");
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    // Main menu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // Side Menu Sp
    $('.sub-menu-category').show();

    $('.sub-menu-trigger').on('click', function (){
        let childI = $(this).find("i:first");
        let childUL = $(this).parent().children("ul");
        if(childUL.css("display") == "none"){
            childUL.show();
            childI.removeClass("fa fa-caret-down");
            childI.addClass("fa fa-caret-up");
        } else {
            childUL.hide();
            childI.removeClass("fa fa-caret-up");
            childI.addClass("fa fa-caret-down");
        }
    })

    // Open Menu
    $('.menu-bar img, .side-menu-overlay').on('click', function () {
        if($('.side-menu').hasClass('open-menu')){
            $('.side-menu').removeClass('open-menu');
            $('.side-menu-overlay').removeClass('open-menu');
        } else {
            $('.side-menu').addClass('open-menu');
            $('.side-menu-overlay').addClass('open-menu');
        }
    })

    // SearchBox
    $('#searchIcon').on('click', function (){
        let searchBox = $("#search-box");
        let display = searchBox.css("display");
        if(display == "none"){
            searchBox.show();
        }else {
            searchBox.hide();
        }
    })

    // Slider Area
    // $('.slider-area').slick({
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 400,
    //     prevArrow: '<a class="slider-slick-prev"><i class="las la-arrow-left"></i></a>',
    //     nextArrow: '<a class="slider-slick-next"><i class="las la-arrow-right"></i></a>',
    //     responsive: [{
    //         breakpoint: 992,
    //         settings: {
    //             arrows: false,
    //         }
    //     }
    //     ]
    // });
    // if ($('.slick-slide').hasClass('slick-active')) {
    //     $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft');
    //     $('.slider-images ').addClass('animated fadeInRight');
    // } else {
    //     $('.slider-description h1, .slider-description p,.slider-description a').removeClass('animated fadeInLeft');
    //     $('.slider-images').removeClass('animated fadeInRight');
    // }
    // $('.slider-area').on('beforeChange', function () {
    //     $('.slider-description h1, .slider-description p, .slider-description a').removeClass('animated fadeInLeft').hide();
    //     $('.slider-images').removeClass('animated fadeInRight').hide();
    //     setTimeout(() => {
    //         $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft').show();
    //         $('.slider-images ').addClass('animated fadeInRight').show();
    //     })
    // });

    // pick up slider
    // $('.pick-up-slider').slick({
    //     dots: true,
    //     customPaging: function(slider, i) {
    //         return '<i class="fas fa-circle pick-up-dot"></i>';
    //     },
    //     arrows: true,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     speed: 400,
    //     prevArrow: '<a class="slider-slick-prev"><i class="las la-arrow-left"></i></a>',
    //     nextArrow: '<a class="slider-slick-next"><i class="las la-arrow-right"></i></a>',
    //     responsive: [
    //         {
    //             breakpoint: 990,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 660,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 330,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

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
    $('.popbtn').click(function(){
        $(".product-popupList").addClass('active');
    });
    $('.close-popup button').click(function () {
        $('.product-popupList').removeClass("active");
    })

})(jQuery);