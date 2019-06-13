(function() {
    var result = document.getElementById('result');
    // 立即执行函数，插入节点
    (function() {
        for(var i=0; i<9; i++) {
            var tr = document.createElement('tr');
            for(var j=0; j<=i; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
            }
             result.appendChild(tr);
        }
    }());
    // 取页面节点，修改文本节点
    var arrResultRow = result.children;
    var arrRowLength = arrResultRow.length;
    for(var i=0; i<arrRowLength; i++) {
        var resultRow = arrResultRow[i];
        var arrResultCol = resultRow.children;
        var arrColLength = arrResultCol.length;
        for(var j=0; j<arrColLength; j++) {
            var resultCol = arrResultCol[j];
            resultCol.innerText = (j+1) + ' x ' + (i+1) + ' = ' + ((i+1)*(j+1));
        }
    }
}());