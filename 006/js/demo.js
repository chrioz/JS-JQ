// 存在问题：
//  切换第一张，动画时间长
//  导航切换， 有点混乱

// 获取属性函数
// 兼容IE
function getStyle(obj, attr) {
    var style = '';
    if (window.getComputedStyle) {
        style = getComputedStyle(obj, null)[attr];
    } else {
        // IE
        style = obj.currentStyle[attr];
    }
    return parseInt(style);
}
// 过渡函数
function move(obj, attr, goal, speed, sec, func) {
    clearInterval(obj.timer);
    var currentVal = getStyle(obj, attr);
    // 判断speed正负
    // 当前值大于目标，为负
    if (currentVal > goal) {
        speed = -speed;
    }
    // 设置定时器，过渡改变样式
    // obj.timer 独立定时器
    obj.timer = setInterval(function () {
        // 不断获取当前值
        currentVal = getStyle(obj, attr);
        var newVal = currentVal + speed;
        if (speed > 0 && newVal > goal || speed < 0 && newVal < goal) {
            newVal = goal;
            clearInterval(obj.timer);
            func && func();
        }
        obj.style[attr] = newVal + 'px';
    }, sec)
}
// 事件绑定函数
// 兼容IE
function bind(obj, eStr, func) {
    if (obj.addEventListener) {
        return obj.addEventListener(eStr, func, false);
    } else {
        return obj.attachEvent('on' + eStr, function () {
            func.call(obj);
        })
    }
}
// 重置颜色函数
// 跳过选中
function setAColor(index) {
    for(var i=0, j=0; i<picList.length; i++, j++) {
        if(index == picList.length-1) {
            index = 0;
            aList[index].style.backgroundColor = 'red';
        }
        if(i == index) {
            aList[index].style.backgroundColor = 'red';
            console.log(j)
            continue;
        }
        aList[i].style.backgroundColor = '';
        
    }
}
// 图片
var box = document.querySelector('.wrapper .box');
var picList = box.getElementsByTagName('li');
box.style.width = (300 + 10) * picList.length + 'px';
// 导航
var nav = document.querySelector('.wrapper .nav');
var aList = nav.getElementsByTagName('a');
var navI = 0;
aList[navI].style.backgroundColor = 'red';
// 标记列表项
for (var i = 0; i < aList.length; i++) {
    aList[i].index = i;
}
// 自动切换timer
var autoChangeT;
// 绑定点击事件
bind(nav, 'click', function (e) {

    e = event || window.event;
    var ele = e.target || e.srcElement;
    if (ele.tagName === 'A') {
        clearInterval(autoChangeT);
        var index = ele.index;
        setAColor(index);
        // box.style.left = - index * 310 + 'px';
        // 调用过渡函数
        move(box, 'left', - index * 310, 10, 20);
        autoChange(index);
    } else {
        return false;
    }
});

function autoChange(index) {
    autoChangeT = setInterval(function () {
        if (index == picList.length - 1) {
            index = 0;
            box.style.left = 0;
        } else {
            index++;
        }
        move(box, 'left', - index * 310, 10, 20);
        setAColor(index);
    }, 3000);

}
autoChange(navI);