//
// class MyClass {
//   constructor(public title: string, public message: string){}
//   print(){
//    return "<h3>" + this.title + "</h3>" + "<p>" + this.message + "</p>";
//   }
// };
// var msg:MyClass = new MyClass("hello","this is TypeScript sample!");
// document.write(msg.print());

/////////////////////////
// TypeScriptの基本文法 //
////////////////////////

function sample1(){
  var price:number = 12300;
  var tax:number = 0.08;
  var res:number = price * (1.0 * tax);
  var msg2:string = price + '円の税込価格は、' + res + '円です。';
  document.write('<h3>sample</h3>');
  document.write(msg2);
}

function sample2(){
  let arr:number[] = [123, 456, 789];
  let total:number = 0;
  for(let i = 0;i < arr.length;i++){
    total += arr[i];
  }
  document.write('<h3>Array</h3>');
  document.write('<p>total：' + total + '</p>');
}


function sample3(){
  enum Season {spring, summer, autumn, winter};

//s:Seasonで型、Season.summerで値
//let s:Season = Season.summer;
//※型の指定の仕方としては正しいのですが、sはコンパイル時にsummerであることが確定しているので、TypeScriptのCFA（Control Flow Analyzer）が、spring / autamn / winterのCaseは到達不能と判断しエラーを表示しています。
//Enumの値ではなく数値を直接いれた場合はどの値が入るかがコンパイル時にはわからなくなるため、TypeScriptはエラーを出しません
  const s: Season = 0;

  switch(s){
  case Season.spring:
    document.write('<h3>Spring</h3>');
    break;
  case Season.summer:
    document.write('<h3>Summer</h3>');
    break;
  case Season.autumn:
    document.write('<h3>Autumn</h3>');
    break;
  case Season.winter:
    document.write('<h3>Winter</h3>');
    break;
  }
  document.write('<p>今の季節を表示しています。</p>');
}


function sample4(){
  enum gender {male, female};
  type myname = string;
  type mail = string;
  type age = number;

  //タプルの宣言
  let person:[myname, mail, gender, age];

  //タプルへの代入
  person = ['taro', 'taro@yamada', gender.male, 23];
  document.write('<h3>Tuple</h3>');
  document.write('<p>' + person + '</p>');


  enum gender2 {male, female};
  type myname2 = string;
  type mail2 = string;
  type age2 = number;
  type Person = [myname2, mail2, gender2, age2];

  let data:Person[] = []
  data.push(['taro', 'taro@yamada', gender2.male, 23]);
  data.push(['hanako', 'hanako@flower', gender2.female, 45]);
  data.push(['sachiko', 'sachiko@yamada', gender2.female, 67]);

  document.write('<h3>Tuple2</h3>');
  document.write('<p>' + data[0] + '</p>');
  document.write('<p>' + data[1] + '</p>');
  document.write('<p>' + data[2] + '</p>');
}
