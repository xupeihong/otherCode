/**
 * Created by lenovo on 2017/2/27.
 */
var canvas = document.getElementById("canvas");
var con = canvas.getContext("2d");
con.beginPath();
con.moveTo(0, 0);
con.lineTo(0, 400);
con.lineTo(200, 200);
con.fillStyle = "yellow";
con.closePath();
con.fill();
con.stroke();

con.beginPath();
con.moveTo(0, 0);
con.lineTo(200, 200);
con.lineTo(400, 0);
con.fillStyle = "red";
con.closePath();
con.fill();
con.stroke();


con.beginPath();
con.moveTo(0, 400);
con.lineTo(200, 400);
con.lineTo(100, 300);
con.fillStyle = "blue";
con.closePath();
con.fill();
con.stroke();

con.beginPath();
con.moveTo(200, 400);
con.lineTo(400, 400);
con.lineTo(400, 200);
con.fillStyle = "#00BBFF";
con.closePath();
con.fill();
con.stroke();

con.beginPath();
con.moveTo(100, 300);
con.lineTo(200, 400);
con.lineTo(300, 300);
con.lineTo(200, 200);
con.fillStyle = "blue";
con.closePath();
con.fill();
con.stroke();


con.beginPath();
con.moveTo(200, 200);
con.lineTo(300, 300);
con.lineTo(300, 100);
con.fillStyle = "#00BBFF";
con.closePath();
con.fill();
con.stroke();


con.beginPath();
con.moveTo(300, 100);
con.lineTo(300, 300);
con.lineTo(400, 200);
con.lineTo(400, 0);
con.fillStyle = "orange";
con.closePath();
con.fill();
con.stroke();