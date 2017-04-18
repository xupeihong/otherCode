var video = document.getElementById("video");
var playbtn = document.getElementById("play");
//音量
var vol = document.getElementById("voluem");
var circle = document.getElementById("circle");
var volchang = document.getElementById("volRound");
var color = document.getElementById("color");
var full = document.getElementById("quanping");
var player = document.getElementById("player");

//静音和放音
vol.addEventListener("click", mut);
//音量监听
volchang.addEventListener("mousedown", mousedownHandler);    //添加监听事件
volchang.addEventListener("mouseup", mouseupHandler);//添加监听事件
volchang.addEventListener("mousemove", mousemoveHandler);    //添加监听事件
volchang.addEventListener("click", mouseClickHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
//全屏
full.addEventListener("click", fullsc);
//音量初始值
video.muted = 0.2;

//开始播放
playbtn.onclick = function () {
    if (video.paused) {
        video.play();
        playbtn.innerHTML = "&#xe60a;";

    } else {
        video.pause();


        playbtn.innerHTML = "&#xe610;";

    }
};

//音量图标
function mut() {
    if (video.muted == false) {
        video.muted = true;
        vol.innerHTML = "&#xe60d;";
    } else {
        video.muted = false;

        vol.innerHTML = "&#xe605;";
    }
}
var type = false;
var con = false;
function mousedownHandler(e) {
    type = true;
}
function mouseupHandler() {
    type = false;
    con = false;
}
//鼠标移入控制音量
function mousemoveHandler(e) {
    if (type) {
        var v = e.pageX - volchang.offsetLeft - player.offsetLeft - 1;
        if (v > 93) {
            v = 93;
        } else if (v < -7) {
            v = -7;
        }

        circle.style = "left:" + v + "px";
        //控制红色进度条
        color.style = "width:" + (v + 7) + "px";
        video.volume = (v + 7) / 100;
        if (v == -7) {
            video.muted = true;

            vol.innerHTML = "&#xe605;";
        } else {
            video.muted = false;
            vol.innerHTML = "&#xe60d;";
        }
    }
}
//
function mouseClickHandler(e) {
    var x = e.pageX - volchang.offsetLeft - player.offsetLeft - 1;
    video.volume = x / 100;
    circle.style = "left:" + (x - 7) + "px";
    color.style = "width:" + x + "px";
    if (x == 0) {
        video.muted = true;
        vol.innerHTML = "&#xe605;";

    } else {
        video.muted = false;
        vol.innerHTML = "&#xe60d;";
    }
}
//全屏
function fullsc() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}
$(function () {
    //点击关注变色
    var xin = $("#xin");
    xin.click(function () {
        xin.css("color", "black");
    });
    //播放器移入显示
    var video = $(".player");
    video.hover(function () {
        $(".btn").show();
    }, function () {
        $(".btn").hide();
    });
    //斗鱼二维码
    var erwei = $(".logo-xin");
    erwei.hover(function () {
        $(".img").show();
    }, function () {
        $(".img").hide();
    })
    //最左侧菜单栏
    $(".slider-main").hover(function () {
        $(".slider").show();
    }, function () {
        $(".slider").hide();
    })

})











