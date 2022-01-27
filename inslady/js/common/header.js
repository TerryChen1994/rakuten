(function ($) {
    "use strict";
    $(document).ready(function() {
        //https://www.rakuten.ne.jp/gold/inslady/
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/keyword.json", function(data){
            for(let i=0;i<data["keyword_list"].length;i++){
                $("#keywordList").append(
                    '<li class="keyword_item">\n' +
                    '   <a target="_top" href="' + data["keyword_list"][i]["keyword_link"] + '">' +
                    '       #' + data["keyword_list"][i]["keyword_text"] + '' +
                    '   </a>\n' +
                    '</li>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/header_banner.json", function(data){
            for(let i=0;i<data["banner_list"].length;i++){
                $("#header-banner-list").append(
                    '<div class="header-banner-item position-relative">\n' +
                    '    <a target="_top" href="' + data["banner_list"][i]["banner_link"] + '">\n' +
                    '        <img src="' + data["banner_list"][i]["banner_img"] + '" alt="img">\n' +
                    '    </a>\n' +
                    '</div>'
                );
            };
            header_slider_area_slick_init();
        });
    });
    function header_slider_area_slick_init(){
        $('.header-slider-area').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 400,
            prevArrow: '<a class="slider-slick-prev"><i class="fas fa-chevron-left"></i></a>',
            nextArrow: '<a class="slider-slick-next"><i class="fas fa-chevron-right"></i></a>'
        });
    };
})(jQuery);