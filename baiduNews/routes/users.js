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
router.get('/', function (req, res, next) {
    res.send('respond with a resource');

});
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
/*router.post("/DeleteNews", function (req, res, next) {
    var newsID = req.body.newsID;
    var newsTitle = req.body.newsTitle;
    var newsContent = req.body.newsContent;
    var newsPICPath = req.body.newsPICPath;
    var newsSource = req.body.newsSource;
    var newsDate = req.body.newsDate;
    var newsTarget = req.body.newsTarget;
    console.log(req.body);
    pool.getConnection(function (err, con) {
        con.query('delete from `news` where `newsId`=' + newsID + '', function (err, result, f) {
            if (!err) {
                res.send({statue: "ok", message: "删除新闻成功!"})
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});*/
//查询
router.get("/allnews", function (req, res, next) {
    pool.getConnection(function (err, con) {
        con.query('SELECT * FROM `news`', function (err, results, f) {
            if (!err) {
                console.log(results);
                res.render("admin", {title: "Express", list: results});
            }
            else {
                console.log(err);
            }
            con.release();
        })
    })
});

module.exports = router;
