/**
 * Created by lenovo on 2017/3/4.
 */
$(document).ready(function () {
//    nav-li hover e
    var num;
    $('.nav>li[id]').hover(function () {
        /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-' + num).slideDown(300);
    }, function () {
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-' + num).hide();
    });
//    hidden-box hover e
    $('.li-1').hover(function () {
        /*保持图标向上*/
        $(".li-1>span").removeClass().addClass('hover-up');
        $(this).show();
    }, function () {
        $(this).slideUp(200);
        $(".li-1>span").removeClass().addClass('hover-down');
    });
});
