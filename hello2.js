/////////////////////////
// 関数とオブジェクト指向 //
////////////////////////
//関数の定義
function calc(price, tax) {
    return Math.floor(price * (1.0 + tax));
}
function doClick() {
    var text1 = document.querySelector('#text1');
    var msg = document.querySelector('#msg');
    msg.innerHTML = calc(text1.value, 0.08) + '円';
}
//
function calc2(price, tax) {
    var tx = 0;
    if (tax) {
        tx = tax;
    }
    else {
        tx = 0.08;
    }
    return Math.floor(price * (1.0 + tx));
}
function doClick2() {
    var text2 = document.querySelector('#text2');
    var msg2 = document.querySelector('#msg2');
    msg2.innerHTML = calc2(text2.value) + '円';
}
function convert(item) {
    switch (typeof item) {
        case 'number':
            return Math.floor(item).toString();
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no';
    }
}
function doClick3() {
    var val = 'hello';
    var msg3 = document.querySelector('#msg3');
    msg3.innerHTML = convert(val);
}
//
function convert(item) {
    switch (typeof item) {
        case 'number':
            return Math.floor(item);
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no';
        default:
            return 'any';
    }
}
function doClick4() {
    var val = 'aaa';
    var msg4 = document.querySelector('#msg4');
    msg4.innerHTML = convert(val);
}
//
function total() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    var re = 0;
    for (var i = 0; i < item.length; i++) {
        re += item[i];
    }
    return re;
}
function doClick5() {
    var msg = document.querySelector('#msg5');
    msg5.innerHTML = total(1, 2, 3, 4, 5);
}
//
function print(n, f) {
    var re = f(n);
    return '<p>結果：' + re + '</p>';
}
function doClick6() {
    var val = document.querySelector('#text6').value * 1;
    var msg = document.querySelector('#msg6');
    var a = function (n) { return n * n; };
    var b = function (n) {
        var total = 0;
        for (var i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    };
    msg.innerHTML = print(val, b);
}
