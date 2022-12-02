// 携帯端末の場合電話がリンクに。
// html書き方→<a class="telhref" href="tel:00000000000"><span>000-000-0000</span></a>

$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') < 0 && ua.indexOf('Android') < 0){
        $('.telhref span').each(function(){
            $(this).unwrap();
        });
    }
});



// スムーズスクロール部分の記述

var headerHeight = 50;
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500);   
});




// newarrival,rearrival MOREボタン

$(function () {
    $('.more').prevAll().hide();
    $('.more').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).text('- CLOSE').addClass('close');
        } else {
            $(this).prevAll().slideUp();
            $(this).text('+ MORE').removeClass('close');
        }
    });
});


// main_slide メインビジュアル

$('.slider01').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 800,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        centerPadding: '0',
        dots: true,
        dotsClass: 'slide-dots',
        responsive: [
   {
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
        variableWidth: false,
        centerMode: false
    }
   }
 ]
    });



// sub_slide モールバナー

$('.slider02').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 1200,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
});



// Instagram スライド

$('.slider03').bxSlider({
    ticker: true, 
    tickerHover: true,
    useCSS: false,
    hideControlOnEnd: true, 
    minSlides: 2, 
    maxSlides: 10, 
    slideWidth: 300, 
    speed: 80000,
    responsive: true
});



// 紫外線対策特集

$('.uv_cont_slide').slick({
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 1500,
    dots: true,
    dotsClass: 'slide-dots',
    arrows: false
});

// トレンドカラー特集

$('.tc_cont_slide').slick({
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 1000,
    arrows: false
});

// レジャー特集

$('.ls_cont_slide').slick({
    autoplay: true,
    infinite: true,
    fade: true,
    speed: 1000,
    arrows: false
});

// Christmas特集

$('.christmas_slide').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode: true,
    centerPadding: '50px',
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});

// Mother特集

$('.mother_slide').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode: true,
    centerPadding: '50px',
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});

// 敬老の日特集

$('.grandparents_slide').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode: true,
    centerPadding: '50px',
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});


// room特集

$('.room_slide').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerMode: true,
    centerPadding: '50px',
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});


// セレモニー特集

$('.ceremony_slide01').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">FORMAL</button>',
    nextArrow: '<button class="slide-arrow next-arrow">CASUAL</button>',
    autoplay: false,
    centerMode: true,
    centerPadding: '100px',
    variableWidth : true,
    infinite: false
});

jQuery(function($){
    $('.tab').click(function(){
        // クリックした要素の先祖要素の中で、classの値がgroupの要素を取得
        const group = $(this).parents('.group'); 
        group.find('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        group.find('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        group.find(".panel").eq(index).addClass('is-show');
    });
});


// 通勤バッグ特集

$('.work_slide01').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">OFFICE</button>',
    nextArrow: '<button class="slide-arrow next-arrow">CASUAL</button>',
    autoplay: false,
    centerMode: true,
    centerPadding: '100px',
    variableWidth : true,
    infinite: false
});

jQuery(function($){
    $('.tab').click(function(){
        // クリックした要素の先祖要素の中で、classの値がgroupの要素を取得
        const group = $(this).parents('.group'); 
        group.find('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        group.find('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        group.find(".panel").eq(index).addClass('is-show');
    });
});




// header_sp ナビゲーション

$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
});
$('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('nav').removeClass('open');      
    }
});


$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});



//guide_07 よくある質問

$(function(){

    //.accordion1の中のp要素がクリックされたら
    $('.accordion1 p').click(function(){

        //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
        $(this).next('.inner').slideToggle();

         $(this).toggleClass("open");

    });
});


//pagetopボタン スクロールしたら表示

$(function() {
    var topBtn = $('#pagetop');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



//sale_banner 一番下までスクロールしたら消える

$(function() {
    var docHeight = $(document).innerHeight(), 
        windowHeight = $(window).innerHeight(),
        pageBottom = docHeight - windowHeight,
        salebanner = $('.sb_fixed');    
    $(window).scroll(function () {
        if(pageBottom <= $(window).scrollTop()) {
            salebanner.fadeOut();
        } else {
            salebanner.fadeIn();
        }
    });
});



//日時指定 表示・非表示
// 「class="view_timer" data-start-date="2013/9/24 10:00" data-end-date="2013/9/30 21:00"」 どちらかだけだと以降or以前は無制限


$(document).ready(function() {
  $(".view_timer").each(function(index, target) {
    var startDate = $(this).attr("data-start-date");
    var endDate = $(this).attr("data-end-date");
    var nowDate = new Date();
    if (startDate) {
      startDate = new Date(startDate);
    } else {
      startDate = nowDate;
    }
    if (endDate) {
      endDate = new Date(endDate);
    }
    if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});



//セール popup 

var bg = document.getElementById('c-modal_bg');
bg.addEventListener('click', modal_close, false);
 
var close = document.getElementById('c-modal_close');
close.addEventListener('click', modal_close, false);
 
function modal_close() {
    var modal = document.getElementById('c-modal');
    modal.style.display = 'none';
    bg.style.display = 'none';
 
    if(document.getElementsByName('acs_next')[0].checked) {
        sessionStorage.setItem('acs2', 'on');
    }
}


if(sessionStorage.getItem('acs2') === null) {
 
} else {
    modal_close();
}