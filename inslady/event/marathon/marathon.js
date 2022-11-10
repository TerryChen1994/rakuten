(function ($) {
    "use strict";
    $(document).ready(function() {
        $.getJSON("json/super_sale.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#items").append(
                    '<div class="item_div_box">\n' +
                    '   <a target="_blank"  href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">\n' +
                    '   </a>\n' +
                    '</div>\n'
                );
            };
        });
    });
})(jQuery);