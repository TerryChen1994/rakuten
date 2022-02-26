(function ($) {
    "use strict";
    $(document).ready(function() {
        let category = document.getElementById("category").innerText;
        let json = "../json/"+category+".json";
        $.getJSON(json, function(data){
            for(let i=0;i<data["item_list"].length;i++){
                $("#items").append(
                    '<div class="item-div-box">\n' +
                    '            <div class="item-div">\n' +
                    '                <a target="_blank"  href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '">\n' +
                    '                    <img src="' + data['item_list'][i]['item_img'] + '">\n' +
                    '                </a>\n' +
                    '                <div class="item-origin-price">\n' +
                    '                    メーカー希望小売価格 ' + get_price(data['item_list'][i]['item_origin_price']) + '円\n' +
                    '                </div>\n' +
                    '                <div class="item-sale-price">\n' +
                    '                    <span class="item-sale-price-title">セール価格</span>\n' +
                    '                    <span class="item-sale-price-price">' + get_price(data['item_list'][i]['item_price']) + '円</span>\n' +
                    '                </div>\n' +
                    '                <div class="item-purchase">\n' +
                    '                    <a target="_blank"  href="https://item.rakuten.co.jp/inslady/' + data['item_list'][i]['item_id'] + '" class="item-purchase-link">\n' +
                    '                        <span class="item-purchase-button">購入する</span>\n' +
                    '                    </a>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '</div>'
                );
            };
        });
    });

    function get_price(s) {
        const formatter = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        });
        let price = formatter.format(s);
        return price.substring(1);
    }
})(jQuery);