var price:number = 12300;
var tax:number = 0.08;

var res:number = price * (1.0 * tax);
var msg:string = price + '円の税込価格は、' + res + '円です。';

document.write('<h1>sample</h1>');
document.write(msg);
