/////////////////////////
// 関数とオブジェクト指向 //
////////////////////////

//関数の定義
function calc(price:number, tax:number):number {
  return Math.floor(price * (1.0 + tax));
}

function doClick():void {
  let text1:HTMLInputElement = <HTMLInputElement>document.querySelector('#text1');
  let msg:Element = document.querySelector('#msg');
  msg.innerHTML = calc(text1.value, 0.08) + '円';
}


//
function calc2(price:number, tax?:number) {
  let tx = 0;
  if(tax) {
    tx = tax;
  } else {
    tx = 0.08;
  }
  return Math.floor(price * (1.0 + tx));
}

function doClick2():void {
  let text2:HTMLInputElement = <HTMLInputElement>document.querySelector('#text2');
  let msg2:Element = document.querySelector('#msg2');
  msg2.innerHTML = calc2(text2.value) + '円';
}


//
function convert(item:number):string;
function convert(item:string):string;
function convert(item:boolean):string;

function convert(item:any):string {
  switch (typeof item) {
    case 'number':
    return Math.floor(item).toString();
    case 'string':
    return item.toUpperCase();
    case 'boolean':
    return item ? 'yes' : 'no';
  }
}

function doClick3():void {
  let val:string = 'hello';
  let msg3:Element = document.querySelector('#msg3');
  msg3.innerHTML = convert(val);
}

//
function convert<T>(item:T):string {
  switch (typeof item){
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

function doClick4():void {
  let val:string = 'aaa';
  let msg4:Element = document.querySelector('#msg4');
  msg4.innerHTML = convert(val);
}


//
function total( ...item:number[]):number {
  let re:number = 0;
  for(let i:number = 0; i < item.length;i++){
    re += item[i];
  }
  return re;
}

function doClick5():void {
  let msg:Element = document.querySelector('#msg5');
  msg5.innerHTML = total(1, 2, 3, 4, 5);
}


//
function print(n:number, f:(number)=>number):string {
  var re:number = f(n);
  return '<p>結果：' + re + '</p>';
}

function doClick6():void {
  let val:number = document.querySelector('#text6').value * 1;
  let msg:Element = document.querySelector('#msg6');

  let a:(number)=>number = (n:number)=> n * n;
  let b:(number)=>number = (n:number)=>{
    let total:number = 0;
    for(let i:number = 1;i <=n;i++){
      total += i;
    }
    return total;
  };
  msg.innerHTML = print(val, b);
}
