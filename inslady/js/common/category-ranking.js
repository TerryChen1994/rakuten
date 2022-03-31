(function ($) {
    "use strict";
    $(document).ready(function() {
        //https://www.rakuten.ne.jp/gold/inslady/
        $.getJSON("https://www.rakuten.ne.jp/gold/inslady/json/category-ranking.json", function(data){
            for(let i=0;i<data["bag_list"].length;i++){
                let crown = '<img src="https://www.rakuten.ne.jp/gold/inslady/img/icon/replace_crown.svg">\n';
                if(i < 3) {
                    switch (i) {
                        case 0:
                            crown = crown.replace('replace_crown', 'goldcrown');
                            break;
                        case 1:
                            crown = crown.replace('replace_crown', 'silvercrown');
                            break;
                        case 2:
                            crown = crown.replace('replace_crown', 'brasscrown');
                            break;
                    }
                } else {
                    crown = '';
                }
                console.log(crown);
                $("#category-ranking-bag-box").append(
                    '<div class="category-ranking-content-content-box">\n' +
                    '  <span class="category-ranking-content-hierarchy">\n' +
                            crown +
                    '       No.' + (i + 1) +  '</span>\n' +
                    '    <a href="https://item.rakuten.co.jp/inslady/' + data['bag_list'][i]['item_id'] + '">\n' +
                    '      <img src="' + data['bag_list'][i]['item_img'] + '">\n' +
                    '      <span class="category-ranking-content-name">' + data['bag_list'][i]['item_name'] + '</span>\n' +
                    '       <span class="category-ranking-content-delivery">送料無料</span>\n' +
                    '       <span class="category-ranking-content-price">' + data['bag_list'][i]['item_price'] + '</span>\n' +
                    '     </a>\n' +
                    '</div>'
                );
            };

            for(let i=0;i<data["tops_list"].length;i++){
                let crown = '<img src="https://www.rakuten.ne.jp/gold/inslady/img/icon/replace_crown.svg">\n';
                if(i < 3) {
                    switch (i) {
                        case 0:
                            crown = crown.replace('replace_crown', 'goldcrown');
                            break;
                        case 1:
                            crown = crown.replace('replace_crown', 'silvercrown');
                            break;
                        case 2:
                            crown = crown.replace('replace_crown', 'brasscrown');
                            break;
                    }
                } else {
                    crown = '';
                }
                console.log(crown);
                $("#category-ranking-tops-box").append(
                    '<div class="category-ranking-content-content-box">\n' +
                    '  <span class="category-ranking-content-hierarchy">\n' +
                    crown +
                    '       No.' + (i + 1) +  '</span>\n' +
                    '    <a href="https://item.rakuten.co.jp/inslady/' + data['tops_list'][i]['item_id'] + '">\n' +
                    '      <img src="' + data['tops_list'][i]['item_img'] + '">\n' +
                    '      <span class="category-ranking-content-name">' + data['tops_list'][i]['item_name'] + '</span>\n' +
                    '       <span class="category-ranking-content-delivery">送料無料</span>\n' +
                    '       <span class="category-ranking-content-price">' + data['tops_list'][i]['item_price'] + '</span>\n' +
                    '     </a>\n' +
                    '</div>'
                );
            };

            for(let i=0;i<data["onepiece_list"].length;i++){
                let crown = '<img src="https://www.rakuten.ne.jp/gold/inslady/img/icon/replace_crown.svg">\n';
                if(i < 3) {
                    switch (i) {
                        case 0:
                            crown = crown.replace('replace_crown', 'goldcrown');
                            break;
                        case 1:
                            crown = crown.replace('replace_crown', 'silvercrown');
                            break;
                        case 2:
                            crown = crown.replace('replace_crown', 'brasscrown');
                            break;
                    }
                } else {
                    crown = '';
                }
                console.log(crown);
                $("#category-ranking-onepiece-box").append(
                    '<div class="category-ranking-content-content-box">\n' +
                    '  <span class="category-ranking-content-hierarchy">\n' +
                    crown +
                    '       No.' + (i + 1) +  '</span>\n' +
                    '    <a href="https://item.rakuten.co.jp/inslady/' + data['onepiece_list'][i]['item_id'] + '">\n' +
                    '      <img src="' + data['onepiece_list'][i]['item_img'] + '">\n' +
                    '      <span class="category-ranking-content-name">' + data['onepiece_list'][i]['item_name'] + '</span>\n' +
                    '       <span class="category-ranking-content-delivery">送料無料</span>\n' +
                    '       <span class="category-ranking-content-price">' + data['onepiece_list'][i]['item_price'] + '</span>\n' +
                    '     </a>\n' +
                    '</div>'
                );
            };
        });
    });
})(jQuery);