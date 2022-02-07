(function ($) {
    "use strict";
    $(document).ready(function() {
        //https://www.rakuten.ne.jp/gold/inslady/
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/tops.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-tops-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/bottoms.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-bottoms-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/onepiece.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-onepiece-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/outer.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-outer-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/goods.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-goods-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category/bag.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#category-box-tab-bag-content").append(
                    '<div class="category-box-tab-content-item">\n' +
                    '   <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">' +
                    '   </a>\n' +
                    '</div>'
                );
            };
        });
    });
})(jQuery);