$(function () {

    // 左边页面
    $("#xuanzeyouxiang").click(function () {  //点击注册邮箱事件
        $(".youce").hide();
        $(".left_a").css({"background": "url(img/zhuce/left_2.png) left bottom","color":"#616c72"});
        $(this).css("background", "url(img/zhuce/left_2.png) left top");
        $("#xuanzeyouxiang").css("color","#fff");

        $(".QQzhanghao").css("background", "url(img/zhuce/index_icon_1.png) 0 -96px");
        $(".youxiangzhanghao").css("background", "url(img/zhuce/index_icon_1.png) 0 -48px");
        $(".youce").css("display", "none");
        $(".youce2").css("display", "block");

    });

    $("#QQzhanghao").click(function () {  //点击选择注册QQ账号事件
        $(".youce").show();
        $("#QQzhanghao").css("color","#fff");
        $("#xuanzeyouxiang").css("color","#616c72");
        $(this).css("background", "url(img/zhuce/left_2.png) left top");
        $("#xuanzeyouxiang").css("background", "url(img/zhuce/left_2.png) left bottom");
        $(".QQzhanghao").css("background", "url(img/zhuce/index_icon_1.png) 0 -146px");
        $(".youxiangzhanghao").css("background", "url(img/zhuce/index_icon_1.png) 0 -8px");
        $(".youce").css("display", "block");
        $(".youce2").css("display", "none");
    });

    $(".left_3 input").click(function () {   //搜索获得焦点事件
        $(this).val("")
    });
    $(".left_3 input").keyup(function () {    //失去焦点事件
        if ($(this).val() != "") {
            $("#btn").css("display", "block")
        } else {
            $(this).val("输入想要的4-10位数字");
            $("#btn").css("display", "none");
        }
    });

    $(".lia1").mousemove(function () {  //生日移入事件
        $(this).css({"background": "url(img/zhuce/index_icon_1.png) -310px -449px", "color": "#59AFE4"})
    });
    $(".lia1").mouseout(function () {  //生日移出事件
        $(this).css({"background": "url(img/zhuce/ipt.png) -267px -70px", "color": "#696969"})
    });

    $(".lia2").mousemove(function () {  //爱情移入事件
        $(this).css({"background": "url(img/zhuce/index_icon_1.png) -311px -537px", "color": "#59AFE4"})
    });
    $(".lia2").mouseout(function () {  //爱情移出事件
        $(this).css({"background": "url(img/zhuce/ipt.png) -267px -97px", "color": "#696969"})
    });

    $(".lia3").mousemove(function () {  //手机移入事件
        $(this).css({"background": "url(img/zhuce/index_icon_1.png) -311px -508px", "color": "#59AFE4"})
    });
    $(".lia3").mouseout(function () {  //手机移出事件
        $(this).css({"background": "url(img/zhuce/ipt.png?) -267px -182px", "color": "#696969"})
    });

    $(".lia4").mousemove(function () {  //年度移入事件
        $(this).css({"background": "url(img/zhuce/index_icon_1.png) -310px -423px", "color": "#59AFE4"})
    });
    $(".lia4").mouseout(function () {  //年度移出事件
        $(this).css({"background": "url(img/zhuce/ipt.png) -267px -152px", "color": "#696969"})
    });


    //右边页面
    var nicheng = $("#nicheng");
    nicheng.focus(function () {     //当昵称获得焦点事件
        $("#nichengspan").html("请输入昵称").css({"color": "grey", "background": "#f7fcfe"});
        $(this).css("border", "1px solid #c0d0d8"); //设置边框颜色
    });
    nicheng.keyup(function () {
        if ($("#nicheng").val() == " ") {
            $("#nichengspan").html("昵称不可以为空格")
        }
    });
    nicheng.blur(function () {     //当昵称失去焦点事件
        if (nicheng.val() != "") {
            $("#nichengspan").html(" ");
            return;
        }
        if (nicheng.val() == "") {
            $(nicheng).css("border", "1px solid red");
            $("#nichengspan").html("昵称不可以为空").
                css({
                    "background": "url(img/zhuce/pwd_sprite.png) 0 -342px",
                    "color": "red"
                });
        }
    });

    //密码部分
    var pwd = $("#pwd");
    pwd.focus(function () {    //密码获得焦点事件
        pwd.css("border", "1px solid #c0d0d8");
        $("#mimaspan").css("display", "block")
    });

    pwd.blur(function () {          //密码失去焦点事件
        if (pwd.val().length < 6 || pwd.val().length > 16 || pwd.val().indexOf(" ") > -1) {
            pwd.css("border", "1px solid red");
        }
    });

    pwd.keyup(function () {           //密码按键按下事件
        var mima = $("#pwd");
        if (mima.val().length >= 6 && mima.val().length < 16) {
            $("#mimaspan div").eq(0).css("background", "url(img/zhuce/pwd_sprite.png) 0 -247px");
        } else {
            $("#mimaspan div").eq(0).css("background", "url(img/zhuce/pwd_sprite.png) 0 -215px");
        }
        if (mima.val().indexOf(" ") < 0) {
            $($("#mimaspan div")[1]).css("background", "url(img/zhuce/pwd_sprite.png) 0 -247px");
        } else {
            $("#mimaspan div").eq(1).css("background", "url(img/zhuce/pwd_sprite.png) 0 -215px");
        }
        for(var i=0;i<9;i++){
            if (isNaN(mima.val().indexOf(i))) {

            } else {
                $("#mimaspan div").eq(2).css("background","url(img/zhuce/pwd_sprite.png) 0 -247px")
            }
        }

    });

    //确认密码部分
    var querenmima = $("#querenmima");
    querenmima.focus(function () {                //确认密码获得焦点
        $(this).css("border", "1px solid #c0d0d8");
    });

    querenmima.blur(function () {         //确认密码失去焦点
        if (querenmima.html() == "") {
            $(this).css("border", "1px solid red");
            $("#querenspan").html("请再次输入密码")
        }
        if (querenmima.val() != pwd.val()) {
            $("#querenspan").css({"color": "red", "background": "url(img/zhuce/pwd_sprite.png) 0 -351px"}).html("密码不一致")
        }
        if (querenmima.val() == $("#pwd").val()) {
            $("#querenspan").css({"background": "url(img/zhuce/pwd_sprite.png) 0 -247px", "color": "#fff"}).html("1");
            querenmima.css("border", "1px solid #c0d0d8")
        }
        if (querenmima.val() == pwd.val()) {
            $("#querenspan").css("background", "url(img/zhuce/pwd_sprite.png) 0px -247px;;")
        }
    });

    querenmima.keyup(function () {      //确认密码按键按下事件
        if (querenmima.val() == $("#pwd").val()) {
            $("#querenspan").css({"background": "url(img/zhuce/pwd_sprite.png) 0 -247px", "color": "#fff"}).html("1")
        }
        if (querenmima.val() != pwd.val()) {
            $("#querenspan").css({"color": "red", "background": "url(img/zhuce/pwd_sprite.png) 0 -351px"}).html("密码不一致")
        }
    });

    $("#a1").click(function () {   //公历单击事件
        $(".gongliul").slideToggle();
    });

    $("#gongli").click(function () {     //换公历
        var html = $("#gongli").html();
        $("#a1").html(html);
        $(".gongliul").css("display", "none");
    });
    $("#nongli").click(function () {   //换农历
        var html = $("#nongli").html();
        $("#a1").html(html);
        $(".gongliul").css("display", "none");
    });

    function nian() {          //年的函数   创建li
        var nian2 = 1890;
        for (var i = 0; i < 128; i++) {
            var li = $('<li></li>');
            li.html(nian2 + i);
            li.appendTo($("#nian"));
        }
    }

    nian();
    $("#a2").click(function () {      //点击年的时候，出现选择
        $("#nian").slideToggle();
    });

    $("#nian li").click(function () {   //年
        var html = $(this).html();
        $("#a2").html(html);
        $("#nian").css("display", "none")
    });

    yue();
    $("#a3").click(function () {   //月出现选项
        $("#yue").slideToggle();
    });

    $("#yue li").click(function () {  //月
        var html = $(this).html();
        $("#a3").html(html);
        $("#yue").css("display", "none")
    });

    function yue() {
        var yue2 = "月";
        for (var i = 1; i <= 12; i++) {
            var li = $('<li></li>');
            li.html(i + yue2);
            li.appendTo($("#yue"));
        }
    }


    function ri() {        //日 天数
        var ri2 = "日";
        for (var i = 1; i <= 31; i++) {
            var li = $("<li></li>");
            li.html(i + ri2);
            li.appendTo($("#ri"))
        }
    }

    ri();
    $("#a4").click(function () {  //点击日 出现选择
        $("#ri").slideToggle();
    });

    $("#ri li").click(function () {
        var html = $(this).html();
        $("#a4").html(html);
        $("#ri").css("display", "none");
        if ($("#a4").html() != "") {
            $("#imgtu").css({"display": "block"});
        }
    });

    $("#bg").click(function () {
        $("#bg div").slideToggle();
        $("#bg span").slideToggle();
    })


});


//第二个页面
$(function () {
    yemian2();
    function yemian2() {

        //邮箱验证部分
        youxiangyanzheng();
        function youxiangyanzheng() {
            var youxiang = $(".youxiangtext");
            var zhengze=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            var y2 = $(".youxiang2");
            youxiang.focus(function () {       //获得焦点
                y2.css("display", "block");
                y2.html("请输入您常用的电子邮箱"+'<br>'
                     +"<a>创建邮箱+</a>或"+'<a>注册普通QQ号</a>>' );
                y2.css({"padding-left":"2px","left":"563px","top":"2px"," fontsize":"12px",
                "background":"#f7fcfe","line-height":"18px","color":"grey"})

            });
            youxiang.blur(function () {          //失去焦点
                if (youxiang.val() == "") {
                    y2.html("请输入邮箱").css({
                        "background": "url(img/zhuce/pwd_sprite.png) 0px -342px",
                        "line-height": "34px",
                        "padding-left": "16px"
                    })
                }
                //alert(zhengze.test(zhi));
              else  if (zhengze.test($(this).val())) {
                    y2.css({"background": "url(img/zhuce/pwd_sprite.png) 0px -247px","color":"#F7FCFE"}).html("1")
                }else  {
                    y2.html("请重新输入").css({"background": "url(img/zhuce/pwd_sprite.png) 0 -347px","line-height":"25px","padding-left":"15px"})
                }

            });

            youxiang.keyup(function () {
                 //console.log(  )//邮箱按键按下事件

                if (zhengze.test($(this).val())) {
                    y2.html("输入正确").css({"background":"url(img/zhuce/pwd_sprite.png) 0px -247px","text-indent":"13px","line-height":"22px"})
                }else{
                    y2.html("")
                }

            });
        }


        // 昵称部分
        var nicheng = $(".nicheng");
        nicheng.focus(function () {     //当昵称获得焦点事件
            $(".nichengspan").html("请输入昵称").css({"color": "grey", "background": "#f7fcfe"});
            $(this).css("border", "1px solid #c0d0d8"); //设置边框颜色
        });
        nicheng.keyup(function () {
            if (nicheng.val() == " ") {
                $(".nichengspan").html("昵称不可以为空格")
            }
        });
        nicheng.blur(function () {     //当昵称失去焦点事件
            if (nicheng.val() != "") {
                $(".nichengspan").html(" ");
                return;
            }
            if (nicheng.val() == "") {
                $(nicheng).css("border", "1px solid red");
                $(".nichengspan").html("昵称不可以为空").
                    css({
                        "background": "url(img/zhuce/pwd_sprite.png) 0 -342px",
                        "color": "red"
                    });
            }
        });

        //密码部分
        var pwd = $("#pwd1");
        pwd.focus(function () {    //密码获得焦点事件
            pwd.css("border", "1px solid #c0d0d8");
            $(".mimaspan").css("display", "block")
        });

        pwd.blur(function () {          //密码失去焦点事件
            if (pwd.val().length < 6 || pwd.val().length > 16 || pwd.val().indexOf(" ") > -1) {
                pwd.css("border", "1px solid red");
            }
        });

        pwd.keyup(function () {           //密码按键按下事件
            var mima = $("#pwd1");
            if (mima.val().length >= 6 && mima.val().length < 16) {
                $(".mimaspan div").eq(0).css("background", "url(img/zhuce/pwd_sprite.png) 0 -247px");
            } else {
                $(".mimaspan div").eq(0).css("background", "url(img/zhuce/pwd_sprite.png) 0 -215px");
            }
            if (mima.val().indexOf(" ") < 0) {
                $($(".mimaspan div")[1]).css("background", "url(img/zhuce/pwd_sprite.png) 0 -247px");
            } else {
                $(".mimaspan div").eq(1).css("background", "url(img/zhuce/pwd_sprite.png) 0 -215px");
            }
            for(var i=0;i<9;i++){
                if (isNaN(mima.val().indexOf(i))) {

                } else {
                    $(".mimaspan div").eq(2).css("background","url(img/zhuce/pwd_sprite.png) 0 -247px")
                }
            }
        });

        //确认密码部分
        var querenmima = $("#querenmima2");
        querenmima.focus(function () {                //确认密码获得焦点
            $(this).css("border", "1px solid #c0d0d8");
        });

        querenmima.blur(function () {         //确认密码失去焦点
            if (querenmima.html() == "") {
                $(this).css("border", "1px solid red");
                $(".querenspan").html("请再次输入密码")
            }
            if (querenmima.val() != pwd.val()) {
                $(".querenspan").css({"color": "red", "background": "url(img/zhuce/pwd_sprite.png) 0 -351px"}).html("密码不一致")
            }
            if (querenmima.val() == $("#pwd").val()) {
                $(".querenspan").css({"background": "url(img/zhuce/pwd_sprite.png) 0 -247px", "color": "#fff"}).html("1");
                querenmima.css("border", "1px solid #c0d0d8")
            }
            if (querenmima.val() == pwd.val()) {
                $(".querenspan").css("background", "url(img/zhuce/pwd_sprite.png) 0px -247px;;")
            }
        });

        querenmima.keyup(function () {      //确认密码按键按下事件
            if (querenmima.val() == $("#pwd1").val()) {
                $(".querenspan").css({"background": "url(img/zhuce/pwd_sprite.png) 0 -247px", "color": "#fff"}).html("1")
            }
            if (querenmima.val() != pwd.val()) {
                $(".querenspan").css({"color": "red", "background": "url(img/zhuce/pwd_sprite.png) 0 -351px"}).html("密码不一致")
            }
        });


        $("#a11").click(function () {   //公历单击事件
            $(".gongliul").slideToggle();
        });

        $("#gongli2").click(function () {     //换公历
            var html = $("#gongli2").html();
            $("#a11").html(html);
            $(".gongliul").css("display", "none");
        });
        $("#nongli2").click(function () {   //换农历
            var html = $("#nongli2").html();
            $("#a11").html(html);
            $(".gongliul").css("display", "none");
        });

        function nian2() {          //年的函数   创建li
            var nian2 = 1890;
            for (var i = 0; i < 128; i++) {
                var li = $('<li></li>');
                li.html(nian2 + i);
                li.appendTo($("#nian2"));
            }
        }

        nian2();
        $("#a22").click(function () {      //点击年的时候，出现选择
            $("#nian2").slideToggle();
        });

        $("#nian2 li").click(function () {   //年
            var html = $(this).html();
            $("#a22").html(html);
            $("#nian2").css("display", "none")
        });

        yue2();
        $("#a33").click(function () {   //月出现选项
            $("#yue2").slideToggle();
        });

        $("#yue2 li").click(function () {  //月
            var html = $(this).html();
            $("#a33").html(html);
            $("#yue2").css("display", "none")
        });

        function yue2() {
            var yue2 = "月";
            for (var i = 1; i <= 12; i++) {
                var li = $('<li></li>');
                li.html(i + yue2);
                li.appendTo($("#yue2"));
            }
        }


        function ri() {        //日 天数
            var ri2 = "日";
            for (var i = 1; i <= 31; i++) {
                var li = $("<li></li>");
                li.html(i + ri2);
                li.appendTo($("#ri2"))
            }
        }

        ri();
        $("#a44").click(function () {  //点击日 出现选择
            $("#ri2").slideToggle();
        });

        $("#ri2 li").click(function () {
            var html = $(this).html();
            $("#a44").html(html);
            $("#ri2").css("display", "none");
            if ($("#a44").html() != "") {
                $("#imgtu2").css({"display": "block"});
            }
        });



        $("#bg2").click(function () {
            $("#bg2 div").slideToggle();
            $("#bg2 span").slideToggle();
        })

    }


});




