
(function() {
    // 问题：加载页面不能立刻更新样式，待研究
    // 操作样式, 左侧列表自适应高度
    var nav = document.getElementsByClassName('nav')[0];
    var show = document.getElementsByClassName('show')[0];
    var showHeight = show.offsetHeight;
    var navHeight = showHeight;
    var arrLink = nav.getElementsByTagName('a');
    var arrLinkLength = arrLink.length;
    for(var i=0; i<arrLinkLength; i++) {
        // 有下边框， -1
        arrLink[i].style.lineHeight = navHeight / arrLinkLength - 1 + 'px';
    }
    // 定义函数， 获取事件元素
    function getTarget(e) {
        if(!e) {
            e = window.event;
        } 
        target = e.target || e.srcElement;
        if(e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        return target;
    }
    // 定义函数，更改占位图片src
    function change(e) {
        var target = getTarget(e);
        // 判断触发事件元素是否是a标签
        if(target.tagName === 'A'){
            // 清除背景色
            for (var i=0; i<arrLinkLength; i++) {
                arrLink[i].style.backgroundColor = '';
            }
            // 更改图片地址
            var title = target.title;
            var source = target.href;
            var placeholder = document.getElementById('placeholder');
            placeholder.setAttribute('src', source);
            placeholder.alt = title;
            // 设置背景色
            target.style.backgroundColor = '#eee';
        }
    }
    // 事件委托
    if(nav.addEventListener) {
        nav.addEventListener('click', function(e) {
            change(e);
        }, false);
    } else {
        nav.attachEvent('onclick',  function(e) {
            change(e);
        });
    }
}());