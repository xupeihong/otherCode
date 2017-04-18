$(function () {
    $("#button").click(function () {
        //点击按钮 游戏开始 随机出现两个数字  2或4 并且放在16个div其中两个里面。
//                divs.empty();
        var divs = $(".kj div");
        divs.empty();
        shengcheng();
        shengcheng();
        addClassAll()
    });
    //var arr = [0, 1, 2, 3, 4];
    //alert(arr[2])
    function shengcheng() {
        var divobj = [];
        var suijishu1 = Math.random() > 0.5 ? "2" : "4";
        for (var i = 0; i <= 15; i++) {
            if ($(".kj div").eq(i).html() == "") {
                divobj.push($(".kj div").eq(i));
            }
        }
        var divindex = parseInt(Math.random() * divobj.length);
        divobj[divindex].html(suijishu1);
    }

    function addClassAll() {
        $(".kj div").each(function (index, elem) {
            var num = elem.innerText;
            $(elem).removeClass().addClass("bg" + num);
        });
    }

    function zuo(col1, col2) {
        var divs = $(".kj div");
        for (var i = 0; i < 4; i++) {
            if (divs[obj[i][col2]].innerText == "") {

            } else if (divs[obj[i][col1]].innerText == "") {
                divs[obj[i][col1]].innerText = divs[obj[i][col2]].innerText;
                divs[obj[i][col2]].innerText = "";
            } else if (divs[obj[i][col1]].innerText == divs[obj[i][col2]].innerText&&divs[obj[i][col1]].innerText.indexOf("a")==-1) {
                divs[obj[i][col1]].innerText = divs[obj[i][col1]].innerText * 2+"a";
                divs[obj[i][col2]].innerText = "";
            }
        }
    }

    function rowUpMove(row1, row2) {
        var divs = $(".kj div");
        for (var i = 0; i < 4; i++) {
            var div1 = divs[obj[row1][i]];
            var div2 = divs[obj[row2][i]];
            if (div2.innerText == "") {

            } else if (div1.innerText == "") {
                div1.innerText = div2.innerText;
                div2.innerText = "";
            } else if (div1.innerText == div2.innerText&&div1.innerText.indexOf("a")==-1) {
                div1.innerText = div1.innerText * 2+"a";
                div2.innerText = "";
            }
        }

    }

    var obj = [[0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15]];


    $(window).keyup(function (e) {
        var divs = $(".kj div");

        var ev = e || event;
        switch (e.keyCode) {
            case 37:    //按下键盘←（左）的时候
                for (var i = 0; i < 4; i++) {
                    zuo(0, 1);
                    zuo(1, 2);
                    zuo(2, 3);
                }
                for(var i=0;i<divs.length;i++){
                    var a=  divs[i].innerText;
                    divs[i].innerText=a.replace("a","");

                }
                shengcheng();
                addClassAll();
                break;

            case 38:  //上
                for (var i = 0; i < 3; i++) {
                    rowUpMove(0, 1);
                    rowUpMove(1, 2);
                    rowUpMove(2, 3);
                }
                for(var i=0;i<divs.length;i++){
                    var a=  divs[i].innerText;
                    divs[i].innerText=a.replace("a","");

                }
                shengcheng();
                addClassAll()
                break;
            case 40: //下
                for (var i = 0; i < 3; i++) {
                    rowUpMove(3, 2);
                    rowUpMove(2, 1);
                    rowUpMove(1, 0);
                }
                for(var i=0;i<divs.length;i++){
                    var a=  divs[i].innerText;
                    divs[i].innerText=a.replace("a","");

                }
                shengcheng();
                addClassAll()
                break;
            case 39:  //右
                for (var i = 0; i < 3;   i++) {
                    zuo(3, 2);
                    zuo(2, 1);
                    zuo(1, 0);
                }
                for(var i=0;i<divs.length;i++){
                    var a=  divs[i].innerText;
                    divs[i].innerText=a.replace("a","");

                }
                shengcheng();
                addClassAll()
        }
    })
});
