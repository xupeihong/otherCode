var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var request = require('request');
var got = require("got");
var pool = mysql.createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "mydb",
    connectionLimit: 10
})
/*
 获取天气信息
 通过向以下网址发起get请求，可以获取北京地区当日气温信息，
 从中抽取cond.txt的内容来自动生成日记中的`weather`字段
 https://free-api.heweather.com/v5/now?city=beijing&key=593c403d69364de7b0fd2fe104530de5
 */
var weather = null;
function getweather() {
    request('https://free-api.heweather.com/v5/now?city=beijing&key=03aa314f0c3d48a3843274645183405f', function (err, response, body) {
        var a = JSON.parse(body);
        weather = a.HeWeather5[0].now.cond.txt;
    });
}
getweather();
setInterval(getweather, 360000);

/*
 数据库链接设置
 */
var connection = mysql.createConnection({});

/**
 * 路由地址：
 *        '/add',
 * 请求类型：
 *        'post',
 * 请求返回内容：
 *        {status:'ok',message:'添加成功'};
 *        或
 *        {status:'error',message:'添加失败'};
 * 路由说明：
 *        用于向数据库中保存新的日记内容
 * 注意：
 *        天气信息的处理
 */
router.post('/add', function (req, res, next) {
    var now = new Date();
    var title = req.body.title,
        emotion = req.body.emotion,
        date = now.toLocaleString(),
        content = req.body.content;
    pool.getConnection(function (err, con) {
        con.query('insert into `diary`(`title`,`emotion`,`diaryDate`,`content`,`weather`) values (?,?,?,?,?)', [title, emotion, date, content, weather], function (err, result, f) {
            if (!err) {
                res.send({status: "ok", message: "添加日记成功！"});
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});
/**
 * 路由地址：
 *        '/getdiary',
 * 请求类型：
 *        'get',
 * 请求返回内容：
 *        查询到的所有日记内容
 * 路由说明：
 *        向用户发送所有的日记信息，用于前端页面展示表格
 */
router.get('/getdiary', function (req, res, next) {
    pool.getConnection(function (err, con) {
        con.query('select * from `diary` order by `diaryDate` desc ', function (err, result, f) {
            if (!err) {
                // console.log(result);
                res.send(result);
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
})
/**
 * 路由地址：
 *        '/getone',
 * 请求类型：
 *        'get',
 * 请求返回内容：
 *        根据用户发送的查询请求，查找到的单条日记
 * 路由说明：
 *        向用户发送单条日记内容，用于在模态框中进行展示
 */
router.get('/getone', function (req, res, next) {
    var id = req.query.id;
    pool.getConnection(function (err, con) {
        con.query('select * from  `diary` where `did`=' + id + '', function (err, result, f) {
            if (!err) {
                // console.log(result);
                res.send(result);
            }
            else {
                console.log(err);
            }
        })
        con.release();
    })
});
//删除日记
router.get("/deldiary", function (req, res, next) {
    var id = req.query.id;
    // console.log(id);
    pool.getConnection(function (err, conn) {
        conn.query('delete  from  `diary` where `did`=' + id + '', function (err, result, f) {
            if (!err) {
                // console.log(result);
                res.send({status: "ok", message: "删除成功！"});

            } else {
                console.log(err);
            }
        })
        conn.release();
    })
});
//点击修改赋值
router.post("/update", function (req, res, next) {
    var id = req.body.id;
    pool.getConnection(function (err, conn) {
        conn.query('select * from `diary` where `did`=' + id + '', function (err, result, f) {
            if (!err) {
                res.send(result);
            } else {
                console.log(err);
            }
        })
        conn.release();
    })
})
//修改往数据库插入数据
router.post("/updateDiarys", function (req, res, next) {
    var now = new Date();
    var id = req.body.num;
    var title = req.body.title;
    var emotion = req.body.emotion;
    var date = now.toLocaleString();
    var content = req.body.content;
    pool.getConnection(function (err, conn) {
        conn.query('update `diary` set `title`=?,`emotion`=?,`diaryDate`=?,`weather`=?,`content`=? where `did`=' + id,
            [title, emotion, date, weather, content], function (err, result, f) {
                if (!err) {
                    res.send({status: "ok", message: "修改成功!"});
                }
                else {
                    console.log(err);
                }
                conn.release();
            })
    })
});
module.exports = router;
