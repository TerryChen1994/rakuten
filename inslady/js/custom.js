(function ($) {
    "use strict";
    $(document).ready(function(){
        $.getJSON("json/keyword.json", function(data){
            for(let i=0;i<data["keyword_list"].length;i++){
                $("#keywordList").append(
                    '<li class="keyword_item">\n' +
                    '   <a href="' + data["keyword_list"][i]["keyword_link"] + '">' +
                    '       #' + data["keyword_list"][i]["keyword_text"] + '' +
                    '   </a>\n' +
                    '</li>'
                );
            };
        });

        // new_arrival
        $.getJSON("json/new_arrival.json", function(data){
            for (let i=0;i<8;i++){
                $("#new-arrival-items").append(
                    '<div class="col-xl-3  col-md-6 col-sm-6 grid-item pl-0 pr-0">\n' +
                    '   <div class="arrival-items text-center mb-15">\n' +
                    '       <div class="arrival-img">\n' +
                    '           <a href="' + data["new_arrival_list"][i]["new_arrival_link"] + '">\n' +
                    '               <img src="' + parseImgUrl(data["new_arrival_list"][i]["new_arrival_img"],data["new_arrival_img_size"]) + '" alt="test">\n' +
                    '           </a>\n' +
                    '       </div>\n' +
                    '       <div class="arrival-details position-relative pt-10 pr-15 pl-15">\n' +
                    '           <h5 style="margin-bottom: 0px !important;">\n' +
                    '               <a id="new_arrival_name_link_01" href="' + data["new_arrival_list"][i]["new_arrival_link"] + '">\n' +
                    '               ' + data["new_arrival_list"][i]["new_arrival_name"] + '\n' +
                    '               </a></h5>\n' +
                    '           <div class="price">\n' +
                    '               <span id="new_arrival_price_01">' + data["new_arrival_list"][i]["new_arrival_price"] + '</span>\n' +
                    '           </div>\n' +
                    '       </div>\n' +
                    '   </div>\n' +
                    '</div>'
                );
            }
        }).fail(function(){
            console.log("An error has occurred.");
        });

        // time_sale
        $.getJSON("json/time_sale.json", function(data){
            const varLink = "time_sale_link";
            const varOldPrice = "time_sale_old_price";
            const varNewPrice = "time_sale_new_price";
            const varName = "time_sale_name";
            const varInterval = "time_sale_interval";
            const varImg = "time_sale_img";
            const varBtn = "time_sale_btn";
            document.getElementById(varBtn).href = data["sale_list"][0]["time_sale_link_01"];
            document.getElementById(varName).innerText = data["sale_list"][0]["time_sale_name_01"];
            document.getElementById(varLink).href = data["sale_list"][0]["time_sale_link_01"];
            document.getElementById(varOldPrice).innerText = data["sale_list"][0]["time_sale_old_price_01"];
            document.getElementById(varNewPrice).innerText = data["sale_list"][0]["time_sale_new_price_01"];
            document.getElementById(varInterval).innerText = data["sale_list"][0]["time_sale_interval_01"];
            document.getElementById(varImg).src = parseImgUrl(data["sale_list"][0]["time_sale_img_01"], data["sale_img_size"]);
            const end_time = data["sale_list"][0]["time_sale_end_time_01"];
            console.log(end_time);
            countdown(end_time);
        }).fail(function(){
            console.log("An error has occurred.");
        });

        // ranking
        $.getJSON("json/ranking.json", function(data){
            let crown = '';
            for (let i=0;i<8;i++){
                if(i < 3){
                    crown = '<img class="ranking-box-content-item-hierarchy-crown" src="img/icon/replace_crown.svg">\n';
                    switch (i) {
                        case 0: crown = crown.replace('replace_crown','goldcrown');break;
                        case 1: crown = crown.replace('replace_crown','silvercrown');break;
                        case 2: crown = crown.replace('replace_crown','brasscrown');break;
                    }
                } else{
                    crown = '';
                }
                let hierarchy = '<div class="ranking-box-content-item-hierarchy">\n' +
                                    crown +
                                '   <span class="ranking-box-content-item-hierarchy-number">No.' + (i+1) + '</span>\n' +
                                '</div>\n';
                $("#ranking-products").append(
                    '<div class="col-xl-3  col-md-6 col-sm-6 grid-item pl-0 pr-0">\n' +
                    '   <div class="ranking-items text-center mb-15">\n' +
                            hierarchy +
                    '       <div class="ranking-img">\n' +
                    '           <a href="' + data["ranking_list"][i]["ranking_link"] + '">\n' +
                    '               <img src="' + parseImgUrl(data["ranking_list"][i]["ranking_img"],data["ranking_img_size"]) + '" alt="test">\n' +
                    '           </a>\n' +
                    '       </div>\n' +
                    '       <div class="ranking-details position-relative pt-10">\n' +
                    '           <h5 style="margin-bottom: 0px !important;">\n' +
                    '               <a id="ranking_name_link_01" href="' + data["ranking_list"][i]["ranking_link"] + '">\n' +
                    '                   ' + data["ranking_list"][i]["ranking_name"] + '</a>\n' +
                    '           </h5>\n' +
                    '           <div class="price">\n' +
                    '               <span id="ranking_price_01">' + data["ranking_list"][i]["ranking_price"] + '</span>\n' +
                    '           </div>\n' +
                    '       </div>\n' +
                    '   </div>\n' +
                    '</div>'
                );

            }
        }).fail(function(){
            console.log("An error has occurred.");
        });

        // pick up
        $.getJSON("json/pick_up.json", function (data){
            for(let i=0;i<data["pick_up_list"].length;i++){
                $("#pick-up-slider").append(
                    '<div class="pick-up-item col-xl-4 col-lg-6 col-md-6 col-sm-12">\n' +
                    '   <div class="text-center">\n' +
                    '       <div class="pick-up-item-img">\n' +
                    '           <a href="' + data["pick_up_list"][i]["pick_up_link"] + '">\n' +
                    '               <img src="' + data["pick_up_list"][i]["pick_up_img"] + '">\n' +
                    '           </a>\n' +
                    '       </div>\n' +
                    '       <div class="pick-up-item-detail position-relative pt-10">\n' +
                    '           <h5 style="margin-bottom: 0px !important;"><a id="pick_up_name_01" href="">' + data["pick_up_list"][i]["pick_up_name"] + '</a></h5>\n' +
                    '           <div class="price">\n' +
                    '               <span id="pick_up_price_01">' + data["pick_up_list"][i]["pick_up_price"] + '</span>\n' +
                    '           </div>\n' +
                    '       </div>\n' +
                    '   </div>\n' +
                    '</div>'
                );
            }
            pick_up_slick_init();
        });

        // $.getJSON("json/top_banner_first.json", function(data){
        //     for(let i=0;i<data["banner_list"].length;i++){
        //         $("#top-banner-first").append(
        //             '<div class="top-banner-item first-items position-relative">\n' +
        //             '   <div class="top-banner-thumb overflow-hidden">\n' +
        //             '       <a href="' + data["banner_list"][i]["banner_link"] + '">\n' +
        //             '           <img src="' + parseImgUrl(data["banner_list"][i]["banner_img"],data["banner_size"]) + '" alt="img1">\n' +
        //             '       </a>\n' +
        //             '   </div>\n' +
        //             '</div>'
        //         );
        //     };
        //     slider_area_slick_init();
        // });
        // $.getJSON("json/top_banner_second.json", function(data) {
        //     $("#top-banner-second").append(
        //         '<div class="top-banner-item second-items position-relative mb-30">\n' +
        //         '   <div class="cat-thumb overflow-hidden">\n' +
        //         '       <a href="' + data["banner_list"][0]["banner_link"] + '">\n' +
        //         '           <img src="' + data["banner_list"][0]["banner_img"] + '" alt="img2">\n' +
        //         '       </a>\n' +
        //         '   </div>\n' +
        //         '</div>\n' +
        //         '<div class="top-banner-item third-items position-relative">\n' +
        //         '   <div class="cat-thumb overflow-hidden">\n' +
        //         '       <a href="' + data["banner_list"][1]["banner_link"] + '">\n' +
        //         '           <img src="' + data["banner_list"][1]["banner_img"] + '"" alt="img3">\n' +
        //         '       </a>\n' +
        //         '   </div>\n' +
        //         '</div>'
        //     );
        // });
    });

    function parseImgUrl(url,size){
        let imgName = url.replace("https://image.rakuten.co.jp/",
            "https://thumbnail.image.rakuten.co.jp/@0_mall/");
        imgName = imgName + "?_ex=" + size + "x" + size;
        return imgName;
    };

    function slider_area_slick_init()
    {
        $('.slider-area').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 400,
            prevArrow: '<a class="slider-slick-prev"><i class="las la-arrow-left"></i></a>',
            nextArrow: '<a class="slider-slick-next"><i class="las la-arrow-right"></i></a>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
            ]
        });
        if ($('.slick-slide').hasClass('slick-active')) {
            $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft');
            $('.slider-images ').addClass('animated fadeInRight');
        } else {
            $('.slider-description h1, .slider-description p,.slider-description a').removeClass('animated fadeInLeft');
            $('.slider-images').removeClass('animated fadeInRight');
        }
        $('.slider-area').on('beforeChange', function () {
            $('.slider-description h1, .slider-description p, .slider-description a').removeClass('animated fadeInLeft').hide();
            $('.slider-images').removeClass('animated fadeInRight').hide();
            setTimeout(() => {
                $('.slider-description h1, .slider-description p, .slider-description a').addClass('animated fadeInLeft').show();
                $('.slider-images ').addClass('animated fadeInRight').show();
            })
        });
    };

    function pick_up_slick_init(){
        $('.pick-up-slider').slick({
            dots: true,
            customPaging: function(slider, i) {
                return '<i class="fas fa-circle pick-up-dot"></i>';
            },
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 400,
            prevArrow: '<a class="slider-slick-prev"><i class="las la-arrow-left"></i></a>',
            nextArrow: '<a class="slider-slick-next"><i class="las la-arrow-right"></i></a>',
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 330,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
})(jQuery);
