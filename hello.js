//
var MyClass = (function () {
    function MyClass(title, message) {
        this.title = title;
        this.message = message;
    }
    MyClass.prototype.print = function () {
        return "<h1>" + this.title + "</h1>" + "<p>" + this.message + "</p>";
    };
    return MyClass;
}());
;
var msg = new MyClass("hello", "this is TypeScript sample!");
document.write(msg.print());
//型を指定
var price = 12300;
var tax = 0.08;
var res = price * (1.0 * tax);
var msg2 = price + '円の税込価格は、' + res + '円です。';
document.write('<h1>sample</h1>');
document.write(msg2);
//var 変数;
//var a:any = 1;
//var a:any = 'hello';
//var a:number = 1;
//var a:string = "hello"; //型の変更はできない
//let 変数;
//let a:any = 1;
//let a:any = 'hello'; //再宣言できない
//const 定数 = 値;
//配列の宣言
var arr = [123, 456, 789];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
document.write('<h1>Array</h1>');
document.write('<p>total：' + total + '</p>');
//型のエイリアス
//type 名前 = 型名;
//type myname = string;
//type mail = string;
//let a:myname;
//let b:mail;
//列挙型について
//enum 型名 {値1, 値2, .....};
var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["summer"] = 1] = "summer";
    Season[Season["autumn"] = 2] = "autumn";
    Season[Season["winter"] = 3] = "winter";
})(Season || (Season = {}));
;
var s = Season.summer;
switch (s) {
    case Season.spring:
        document.write('<h1>Spring</h1>');
    case Season.summer:
        document.write('<h1>Summer</h1>');
    case Season.autumn:
        document.write('<h1>Autumn</h1>');
    case Season.winter:
        document.write('<h1>Winter</h1>');
        break;
}
document.write('<p>今の季節を表示しています。</p>');
