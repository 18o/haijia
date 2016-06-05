//console.info("Load yueche script");
$(function(){
    repeat = setInterval(function () {
        window.location.reload();
    }, 30000);

    var trs = $("#tblMain").find("tr");
    // var a = 0;
    trs.each(function (index, tr) {
        tds = $(tr).find("td");
        var date;
        var time = "";
        var have = false;
        tds.each(function (index, td) {
            var $td = $(td);
            if (index > 0) {
                date = $td.attr("yyrq");
                time += $td.attr("yysd") + ":";
                time += $td.text() + "  ";
                if ($td.text() != "无" && $td.text() != "已约") {
                    have = true;
                }
            
               
        }});
        if (index > 0) {
            if (have) {
                console.info("%c" + date + " " + time, "color:blue;");
            } else {
                console.log(date +" " + time);
            }
        }
    });
 
});