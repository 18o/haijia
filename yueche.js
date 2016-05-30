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
        tds.each(function (index, td) {
            var $td = $(td);
            if (index > 0) {
                date = $td.attr("yyrq");
                time += $td.attr("yysd") + ":";
                time += $td.text() + "  ";
                // if (a == 0 && $td.attr("yysd") == "711") {
                //     $td.text(1);
                //     a++;
                // }
            
            if (index == 1) {
                $("body").append('<audio id="audio' + date + '" src="https://iios.net/x.mp3"></audio>');
            
            }
            var audio = $("#audio"+ date);
            if(date == "20160604" || date == "20160605") {
                if ($td.text() != "无") {
                    clearInterval(repeat);
                    audio[0].play();
                    $td.click();
                }
            }
               
        }});
        if (index > 0) {
            console.log(date, " ", time);
        }
    });
 
});