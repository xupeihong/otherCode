var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "mydb",
    connectionLimit: 10
})
/* GET users listing. */
/*router.get('/', function (req, res, next) {
 res.send('respond with a resource');
 });*/
//添加新闻
router.post("/addNews", function (req, res, next) {
    var newsTitle = req.body.newsTitle;
    var newsContent = req.body.newsContent;
    var newsPICPath = req.body.newsPICPath;
    var newsSource = req.body.newsSource;
    var newsDate = req.body.newsDate;
    var newsTarget = req.body.newsTarget;
    console.log(req.body);
    pool.getConnection(function (err, con) {
        con.query('insert into `news` (`newsTitle`, `newsContent`,`newsImgPath`,`newsSource`,`newsDate`,`newsTarget`) values (?,?,?,?,?,?)', [newsTitle, newsContent, newsPICPath, newsSource, newsDate, newsTarget], function (err, result, f) {
            if (!err) {
                res.send({statue: "ok", message: "添加新闻成功!"})
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});
//删除新闻
router.get("/deleteNews", function (req, res, next) {
    var id = (req.query.id);
    pool.getConnection(function (err, con) {
        con.query('delete from `news` where `newsId`=' + id + '', function (err, result, f) {
            if (!err) {
                res.send({statue: "ok", message: "删除新闻成功!", ids: id})
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});
//点击修改按钮将右边信息赋值给左边文本框新闻
router.post("/updateNews", function (req, res, next) {
    var newid = req.body.id;
    pool.getConnection(function (err, con) {
        con.query('select * from `news` where `newsId` =' + newid + '', function (err, result, f) {
            if (!err) {
                console.log(result);
                res.send({status: "ok", list: result});
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
})
//修改新闻
router.post("/update", function (req, res, next) {
    var id = req.body.id;
    var newsTitle = req.body.newsTitle;
    var newsContent = req.body.newsContent;
    var newsPICPath = req.body.newsPICPath;
    var newsSource = req.body.newsSource;
    var newsDate = req.body.newsDate;
    var newsTarget = req.body.newsTarget;
    console.log(req.body);
    pool.getConnection(function (err, con) {
        con.query('update `news` set `newsTitle`=?,`newsContent`=?,`newsImgPath`=?,' +
            '`newsSource`=?,`newsDate`=?,`newsTarget`=? where `newsId`=' + id, [newsTitle, newsContent, newsPICPath, newsSource, newsDate, newsTarget], function (err, result, f) {
            if (!err) {
                res.send({status: "ok", message: "修改新闻成功！"});
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});
//初始加载所有数据
var arr = "";
router.get("/", function (req, res, next) {
    pool.getConnection(function (err, con) {
        con.query('SELECT * FROM `news` order by `newsDate` desc', function (err, results, f) {
            if (!err) {
                //接收分页数据
                var arrpage = [];
                var len = Math.ceil(results.length / 10);
                for (var i = 0; i < 10; i++) {
                    arrpage.push(results[i]);
                }
                //所有数据赋给arr
                arr = results;
                console.log(arr.length);

                res.render("admin", {title: "后台新闻管理页面", list: arrpage, pagecount: len});
            }
            else {
                console.log(err);
            }
            con.release();
        })
    });
})
//分页加载数据
router.get("/getpage/:num", function (req, res, next) {
    //获取当前的数字
    var num = req.params.num;
    console.log(num);
    pool.getConnection(function (err, con) {
        con.query('SELECT * FROM `news`', function (err, results, f) {
            if (!err) {
                //接收分页数据
                var arrpage = [];
                //分页控制0-10,11-16
                var num2 = (num - 1) * 10;
                //显示10条
                var len = num * 10;
                var lenpage = Math.ceil(arr.length / 10);
                if (len > arr.length) {
                    len = arr.length;
                }
                for (var i = num2; i < len; i++) {
                    arrpage.push(arr[i]);
                }
                // console.log(arr.length);
                res.render("admin", {title: "后台新闻管理页面", list: arrpage, pagecount: lenpage});
            }
            else {
                console.log(err);
            }
            con.release();
        })
    });
})

module.exports = router;
