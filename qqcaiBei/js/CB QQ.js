
function change(e) {
    if(e==1){
        var changea=document.getElementById("benqi");
        var changeb= document.getElementById("xiaqi");
        var timebars=document.getElementById("timebars");
        var benqigift=document.getElementById("benqigift");
        var xiaqigift=document.getElementById("xiaqigift");
        var activetime=document.getElementById("activetime");
        changea.style="background-position:-95px -48px;";
        changeb.style="background-position:0px -48px";
        benqigift.style="color:#fff";//白色
        xiaqigift.style="color:#000";//黑色
        timebars.innerHTML="活动时间：2013.08.03-2014.02.28";
    }else {
        var changea=document.getElementById("benqi");
        var changeb= document.getElementById("xiaqi");
        var timebars=document.getElementById("timebars");
        changeb.style="background-position:-95px -48px;";
        changea.style="background-position:0px -48px;";
        var benqigift=document.getElementById("benqigift");
        var xiaqigift=document.getElementById("xiaqigift");
        benqigift.style="color:#000";//黑色
        xiaqigift.style="color:#fff";//白色
        timebars.innerHTML="活动时间：2014.03.01-2014.06.30";
    }

}

