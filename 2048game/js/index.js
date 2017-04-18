var game = {
    data: [],//存放所有数据的二位数组
    rn: 4,//总行数
    cn: 4,//总列数
    state: 0,//游戏当前状态开始/结束
    ruuning: 1,
    gameover: 0,
    score: 0,
    //判断游戏是否结束
    isGameOver: function () {
        //如果所有盒子没有满，则返回false
        if (!this.isFull()) {
            return false;
        } else {
            //否则盒子满了从最左上角开始遍历二维数组
            for (var row = 0; row < this.rn; row++) {
                for (var col = 0; col < this.cn; col++) {
                    //如果当前元素不是最右边的元素
                    if (col < this.cn - 1) {
                        //如果当前元素==右侧元素
                        if (this.data[row][col] == this.data[row][col + 1]) {
                            return false;
                        }
                    }
                    //如果当前元素不是在最下边
                    if (row < this.rn - 1) {
                        //如果当前元素==最下边的元素
                        if (this.data[row][col] == this.data[row + 1][col]) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    },
    //游戏开始
    start: function () {
        //游戏开始
        this.state = this.ruuning;
        //游戏结束页面隐藏
        var div = document.getElementById("gameOver");
        div.style.display = "none";
        //初始化二维数组
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        //分数归零
        this.score = 0;
        //在随机div中生成2或4
        this.randomNum();
        this.randomNum();
        //将数字放在页面中
        this.updateView();
    },
    //判断当前数组是否满了
    isFull: function () {
        for (var row = 0; row < this.rn; row++) {
            for (var col = 0; col < this.cn; col++) {
                //如果当前元素==0，返回false
                if (this.data[row][col] == 0) {
                    return false;
                }
            }
        }
        //循环正常退出
        return true;
    },
    //随机在空位置生成一个数
    randomNum: function () {
        //如果盒子没有满执行下面代码
        if (!this.isFull()) {
            while (true) {
                //生成0-3的行号
                var row = parseInt(Math.random() * this.rn);
                //生成0-3的列号
                var col = parseInt(Math.random() * this.cn);
                //如果有空盒子执行下面代码
                if (this.data[row][col] == 0) {
                    this.data[row][col] = Math.random() < 0.5 ? 2 : 4;
                    break;
                }
            }
        }
    },
    //页面更新数据
    updateView: function () {
        for (var row = 0; row < this.cn; row++) {
            for (var col = 0; col < this.cn; col++) {
                //获取前景格的值
                var div = document.getElementById("c" + row + col);
                //当前值
                var current = this.data[row][col];
                //修改div开始和结束之间的内容
                div.innerHTML = current != 0 ? current : "";
                //修改div的class属性
                div.className = current != 0 ? "cell n" + current : "cell";
            }
        }
        var span = document.getElementById("score");
        span.innerHTML = this.score;//初始分数为0
        //如果游戏结束将状态改为GameOver
        if (this.isGameOver()) {
            this.state = this.gameover;
            //游戏结束的盒子
            var div = document.getElementById("gameOver");
            //显示最后总分
            var span = document.getElementById("sum");
            //显示最高分
            var bes = document.getElementById("bestScore");
            //将最后的总分赋值给span
            span.innerHTML = this.score;
            if (parseInt(span.innerHTML) >= parseInt(bes.innerHTML)) {
                bes.innerHTML = this.score;
            }
            //游戏结束的界面显示
            div.style.display = "block";
        }
    },
    //实现左移，找当前元素的右侧，不为0的数
    getRightNext: function (row, col) {
        //从col+1开始，遍历row中剩余元素
        for (var nextc = col + 1; nextc < this.cn; nextc++) {
            //如果遍历到的元素！=0,出现问题了！！！
            if (this.data[row][nextc] != 0) {
                return nextc;
            }
        }
        return -1;
    },
    //判断并左移指定行中的元素
    moveLeftInRow: function (row) {
        //col列从0开始，遍历行中的每个元素<最后一列结束
        for (var col = 0; col < this.cn - 1; col++) {
            var nextc = this.getRightNext(row, col);
            //说明后面没有空的位置了
            if (nextc == -1) {
                break;
            } else {
                //当前位置=0，将下个位置的值移到当前位置
                if (this.data[row][col] == 0) {
                    this.data[row][col] = this.data[row][nextc];
                    //移动后，将下个位置变为0
                    this.data[row][nextc] = 0;
                    //重复检查
                    col--;
                }
                //如果当前的的值和下一个的值相等，则将当前位置*2
                else if (this.data[row][col] == this.data[row][nextc]) {
                    this.data[row][col] *= 2;
                    //下个位置设置0
                    this.data[row][nextc] = 0;
                    //当前的分数累加
                    this.score += this.data[row][col];
                }
            }
        }
    },
    //往左移动
    moveLeft: function () {
        var old = this.data.toString();
        for (var row = 0; row < this.rn; row++) {
            //调用moveLeftInRow方法，传入当前行号
            this.moveLeftInRow(row);
            //
            this.findCell(this.rn, this.cn);
        }
        var newstr = this.data.toString();
        if (old !== newstr) {
            this.randomNum();
            this.updateView();
        }
    },
    //往右移动
    moveRight: function () {
        var old = this.data.toString();
        for (var row = 0; row < this.rn; row++) {
            this.moveRightInRow(row);
        }
        var newstr = this.data.toString();
        if (old != newstr) {
            this.randomNum();
            this.updateView();
        }
    },
    //判断并右移指定行中的元素
    moveRightInRow: function (row) {
        //这里出现问题，
        //从4列开始遍历排除，而不是当前位置开始
        for (var col = this.cn - 1; col > 0; col--) {
            var nextc = this.getLeftNext(row, col);
            if (nextc == -1) {
                break;
            }
            else {
                //当前的值为0时
                if (this.data[row][col] == 0) {
                    //将下个位置的值移到当前位置上，
                    // 出现问题
                    this.data[row][col] = this.data[row][nextc];
                    this.data[row][nextc] = 0;
                    col++;
                } else if (this.data[row][col] == this.data[row][nextc]) {
                    this.data[row][col] *= 2;
                    this.data[row][nextc] = 0;
                    this.score += this.data[row][col];
                }
            }
        }
    },
    //当前位置左侧，下个不为0的数
    getLeftNext: function (row, col) {
        //从当前到最后一列，遍历行中剩下的元素
        for (var nextc = col - 1; nextc >= 0; nextc--) {
            if (this.data[row][nextc] != 0) {
                return nextc;
            }
        }
        return -1;
    },
    //获得任意位置下方不为0的位置
    getDownNext: function (row, col) {
        //获取下一行
        for (var nextc = row + 1; nextc < this.rn; nextc++) {
            if (this.data[nextc][col] != 0) {
                return nextc;
            }
        }
        return -1;
    },
    //判断并上移指定列中的每个元素
    moveUpInCol: function (col) {
        for (var row = 0; row < this.rn - 1; row++) {
            var nextr = this.getDownNext(row, col);
            if (nextr == -1) {
                break;
            } else {
                //如果当前位置为0
                if (this.data[row][col] == 0) {
                    this.data[row][col] = this.data[nextr][col];
                    //将下个位置的数清空
                    this.data[nextr][col] = 0;
                    row--;
                    //如果上下两个值相等，往上合并
                } else if (this.data[row][col] == this.data[nextr][col]) {
                    this.data[row][col] *= 2;
                    //将下个位置的数设置为0
                    this.data[nextr][col] = 0;
                    //将分数累加
                    this.score += this.data[row][col];
                }
            }
        }
    },
    //向上移动
    moveUp: function () {
        var old = this.data.toString();
        for (var col = 0; col < this.cn; col++) {
            this.moveUpInCol(col);
        }
        var newStr = this.data.toString();
        if (old != newStr) {
            this.randomNum();
            this.updateView();
        }
    },
    //向下移动
    moveDown: function () {
        var old = this.data.toString();
        for (var col = 0; col < this.cn; col++) {
            this.moveDownInCol(col);
        }
        var newStr = this.data.toString();
        if (old != newStr) {
            this.randomNum();
            this.updateView();
        }
    },
    //判断并下移到指定的每个元素
    moveDownInCol: function (col) {
        for (var row = this.rn - 1; row > 0; row--) {
            //遍历每行
            var nextr = this.getUpNext(row, col);
            if (nextr == -1) {
                break;
            } else {
                if (this.data[row][col] == 0) {
                    this.data[row][col] = this.data[nextr][col];
                    this.data[nextr][col] = 0;
                    //从最上往下遍历每行
                    row++;
                } else if (this.data[row][col] == this.data[nextr][col]) {
                    this.data[row][col] *= 2;
                    this.data[nextr][col] = 0;
                    this.score += this.data[row][col];
                }
            }
        }
    },
    //获的每行上方不为0的元素
    getUpNext: function (row, col) {
        for (var nextr = row - 1; nextr >= 0; nextr--) {
            if (this.data[nextr][col] != 0) {
                return nextr;
            }
        }
        return -1;
    },
    //动画效果有问题
    leftAction: function () {
        var count = 0;
        for (var i = 0; i < this.rn; i++) {
            for (var j = 0; j < this.cn; j++) {
                if (!this.data[i][j]) {
                    continue;
                }
                if (this.moveLeft(this.data[i][j])) {
                    count++;
                }
            }
        }
        return count;
    },
    //替换数字盒子有问题
    findCell: function (row, col) {
        return $(".cell .row" + row + ".col" + col);
    }
};
//动画
/*function leftAction() {
 var count = 0;
 for (var i = 0; i < cells.length; i++) {
 for (var j = 0; j < cells.length; j++) {
 if (!cells[i][j]) {
 continue;
 }
 if (moveleft(cells[i][j])) {
 count++;
 }
 }
 }
 return count;
 }*/
window.onload = function () {
    document.onkeydown = function () {
        if (game.state == game.ruuning) {
            //获得事件对象
            var op = document.getElementById("opreter");
            var e = window.event || arguments[0];
            if (e.keyCode == 37 || e.keyCode == 65) {
                // if (this.leftAction()) {
                game.moveLeft();
                // }
                if (e.keyCode == 37)
                    op.innerHTML = "操作键：←";
                else if (e.keyCode == 65)
                    op.innerHTML = "操作键：A";

            } else if (e.keyCode == 39 || e.keyCode == 68) {
                game.moveRight();
                if (e.keyCode == 39)
                    op.innerHTML = "操作键：→";
                else if (e.keyCode == 68)
                    op.innerHTML = "操作键：D";

            } else if (e.keyCode == 38 || e.keyCode == 87) {
                if (e.keyCode == 38)
                    op.innerHTML = "操作键：↑";
                else if (e.keyCode == 87)
                    op.innerHTML = "操作键：W";
                game.moveUp();
            } else if (e.keyCode == 40 || e.keyCode == 83) {
                if (e.keyCode == 40)
                    op.innerHTML = "操作键：↓";
                else if (e.keyCode == 83)
                    op.innerHTML = "操作键：S";
                game.moveDown();
            }
        }
    }
};