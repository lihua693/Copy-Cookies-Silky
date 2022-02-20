// AWS.config.update({
//     region: "YOUR region",
//     accessKeyId: "aws密钥KeyId",
//     secretAccessKey: "aws密钥key"
//   });

// var docClient = new AWS.DynamoDB.DocumentClient();
// var table = "DynamoDB的table名";
// var id = "csdn";

//     function updateCookie(currentCookie) {
//     var params = {
//         TableName: table,
//         Key: {
//         "id": id
//         }
//     };

//     docClient.get(params, function (err, data) {
//         if (err) {
//         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//         console.log("GetItem succeeded:");
//         if (data != currentCookie) {
//             console.log("GetItem succeeded:");
//             putItem(currentCookie)
//         }
//         }
//     });
// }

// function putItem(cookie) {
// var params = {
//     TableName: table,//要操作的表名
//     Item: {
//     "id": id,//主键-分区间
//     "cookie": cookie,
//     }
// };

// docClient.put(params, function (err, data) {
//     if (err) {
//     console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//     console.log("Added item:", JSON.stringify(data, null, 2));
//     }
// });
// }


// console.log(22222, chrome.cookies);
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {


//         chrome.cookies.getAll({
//             url: request.url
//         }, (cks) => {
//             let cookie = cks.map((item) => {
//                 return item.name + "=" + item.value
//             }).join(";") + ";";
//             // updateCookie(cookie);
//             console.log("cookie ", cookie)
//         });

//         sendResponse("cookie update are trigger");
//     });


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