//
class MyClass {
  constructor(public title: string, public message: string){}
  print(){
   return "<h1>" + this.title + "</h1>" + "<p>" + this.message + "</p>";
  }
};
var msg:MyClass = new MyClass("hello","this is TypeScript sample!");
document.write(msg.print());

//型を指定
var price:number = 12300;
var tax:number = 0.08;
var res:number = price * (1.0 * tax);
var msg2:string = price + '円の税込価格は、' + res + '円です。';
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
let arr:number[] = [123, 456, 789];
let total:number = 0;
for(let i = 0;i < arr.length;i++){
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
enum Season {spring, summer, autumn, winter};

let s:Season = Season.summer;

switch(s){
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
