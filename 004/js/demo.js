(function () {
    // 没有响应键盘事件，待优化

    // 定义函数，获取触发事件元素
    function getTarget(e) {
        if (!e) {
            e = window.event;
        }
        return e.target || e.srcElement;
    }
    // 定义函数，移除input
    // 如果input有值，使用span替代
    function replaceIpt(e, value) {
        if (value) {
            var target = getTarget(e);
            var targetParent = target.parentNode;
            targetParent.removeChild(target);
            var span = document.createElement('span');
            span.append(document.createTextNode(value));
            targetParent.append(span);
        }
    }
    // 传递事件对象，以及元素值
    // blur事件不能用事件委托？有待研究
    var field = document.getElementById('field');
    var arrIpt = field.getElementsByTagName('input');
    // 循环遍历input元素，事件绑定
    for (var i = 0; i < arrIpt.length; i++) {
        if (arrIpt[i].addEventListener) {
            arrIpt[i].addEventListener('blur', function (e) {
                replaceIpt(e, getTarget(e).value);
            }, false);
        } else {
            arrIpt[i].attachEvent('onblur', function (e) {
                replaceIpt(e, getTarget(e).value);
            });
        }
    }

    // 添加函数，完成列表项添加
    function addItem(item) {
        if (item) {
            var detailList = document.getElementById('detail-list');
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            detailList.appendChild(li);
            itemIpt.value = '';
        }

    }
    // 绑定事件
    var itemIpt = document.getElementById('item-ipt');
    var addBtn = document.getElementById('add-btn');
    if (addBtn.addEventListener) {
        addBtn.addEventListener('click', function () {
            addItem(itemIpt.value);
        }, false);
    } else {
        addBtn.attachEvent('onclick', function () {
            addItem(itemIpt.value);
        });
    }

    // 定义函数，移除添加按钮组件，调用print();
    function removeAddPrint() {
        if (document.getElementsByClassName('add-wrap')[0]) {
            var addWrap = document.getElementsByClassName('add-wrap')[0];
            var addWrapParent = addWrap.parentNode;
            addWrapParent.removeChild(addWrap);
            window.print();
        } else {
            window.print();
        }
    }
    // 绑定事件
    var printBtn = document.getElementById('printBtn');
    if (printBtn.addEventListener) {
        printBtn.addEventListener('click', function () {
            removeAddPrint();
        }, false);
    } else {
        printBtn.attachEvent('onclick', function () {
            removeAddPrint();
        });
    }
}());