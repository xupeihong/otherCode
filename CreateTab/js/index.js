/**
 * Created by lenovo on 2017/2/15.
 */
$(function () {
    //全选
    var ckall = $("#ckAll");
    ckall.click(function () {
        var ck = $("[name='ck']");
        for (var i = 0; i < ck.length; i++) {
            ck[i].checked = this.checked;
        }
    });
    //点击每行删除按钮进行删除
    $("tbody").on("click", "[name='del']", function () {
        if (confirm("是否真的要删除？")) {
            $(this).parents("tr").remove();
        }
        getSum();
    });
    //修改操作
    $("tbody").on("click", "[name='edite']", function () {
        //查找tbody下的所有td
        var td = $(this).parents("tr").find("td");
        if ($(this).text() == "修改") {
            var txt = td.eq(1).text();
            td.eq(1).html("<input type='text' value='" + txt + "'>");
            txt = td.eq(2).text();
            td.eq(2).html("<input type='text' value='" + txt + "'>");
            txt = td.eq(3).text();
            td.eq(3).html("<input type='text' value='" + txt + "'>");
            $(this).html("确定");
        }
        else {
            if (confirm("确定要修改吗？")) {
                var td1 = td.eq(1);
                var td2 = td.eq(2);
                var td3 = td.eq(3);
                var inpu = $(this).parents("tr").find("input");
                var input1 = inpu.eq(1).val();
                var input2 = inpu.eq(2).val();
                var input3 = inpu.eq(3).val();
                td1.html(input1);
                td2.html(input2);
                td3.html(input3);
                $(this).html("修改");
                getSum();
            }
        }
    })
});
//添加信息
function addRow() {
    var name = $("[name='student']").val();
    var sex = $("[name='gender']").val();
    var score = $("[name='score']").val();
    if (name == "") {
        alert("姓名不能为空");
        return;
    }
    if (sex == "") {
        alert("性别不能为空");
        return;
    }
    if (score == "") {
        alert("分数不能为空");
        return;
    }
    var tr = $("<tr></tr>");
    var td = $("<td></td>");
    var input = $("<input/>");
    input.attr("type", "checkbox").attr("name", "ck");
    input.appendTo(td);
    td.appendTo(tr);
    td = $("<td></td>");
    td.html(name);
    tr.append(td);
    td = $("<td></td>");
    td.html(sex);
    tr.append(td);
    td = $("<td></td>");
    td.html(score);
    tr.append(td);
    td = $("<td></td>");
    var a = $("<a></a>");
    a.attr("href", "javascript:void(0)");
    a.attr("name", "del");
    a.html("删除 ");
    td.append(a);
    a = $("<a></a>");
    a.attr("href", "javascript:void(0)").attr("name", "edite").html("修改").appendTo(td);
    tr.append(td);
    $("tbody").append(tr);
    getSum();
}
//删除所选
function delCks() {
    var ck = $("[name='ck']");
    ck.each(function (index, elem) {
        if (elem.checked) {
            $(elem).parents("tr").remove();
        }
        getSum();
    })

}
//计算总分
function getSum() {
    var trs = $("tbody tr");
    var sum = 0;
    for (var i = 0; i < trs.length; i++) {
        if ($(trs[i]).find("td").eq(3).text() != "") {
            sum += parseInt($(trs[i]).find("td").eq(3).text());
        }
    }
    //将最后的分数赋值给score
    $("tfoot tr td").eq(1).html(sum);
}