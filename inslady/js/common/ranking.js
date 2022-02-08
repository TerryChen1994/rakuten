(function ($) {
    "use strict";
    $(document).ready(function() {
        //https://www.rakuten.ne.jp/gold/inslady/
        $.getJSON("../json/ranking/ranking.json", function(data){
            for(let i=0;i<data["item_list"].length;i++){
                let crown = '<img class="ranking-box-content-item-hierarchy-crown" src="../img/icon/replace_crown.svg">\n';
                if(i < 3){
                    switch (i) {
                        case 0: crown = crown.replace('replace_crown','goldcrown');break;
                        case 1: crown = crown.replace('replace_crown','silvercrown');break;
                        case 2: crown = crown.replace('replace_crown','brasscrown');break;
                    }
                    $("#ranking-box-content").append(
                        '<div class="ranking-box-content-item">\n' +
                        '      <div class="ranking-box-content-item-hierarchy">\n' +
                        crown +
                        '        <span class="ranking-box-content-item-hierarchy-number">No.' + (i+1) + '</span>\n' +
                        '      </div>\n' +
                        '      <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                        '        <img class="ranking-box-content-item-img" src="' + data['item_list'][i]['item_img'] + '">\n' +
                        '      </a>\n' +
                        '</div>'
                    );
                }
                else{
                    $("#ranking-box-content").append(
                        '<div class="ranking-box-content-item">\n' +
                        '      <div class="ranking-box-content-item-hierarchy">\n' +
                        '        <span class="ranking-box-content-item-hierarchy-number">No.' + (i+1) + '</span>\n' +
                        '      </div>\n' +
                        '      <a target="_top" href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                        '        <img class="ranking-box-content-item-img" src="' + data['item_list'][i]['item_img'] + '">\n' +
                        '      </a>\n' +
                        '</div>'
                    );
                }
            };
        });
    });
})(jQuery);