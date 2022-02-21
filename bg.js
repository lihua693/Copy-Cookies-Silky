
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("3333333");
        console.log(chrome.cookies.getAll);
        chrome.cookies.getAll({
            url: request.url
        }, (cks) => {
            console.log("cks = ", cks);
            let cookie = cks.map((item) => {
                return item.name + "=" + item.value
            }).join(";") + ";";
            // updateCookie(cookie);
            // sendResponse("cookie update are trigger" +  " , " + cookie);
        });
        sendResponse("cookie update are trigger" +  " , " + JSON.stringify(chrome.cookies.getAll));
        console.log("4444444");
    }
);