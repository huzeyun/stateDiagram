

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//json 转换成字符串
function json2str(o) {
    var arr = [];
    var fmt = function (s) {
        if (typeof s == 'object' && s != null) return json2str(s);
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }
    for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
    return '{' + arr.join(',') + '}';
}

//string对象转化为json对象 
function stringToJson(stringValue) {
    eval("var theJsonValue = " + stringValue);
    return theJsonValue;
}
//json数组转化为 String对象的方法（要掉要上面那个方法） 
function JsonArrayToStringCfz(jsonArray) {
    var JsonArrayString = "[";
    for (var i = 0; i < jsonArray.length; i++) {
        JsonArrayString = JsonArrayString + json2str(jsonArray[i]) + ",";
    }
    JsonArrayString = JsonArrayString.substring(0, JsonArrayString.length - 1) + "]";
    return JsonArrayString;
} 

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//获取时间格式化后的字符串
function getDateFormatStr(dt) {

    var partMonth = dt.getMonth() + 1;
    var partDay = (dt.getDate());
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();
    var data = dt.getFullYear() + '/'
               + fullTowNumber(partMonth) + '/'
               + fullTowNumber(partDay) + " "
               + fullTowNumber(hh) + ":"
               + fullTowNumber(mm) + ":"
               + fullTowNumber(ss);
    return data;
}



//补全位数如果不足两位添加0 补充首位
function fullTowNumber(number) {
    var s = number < 10 ? "0" + number : number;
    return s;
}  
//拼接字符串
function join(sPlit, arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (str != "") {
            str += sPlit;
        }
        str += arr[i];
    }
    return str;
}


function parseDate(sDate, diff)
{

    var date = new Date(sDate);
    date.setDate(date.getDate() + diff);
    var partMonth = date.getMonth() + 1;
    var partDay = date.getDate();
    data = date.getFullYear() + '/'
               + (partMonth < 10 ? "0" + partMonth : partMonth) + '/'
               + (partDay < 10 ? "0" + partDay : partDay)
    return data;
}


function getCurDate()
{
    var date = new Date();
    var partMonth = date.getMonth() + 1;
    var partDay = (date.getDate());

    data = date.getFullYear() + '/'
               + (partMonth < 10 ? "0" + partMonth : partMonth) + '/'
               + (partDay < 10 ? "0" + partDay : partDay);
    return data;
}


 function  DateFormat(date,format)
{
    var o = {
        "Y+":date.getFullYear(),
        "M+": date.getMonth() + 1, //month 
        "d+": date.getDate(), //day 
        "H+": date.getHours(), //hour 
        "m+": date.getMinutes(), //minute 
        "s+": date.getSeconds(), //second 
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter 
        "S": date.getMilliseconds() //millisecond 
    }

    if (/(y+)/.test(format))
    {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o)
    {
        if (new RegExp("(" + k + ")").test(format))
        {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

////获取时间格式化后的字符串
//function getDateFormatStr(dt)
//{

//    var partMonth = dt.getMonth() + 1;
//    var partDay = (dt.getDate());
//    var hh = dt.getHours();
//    var mm = dt.getMinutes();
//    var ss = dt.getSeconds();
//    var data = dt.getFullYear() + '/'
//               + fullTowNumber(partMonth) + '/'
//               + fullTowNumber(partDay) + " "
//               + fullTowNumber(hh) + ":"
//               + fullTowNumber(mm) + ":"
//               + fullTowNumber(ss);
//    return data;
//}



//function fullTowNumber(number)
//{
//    var s = number < 10 ? "0" + number : number;
//    return s;
//}

function kgl(istaus)
{
    switch (istaus)
    {
        case 1: return "开";
        case 0: return "关";
        case -1: return "异常";
    }
}