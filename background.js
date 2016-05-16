'use strict';


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details.url)
    },
    {
        urls: [
            "https://mp.weixin.qq.com/s?*"
        ]
    },
    ["blocking"]
);

chrome.webRequest.onResponseStarted.addListener(
    function (a) {
       // console.log(a);
    },
    {
        urls: [
            // "https://wx.qq.com/*",
            "https://mp.weixin.qq.com/s?*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    }
);

chrome.extension.onMessage.addListener(function(objRequest, _, sendResponse){
    var strText = objRequest.txt;
    console.log(strText);
    // 将信息能过Ajax发送到服务器
    $.ajax({
        url: 'http://www.jgb.cn/',
        type: 'POST',
        data: {'txt': strText},
        dataType: 'json',
    }).then(function(){
        // 将正确信息返回content_script
        sendResponse({'status': 200});
    }, function(){
        // 将错误信息返回content_script
        sendResponse({'status': 500});
    });
});