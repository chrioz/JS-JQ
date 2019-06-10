var btn = document.getElementsByClassName('btn')[0];
btn.onclick = function () {
    var ipt = document.getElementsByClassName('ipt')[0];
    var result = document.getElementsByClassName('result')[0];
    var priceval = document.getElementById('priceval');
    var charBox = document.getElementById('charBox');
    result.style.display = 'block';
    if (ipt.value) {
        priceval.innerHTML = ipt.value.length * 5;
        for (var i = 0; i < ipt.value.length; i++) {
            var char = document.createElement('span');
            char.className = 'char';
            var chartext = document.createTextNode(ipt.value[i].toUpperCase());
            char.appendChild(chartext);
            charBox.appendChild(char);
        } 
    } else {
        charBox.innerHTML = '请输入字符';
    }
}