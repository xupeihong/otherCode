/**
 * Created by lenovo on 2017/3/1.
 */
var video = document.getElementById("video");
var playbrn = document.getElementById("btn");
var noSound = document.getElementById("noSound");
var full = document.getElementById("full");
var volue = document.getElementById("volue");
var btime = document.getElementById("btime");
var ztime = document.getElementById("ztime");
var progress = document.getElementById("progress");

playbrn.addEventListener("click", playBtnClickHander);
noSound.addEventListener("click", noSoundBtnClickHander);
full.addEventListener("click", fullBtnHander);
video.addEventListener("timeupdate", progressClickHander);
//控制音量
volue.addEventListener("change", function (e) {
    var vl = this.value;
    video.volume = vl;
})
video.addEventListener("timeupdate", progressClickHander);
//设置进度条的属性durationchange
video.addEventListener("loadedmetadata", function (e) {
    progress.setAttribute("min", "0");
    progress.setAttribute("max", video.duration);
    progress.style.width = "690px";
});
progress.addEventListener("click", probtnHander);

/*video.onload=function () {
 ztime.innerHTML="0"+Math.floor(video.duration/60)+":"+(video.duration%60/100).toFixed(2).slice(-2);
 btime.innerHTML="0"+Math.floor(video.currentTime/60)+":"+(video.currentTime%60/100).toFixed(2).slice(-2);
 }*/
//播放
function playBtnClickHander(e) {
    if (video.paused) {
        video.play();
        this.innerHTML = "&#xe640";
    }
    else {
        video.pause();
        this.innerHTML = "&#xe778";
    }
}
//静音
function noSoundBtnClickHander(e) {
    if (video.muted) {
        video.muted = !video.muted;
        this.innerHTML = "&#xe637";
        //
        volue.value = "0.2";
    }
    else {
        video.muted = !video.muted;
        this.innerHTML = "&#xe62d";
        //静音进度条为0
        volue.value = "0";
    }
}
//全屏
function fullBtnHander(e) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        // video.width = window.screen.width;
    }
}

var num = Math.floor(video.duration / 60) + ":" + (video.duration % 60 / 100).toFixed(2).slice(-2);
var num2 = Math.floor(video.currentTime / 60) + ":" + (video.currentTime % 60 / 100).toFixed(2).slice(-2);
//设置播放器播放进度
function progressClickHander(e) {
    ztime.innerHTML = "0" + Math.floor(video.duration / 60) + ":" + (video.duration % 60 / 100).toFixed(2).slice(-2);
    if (video.currentTime.toFixed(2).length != 5) {
        btime.innerHTML = "0" + Math.floor(video.currentTime / 60) + ":" + (video.currentTime % 60 / 100).toFixed(2).slice(-2);
    }
    else {
        btime.innerHTML = Math.floor(video.currentTime / 60) + ":" + (video.currentTime % 60 / 100).toFixed(2).slice(-2);
    }
    progress.setAttribute("value", video.currentTime);
}
//点击进度播放
function probtnHander(e) {
    //鼠标点击的位置
    var pos = e.offsetX - this.offsetLeft;
    //比例
    var x = pos / 690;
    //利用比例关系，映射当前播放时间
    video.currentTime = video.duration * x;
}



