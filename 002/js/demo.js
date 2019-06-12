// 立即执行函数，不存在变量冲突
(function() {
    // 定义各种时间
    var today = new Date();
    var hireTime = new Date(2019,5,1);
    var duration = 2;
    function year2ms(year) {
        return year*365*24*60*60*1000;
    }
    function ms2day(ms) {
        return Math.floor(ms/(24*60*60*1000));
    }
    var expireTime = new Date(hireTime.getTime() + year2ms(duration));
    var remainTime = expireTime.getTime() - today.getTime();
    // 获取元素，改变内容
    var dura = document.getElementById('duration');
    dura.textContent = duration;
    var hire = document.getElementById('hire-time');
    hire.textContent = hireTime.toLocaleDateString();
    var expire = document.getElementById('expire-time');
    expire.textContent = expireTime.toLocaleDateString();
    var remain = document.getElementById('remain-time');
    remain.textContent = ms2day(remainTime);
}());