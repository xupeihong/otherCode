$(document).ready(function ()
{
    $(".menu_down").hover(function () { $(this).children(".menu_down_con").fadeIn(0); }, function () { $(this).children(".menu_down_con").fadeOut(0); })
    $(".menu ul li").hover(function () { $(this).find("span a").addClass("menu_hover") }, function () { $(this).find("span a").removeClass("menu_hover") })
	$(".menu ul .menu_down").hover(function () { $(this).find("span a").addClass("menu_hover02") }, function () { $(this).find("span a").removeClass("menu_hover02") })
	
	
	
	$(".gwlct_con dl").hover(
		function(){$(this).children("dd").animate({marginTop:"10px"},100).css("color","#fff")},
		function(){$(this).children("dd").animate({marginTop:"0px"},100).css("color","#ffd2d2")}
	)
    
	 $(".dz_ys table tr td").hover(
	 	function(){$(this).find("img").animate({marginTop:"30px"},300)},
		function(){$(this).find("img").animate({marginTop:"50px"},300)}
	 )
	 $(".dz_anli table tr td").hover(
	 	function(){$(this).css({opacity:"1"})},
		function(){$(this).css({opacity:"0.4"})}
	 )
	
    //
    $(".web_input_con").hover(function ()
    {
        $(this).addClass("web_input_con_hover")
    }, function ()
    {
        $(this).removeClass("web_input_con_hover")
    })

    //
    $(".xiq").hover(function ()
    {
        $(this).addClass("xiq_h")
        var ss = $(this).next(".s_do");
        ss.animate({ width: "130px" }, 280);
    }, function ()
    {
        $(this).removeClass("xiq_h")
        setTimeout(function () { }, 20);
    })
    //���ʱش� �鿴����
    $(".s_do").hover(function ()
    {
    }, function ()
    {
        $(this).animate({ width: "0px" }, 200);
    })

    $(".bangzhu_menu .top_3_left").hover(
		function () { $(this).children(".side").css("display", "block") },
		function () { $(this).children(".side").css("display", "none") }
	)
    //goumai
    $(".goumai_01 ul li").each(function ()
    {
        $(this).find("dd").click(function ()
        {
            $(this).siblings().removeClass("gm_hover");
            $(this).addClass("gm_hover");
            price();
        })
    })
    $(".goumai_01 ul li").hover(
		function () { $(this).css("background", "#f9f9f9") },
		function () { $(this).css("background", "none") }
	)
    //֧����ʽ
    $(".gm_zfff .bd ul span").click(function ()
    {
        $(this).siblings().removeClass("zf_hover");
        $(this).addClass("zf_hover");
    })
})

//peisong
$(document).ready(function ()
{
    $(".peisong_02  table  tr th:even").css("background", "#ffb786")
    $(".peisong_02  table  tr th:odd").css("background", "#c8e3a2")
    $(".peisong_02  table  tr:even").css("background", "#eff8e4")
    $(".peisong_02  table  tr:odd").css("background", "#fff4ee")
    $(".peisong_02  table  tr:even  td:even").css("background", "#eff8e4")
    $(".peisong_02  table  tr:odd  td:even").css("background", "#fff4ee")
    $(".peisong_02  table tr:odd td:odd").hover(function () { $(this).addClass("peisong_hover01") }, function () { $(this).removeClass("peisong_hover01") })
    $(".peisong_02  table tr:even td:odd").hover(function () { $(this).addClass("peisong_hover02") }, function () { $(this).removeClass("peisong_hover02") })
})
/*��ҳbanner*/
$(document).ready(function ()
{
    var ali = $('#lunbonum li');
    var aPage = $('#lunhuanback p');
    var aslide_img = $('.lunhuancenter b');
    var iNow = 0;

    ali.each(function (index)
    {
        $(this).mouseover(function ()
        {
            slide(index);
        })
    });

    function slide(index)
    {
        iNow = index;
        ali.eq(index).addClass('lunboone').siblings().removeClass();
        aPage.eq(index).siblings().stop().animate({ opacity: 0 }, 600);
        aPage.eq(index).stop().animate({ opacity: 1 }, 600);
        aslide_img.eq(index).stop().animate({ opacity: 1, bottom: 120 }, 600).siblings('b').stop().animate({ opacity: 0, bottom: -37 }, 600);
    }

    function autoRun()
    {
        iNow++;
        if (iNow == ali.length)
        {
            iNow = 0;
        }
        slide(iNow);
    }

    var timer = setInterval(autoRun, 12000);

    ali.hover(function ()
    {
        clearInterval(timer);
    }, function ()
    {
        timer = setInterval(autoRun, 12000);
    });
})


$(document).ready(function ()
{
    //��������˵�
    $(".side_list").hover(
		function () { $(this).children(".side_list_con").fadeIn(200), $(this).children("h3").animate({ marginLeft: "10px" }, 100) },
		function () { $(this).children(".side_list_con").fadeOut(0), $(this).children("h3").animate({ marginLeft: "0px" }, 100) }
	)

    $(" .side_list:eq(0) h3").addClass("dao_01");
    $(" .side_list:eq(1) h3").addClass("dao_02");
    $(" .side_list:eq(2) h3").addClass("dao_03");
    $(" .side_list:eq(3) h3").addClass("dao_04");
    $(" .side_list:eq(4) h3").addClass("dao_05");
    $(" .side_list:eq(5) h3").addClass("dao_06");
    $(" .side_list:eq(6) h3").addClass("dao_07");
    $(" .side_list:eq(7) h3").addClass("dao_08");
    $(" .side_list:eq(8) h3").addClass("dao_09");
    $(" .side_list:eq(9) h3").addClass("dao_10");
    $(" .side_list:eq(10) h3").addClass("dao_11");
    $(" .side_list:eq(11) h3").addClass("dao_12");
    $(" .side_list:eq(12) h3").addClass("dao_13");

    $(".cxfw_con ul li:last").css("border", "none")

    $(".hd_hover").hover(
		function () { $(this).css("border", "#f60 solid 1px") }, function () { $(this).css("border", "#eee solid 1px") }
	)
})

//������
$.fn.smartFloat = function() {
	var position = function(element) {
		var top = element.position().top, pos = element.css("position");
		$(window).scroll(function() {
			var scrolls = $(this).scrollTop();
			if (scrolls > top) {
				if (window.XMLHttpRequest) {
					element.css({
						position: "fixed",
						top: 0
					});	
				} else {
					element.css({
						top: scrolls
					});	
				}
			}else {
				element.css({
					position: pos,
					top: top
				});	
			}
		});
};
	return $(this).each(function() {
		position($(this));						 
	});
};


$(document).ready(function() {
	$(".jmly ul li:eq(0)").css({background:"#50a18b"})
    $(".jmly ul li:eq(1)").css({marginLeft:"5px",background:"#5076a1"})
    $(".jmly ul li:eq(2)").css({marginLeft:"5px",background:"#50a159"})
	$(".jmly ul li:eq(3)").css({background:"#a18150"})
    $(".jmly ul li:eq(4)").css({marginLeft:"5px",background:"#9aa150"})
    $(".jmly ul li:eq(5)").css({marginLeft:"5px",background:"#5098a1"})
	
	$(".jmzc ul li:eq(3)").css({borderRight:"0"})
	$(".jmzc ul li:eq(7)").css({borderRight:"0"})
	$("..sqlc dl dd").hover(
		function(){$(this).css("background","#f4f4f4")},function(){$(this).css("background","none")}
	)
    
});
//����Cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}
//��ȡCookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}


