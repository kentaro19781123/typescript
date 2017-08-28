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
//var 通常の環境変数;
//何度も宣言できる
//var a:any = 1;
//var a:any = 'hello';
//ただし、再宣言で型を変更することはできない。
//var a:number = 1;
//var a:string = "hello"; //型の変更はできない
//let ローカル変数宣言;
//宣言された構文内でのみ利用できる
//let a:any = 1;
//let a:any = 'hello'; //再宣言できない
//const 定数宣言;
//定数の宣言のため、値の変更は行えない
//let同様、構文内でのみ利用できる
//const 定数 = 値;
//配列の宣言
//同じ配列に異なる型を代入できない
//予想外の型が代入されるのを防げる
var arr = [123, 456, 789];
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}
document.write('<h1>Array</h1>');
document.write('<p>total：' + total + '</p>');
//型のエイリアス
//あらかじめ型名にエイリアス（別名）を設定することができる
//type 名前 = 型名;
//type myname = string;
//type mail = string;
//変数名がわかりにくいものでも、型名で内容がわかる
//let a:myname;
//let b:mail;
//列挙型（enum）について
//あらかじめ用意された値のいづれかのみ代入できる型
//enum 型名 {値1, 値2, .....};
var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["summer"] = 1] = "summer";
    Season[Season["autumn"] = 2] = "autumn";
    Season[Season["winter"] = 3] = "winter";
})(Season || (Season = {}));
;
//s:Seasonで型、Season.summerで値
//let s:Season = Season.summer;
//※型の指定の仕方としては正しいのですが、sはコンパイル時にsummerであることが確定しているので、TypeScriptのCFA（Control Flow Analyzer）が、spring / autamn / winterのCaseは到達不能と判断しエラーを表示しています。
//Enumの値ではなく数値を直接いれた場合はどの値が入るかがコンパイル時にはわからなくなるため、TypeScriptはエラーを出しません
var s = 0;
switch (s) {
    case Season.spring:
        document.write('<h1>Spring</h1>');
        break;
    case Season.summer:
        document.write('<h1>Summer</h1>');
        break;
    case Season.autumn:
        document.write('<h1>Autumn</h1>');
        break;
    case Season.winter:
        document.write('<h1>Winter</h1>');
        break;
}
document.write('<p>今の季節を表示しています。</p>');
//タプル（tuple）型について
//複数の値のセット
//配列の１つ１つの要素に型を指定することで、
//決まった形式のデータセットを用意することができる
//let 変数 : [ 型1, 型2, .....];
//変数 = [ 値1, 値2, ......];
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
;
//タプルの宣言
var person;
//タプルへの代入
person = ['taro', 'taro@yamada', gender.male, 23];
document.write('<h1>Tuple</h1>');
document.write('<p>' + person + '</p>');
var gender2;
(function (gender2) {
    gender2[gender2["male"] = 0] = "male";
    gender2[gender2["female"] = 1] = "female";
})(gender2 || (gender2 = {}));
;
var data = [];
data.push(['taro', 'taro@yamada', gender2.male, 23]);
data.push(['hanako', 'hanako@flower', gender2.female, 45]);
data.push(['sachiko', 'sachiko@yamada', gender2.female, 67]);
document.write('<h1>Tuple</h1>');
document.write('<p>' + data[0] + '</p>');
document.write('<p>' + data[1] + '</p>');
document.write('<p>' + data[2] + '</p>');
