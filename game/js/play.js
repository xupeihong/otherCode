$(document).ready(function () {
    var type = true;

    function success() {
        if (type) {
            $(".dialog").remove();
            //创建div标签
            var str = $("<div></div>");
            //添加类
            str.addClass("dialog");
            //装汉字
            var p2 = $("<p></p>");
            p2.addClass("dialog-btn");
            str.append(p2);
            //var txtd = infoDAte.fail;
            var txts = infoDAte.success;
            var i = 0;
            var num = 0;
            if (type) {
                i = parseInt(Math.random() * 10);//判断奇偶数
                //num = parseInt(Math.random() * 20);//随机哪个行
                alert("随机数" + i);
                p2.html(txts[i]);
                type = false;
            }
            //创建p标签
            var p = $("<p></p>");
            //添加类
            p.addClass("dialog-btn");
            //创建a标签
            var a1 = $("<a></a>");
            //添加a类
            a1.addClass("play-agin");
            //添加属性
            a1.attr("href", "javascript:void(0)");
            //添加内容
            a1.html("闯关成功");
            //创建a标签
            var a2 = $("<a></a>");
            //添加类
            a2.addClass("play-agin");
            //属性
            a2.attr("href", "javascript:void(0)");
            //添加内容
            a2.html("再来一次");
            //将p添加到div标签
            str.append(p);
            //将a标签添加到p标签
            p.append(a1);
            p.append(a2);
            //将div添加到container后面
            $(".container").after(str);
            type = false;
        }
    }

    var type2 = true;

    function infofail() {
        if (type) {
            $(".dialog").remove();
            //创建div标签
            var str = $("<div></div>");
            //添加类
            str.addClass("dialog");
            //装汉字
            var p2 = $("<p></p>");
            p2.addClass("dialog-btn");
            str.append(p2);
            var txtd = infoDAte.fail;
            //var txts = infoDAte.success;
            var i = 0;
            var num = 0;
            if (type) {
                i = parseInt(Math.random() * 10);//判断奇偶数
                // num = parseInt(Math.random() * 20);//随机哪个行
                alert("随机数" + i);
                p2.html(txtd[i]);
                type = false;
            }
            //创建p标签
            var p = $("<p></p>");
            //添加类
            p.addClass("dialog-btn");
            //创建a标签
            var a1 = $("<a></a>");
            //添加a类
            a1.addClass("play-agin");
            //添加属性
            a1.attr("href", "javascript:void(0)");
            //奇数
            //添加内容
            a1.html("闯关失败");
            //创建a标签
            var a2 = $("<a></a>");
            //添加类
            a2.addClass("play-agin");
            //属性
            a2.attr("href", "javascript:void(0)");
            //添加内容
            a2.html("再来一次");
            //将p添加到div标签
            str.append(p);
            //将a标签添加到p标签
            p.append(a1);
            p.append(a2);
            //将div添加到container后面
            $(".container").after(str);
            type = false;
        }

    }

    //点击按钮关闭
    $("body").on("click", ".play-agin", function () {
        $(this).parent().parent().hide();
        type = true;
    })
})