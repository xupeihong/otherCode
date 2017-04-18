/**
 * Created by lenovo on 2017/3/7.
 */
$(function () {
    //获取焦点边框变色
    $(".searinput").focus(function () {
        $(this).css("border", "1px solid red");
    }).blur(function () {
        $(this).css("border-color", "#E4E4E4");
    })
    //菜单栏样式设置
    $(".index").siblings().css({"width": "98px", "height": "40px", "text-align": "center"});
    $(".index").siblings().hover(function () {
        $(this).css("background", "rgb(216,58,0)");
    }, function () {
        $(this).css("background", "");
    })
    $(".divshow").hover(function () {
        $(".cell").show();
    }, function () {
        $(".cell").hide();
    })

    //轮播图
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
        if (i == 3) {
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
    //瀑布流
    $(window).on("load", function () {
        /* var dataImg = {
         "data": [{"src": "1.jpg"}, {"src": "2.png"}, {"src": "3.jpg"}, {"src": "4.png"}]
         }*/
        window.onscroll = function () {
            // if (scollside()) {
            /* $.each(dataImg.data, function (index, dele) {
             var box = $("<div>").addClass("box").appendTo($(".bupuliu"));
             var contetn = $("<div>").addClass("content").appendTo(box);
             $("<img>").attr("src", "./img/" + $(dele).attr("src")).appendTo(contetn);
             });*/
            imgLocation();
            // }

        }
    });
});
function scollside() {
    var box = $(".box");
    var lasthH = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var scoreH = $(window).scrollTop();
    var documentH = $(document).width();
    return (lasthH < scoreH + documentH) ? true : false;


}
//图片自动排版的方法
function imgLocation() {
    var box = $(".box");
    var boxW = box.eq(0).width();
    //每行可以放几个
    var num = Math.floor($(window).width() / boxW);
    var boxArr = [];
    box.each(function (index, elem) {
        var boxH = box.eq(index).height();//每个图片的高度
        if (index < num) {
            boxArr[index] = boxH;
        }
        else {
            var minH = Math.min.apply(null, boxArr);
            //获取最小的高度
            var minboxIndex = $.inArray(minH, boxArr);
            $(elem).css({
                "position": "absolute",
                "top": minH,
                "left": box.eq(minboxIndex).position().left
            })
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });

}