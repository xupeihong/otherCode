var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var got = require("got");
var pool = mysql.createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "mydb",
    connectionLimit: 10
})
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {title: "百度新闻"});
});
router.get('/newsed', function (req, res, next) {
    pool.getConnection(function (err, con) {
        con.query('SELECT * FROM `news` where `newsTarget`=0', function (err, result, f) {
            if (!err) {
                // console.log(result);
                res.send(result);
            }
            else {
                console.log(err);
            }
            con.release();
        })
    })
});
//模仿天气
router.get('/getNews/:lanmu', function (req, res, next) {
    var city = req.params.lanmu;
    // console.log(city);
    pool.getConnection(function (err, con) {
        con.query('select * from `news` where `newsTarget`=' + city + '', function (err, result, f) {
            if (!err) {
                //console.log(result);
                //res.render("index",{title:"百度新闻",lsit:result});
                res.send(result);
            }
            else {
                console.log(err);
            }
            //池子必须释放
            con.release();
        })
    })
});
//显示详细新闻内容
router.get("/sigle/:num", function (req, res, next) {
    var num = req.params.num;
    // console.log(num);
    pool.getConnection(function (err, con) {
        con.query('select * from `news` where `newsId`=' + num + '', function (err, result, f) {
            if (!err) {
                // console.log(result);
                //res.render("index",{title:"百度新闻",lsit:result});
                res.render("newDetail", {title: "详细新闻", list: result});
            }
            else {
                console.log(err);
            }
            //池子必须释放
            con.release();
        })
    })
});
//百度新闻登录
router.get("/mnews/:login", function (req, res, next) {
    res.render("login", {title: "登录百度新闻"});
})
//搜新闻
router.get("/search/:news", function (req, res, next) {
    res.render("searchNews", {title: "搜新闻"});
})
//订阅中心
router.get("/dinyue/:center", function (req, res, next) {
    res.render("dingyue", {title: "订阅中心"});
})
//后台界面，初始加载所有新闻
/*router.get("/admin", function (req, res, next) {
    pool.getConnection(function (err, con) {
        con.query('SELECT * FROM `news`', function (err, results, f) {
            if (!err) {
                // console.log(results.length);
                res.render("admin", {title: "后台新闻管理页面", list: results});
            }
            else {
                console.log(err);
            }
            con.release();
        })
    });
    // res.render('admin', {title: "后台新闻管理页面"});
})*/

module.exports = router;
