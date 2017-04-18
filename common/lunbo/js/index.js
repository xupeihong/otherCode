
$(function () {
    //获取图片个数自动创建数字按钮
    var size = $(".img li").size();
    for (var i = 1; i <= size; i++) {
        var li = $("<li>" + i + "</li>");
        $(".num").append(li);
    }

    //默认第一张显示
    $(".img li:eq(0)").show();
    //默认自动创建第一个li添加active类
    $(".num li:eq(0)").addClass("active");
    //鼠标移入数字按钮手动切换图片
    $(".num li").mousemove(function () {
        $(this).addClass("active").siblings().removeClass();
        var num = $(this).index();
        //鼠标移动和手动移动同步
        i = num;
        //存在问题待改进x
        $(".img li").eq(num).siblings().stop().fadeOut(1000);
        $(".img li").eq(num).fadeIn(1000);
    });
    //向左切换
    $(".out .left").click(function () {
        moveL();
    });
    //向右点击切换
    $(".out .right").click(function () {
        move();
    });

    var i = 0;
    //计时器
    var time = setInterval(move, 2000);
    //向右移动自动轮播
    function move() {
        i++;
        if (i == size) {
            i = 0;
        }
        $(".num li:eq(" + i + ")").addClass("active").siblings().removeClass();
        $(".img li:eq(" + i + ")").fadeIn(2000).siblings().stop().fadeOut(2000);

    }

    //向左移动
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;
        }
        $(".num li:eq(" + i + ")").addClass("active").siblings().removeClass();
        $(".img li:eq(" + i + ")").fadeIn(2000).siblings().fadeOut(2000);
    }

    //鼠标移到图片轮播停止，移出轮播开始
    $(".out").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move, 2000);
    });

})
