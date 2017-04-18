/**
 * Created by lenovo on 2017/3/3.
 */
$(function () {
    //大导航栏
    $(".busi-nav").hover(function () {
        var index = $(this).index();
        $(".menu-left-bd .busi-nav-panel:eq(" + index + ")").show();

    }, function () {
        var index = $(this).index();
        $(".menu-left-bd .busi-nav-panel:eq(" + index + ")").hide();
    })
    //轮播图
    $(".img li:eq(0)").show();
    $(".num li").mousemove(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var num = $(this).index();
        i = num;
        $(".img li:eq(" + num + ")").show().siblings().hide();
    })
    //计时器
    var i = 0;
    var time = setInterval(move, 2000);
    //自动播放函数
    function move() {
        i++;
        if (i == 2) {
            i = 0;
        }
        $(".num li:eq(" + i + ")").addClass("active").siblings().removeClass("active");
        $(".img li:eq(" + i + ")").show().siblings().hide();
    }

    //鼠标移入暂停轮播
    $(".sec-main-lunbo").hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(move, 2000);
    })
    //彩贝商旅阴影
    $(".xiaobg").hover(function () {
        $(".bgfanli").show();
        $(".gaoganli").show();

    }, function () {
        $(".bgfanli").hide();
        $(".gaoganli").hide();

    })
    $(".xiaobg2").hover(function () {

        $(".bgfanli2").show();
        $(".gaoganli2").show();
    }, function () {

        $(".bgfanli2").hide();
        $(".gaoganli2").hide();
    })
    $(".xiaobg3").hover(function () {
        $(".bgfanli3").show();
        $(".gaoganli3").show();
    }, function () {
        $(".bgfanli3").hide();
        $(".gaoganli3").hide();
    })
    // 扫码登陆
    $(".login").click(function () {
        $(".login1").attr("display", "block");
        $(".login1").show();
    })
    $(".login2").click(function () {
        $(".login1").attr("display", "block");
        $(".login1").show();
    })
    //点击注册新账号跳转
    $(".goregis").click(function () {
        $(".login1").attr("display", "block");
        $(".goregis").attr("href", "xiangmu.html");
    })
    //关闭按钮
    $(".close").click(function () {
        $(this).parent().hide();
    })
    //立即查看
    setInterval(remove, 0);
    function remove() {
        var height = $(document).scrollTop();
        if (height > 20) {
            $(".right-box").hide();
        }
        else {
            $(".right-box").show();
        }
    }

//    回到最上方
    setInterval(go, 0);
    function go() {
        var height = $(document).scrollTop();
        if (height > 20) {
            $(".toTop").show();
        }
        else {
            $(".toTop").hide();
        }
    }

//    top
    $(".mod-top-btn").click(function () {
        $("body,html").animate({"scrollTop": 0}, 200);
        return false;
    })
    //鼠标移入显示微信
    $(".wx-sc").hover(function () {
        $(".wx-bd").show();
    }, function () {
        $(".wx-bd").hide();
    })
    //彩贝步骤
    $(".mod-top-edu").hover(function () {
        $(".edu-db").show();
    }, function () {
        $(".edu-db").hide();
    })

    //二级菜单
    $(".item_about").hover(function () {
        $(".item_list").show();
    }, function () {
        $(".item_list").hide();
    })

})