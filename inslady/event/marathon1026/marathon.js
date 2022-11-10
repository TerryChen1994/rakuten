(function ($) {
    "use strict";
    $(document).ready(function() {
        $.getJSON("json/item.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#items").append(
                    '<div class="item_div_box">\n' +
                    '   <a target="_blank"  href="' + data['item_list'][i]['item_link'] + '">\n' +
                    '       <img src="' + data['item_list'][i]['item_img'] + '">\n' +
                    '   </a>\n' +
                    '</div>\n'
                );
            };
        });
    });
})(jQuery);