(function ($) {
    "use strict";
    $(document).ready(function() {
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
    });
})(jQuery);