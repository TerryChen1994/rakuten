(function ($) {
    "use strict";
    $(document).ready(function(){
        // new_arrival
        $.getJSON("json/new_arrival.json", function(data){
            for (let i=1;i<=8;i++){
                const varNameLink = "new_arrival_name_link_0" + i;
                const varPrice = "new_arrival_price_0" + i;
                const jsonVarName = "new_arrival_0" + i + "_name";
                const jsonVarPrice = "new_arrival_0" + i + "_price";
                const jsonVarLink = "new_arrival_0" + i + "_link";
                document.getElementById(varNameLink).innerText = data[jsonVarName];
                document.getElementById(varNameLink).href = data[jsonVarLink];
                document.getElementById(varPrice).innerText = data[jsonVarPrice];
            }
        }).fail(function(){
            console.log("An error has occurred.");
        });

        // time_sale
        $.getJSON("json/time_sale.json", function(data){
            // for (let i=1;i<=8;i++){
            //     const varNameLink = "time_sale_name_link_0" + i;
            //     const varPrice = "time_sale_price_0" + i;
            //     const jsonVarName = "time_sale_0" + i + "_name";
            //     const jsonVarPrice = "time_sale_0" + i + "_price";
            //     const jsonVarLink = "time_sale_0" + i + "_link";
            //     document.getElementById(varNameLink).innerText = data[jsonVarName];
            //     document.getElementById(varNameLink).href = data[jsonVarLink];
            //     document.getElementById(varPrice).innerText = data[jsonVarPrice];
            // }
            const varLink = "time_sale_link";
            const varOldPrice = "time_sale_old_price";
            const varNewPrice = "time_sale_new_price";
            const varName = "time_sale_name";
            const varInterval = "time_sale_interval";
            const varImg = "time_sale_img";
            document.getElementById(varName).innerText = data["sale_list"][0]["time_sale_name_01"];
            document.getElementById(varLink).href = data["sale_list"][0]["time_sale_link_01"];
            document.getElementById(varOldPrice).innerText = data["sale_list"][0]["time_sale_old_price_01"];
            document.getElementById(varNewPrice).innerText = data["sale_list"][0]["time_sale_new_price_01"];
            document.getElementById(varInterval).innerText = data["sale_list"][0]["time_sale_interval_01"];
            document.getElementById(varImg).src = data["sale_list"][0]["time_sale_img_01"];
            const end_time = data["sale_list"][0]["time_sale_end_time_01"];
            console.log(end_time);
            countdown(end_time);
        }).fail(function(){
            console.log("An error has occurred.");
        });

        // ranking
        $.getJSON("json/ranking.json", function(data){
            for (let i=1;i<=8;i++){
                const varNameLink = "ranking_name_link_0" + i;
                const varPrice = "ranking_price_0" + i;
                const jsonVarName = "ranking_0" + i + "_name";
                const jsonVarPrice = "ranking_0" + i + "_price";
                const jsonVarLink = "ranking_0" + i + "_link";
                document.getElementById(varNameLink).innerText = data[jsonVarName];
                document.getElementById(varNameLink).href = data[jsonVarLink];
                document.getElementById(varPrice).innerText = data[jsonVarPrice];
            }
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
})(jQuery);
