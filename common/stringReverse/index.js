//普通函数
function StrReverse(str) {
    return str.split("").reverse().join("");
}
//原型
String.prototype.getString=function () {
    return this.split("").reverse().join("");
}