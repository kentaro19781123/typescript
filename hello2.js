/////////////////////////
// 関数とオブジェクト指向 //
////////////////////////
//関数の定義
//function 関数名 ( 変数 : 型, ..... ) : 戻り値の型 { 内容 }
//引数や戻り値に型の指定が可能
function calc(price, tax) {
    return Math.floor(price * (1.0 + tax));
}
function doClick() {
    var text1 = document.querySelector('#text1');
    var msg = document.querySelector('#msg');
    msg.innerHTML = calc(text1.value, 0.08) + '円';
}
//引数の変数名の後に「?」をつけるとその引数は省略可能となる
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
//総称型（Generics）について
//型そのものをパラメーター化し、後から特定して呼び出せるようにする
//オーバーロードと違い関数宣言をいくつも用意する必要がない
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
//可変長引数について
//function 関数名 ( ... 変数 : 型 ) {}
//引数に「...」つけると可変長引数になり、
//その型の引数をいくつ付けても処理できるようになる
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
//アロー関数について
//(引数の指定) => 実行する処理;
