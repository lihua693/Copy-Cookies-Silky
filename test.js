window.addEventListener("load", myMain, false);

// function getCookies(url) {
  // console.log(document.URL, ",", window.location.href);
  // console.log(22222, document.URL);
  // chrome.runtime.sendMessage({ url: url }, async function (response) {
    // console.log("resp:", response);
  // });
// }

function copyHandle(content){
  let copy = (e)=>{
      e.preventDefault()
      e.clipboardData.setData('text/plain',content)
      // alert('复制成功')
      document.removeEventListener('copy',copy)
  }
  document.addEventListener('copy',copy)
  document.execCommand("Copy");
}

function myMain(evt) {
  console.log("Cookie share helper running!");
  var strcookie = document.cookie;//获取cookie字符串
  // console.log(strcookie);
  var dict = {};
  var arrcookie = strcookie.split("; ");//分割
  // console.log("arrcookie =",arrcookie);
  for (let index = 0; index < arrcookie.length; index++) {
    var element = arrcookie[index];
    // console.log("element =",element);
    var cook = element.split("=");
    // console.log("cook =",cook);
    dict[cook[0]] = cook[1];
    // console.log("dict = ", dict);
  }
  console.log(dict)
  st = JSON.stringify(dict)
  copyHandle(st)
  // getCookies(document.URL);
}
