///////////////////////
// クラス型オブジェクト //
//////////////////////

//
class Person {
  name:string;
  age:number;

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }
  print():string {
    let msg:string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
    return msg;
  }
}

function doClick():void {
  let val:string = document.querySelector('#text1').value;
  let arr:string[] = val.split(',');

  let obj:Person = new Person(arr[0],parseInt(arr[1]));

  let msg:Element = document.querySelector('#msg');
  msg.innerHTML = obj.print();
}


//
class Person2 {
  public name:string;
  private _age:number;

  get age():number {
    return this._age;
  }
  set age(y:number) {
    this._age = y < 0 ? 0 : y;
  }

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }
  print():string {
    let msg:string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
    return msg;
  }
}

function doClick2():void {
  let val:string = document.querySelector('#text2').value;
  let arr:string[] = val.split(',');

  let obj:Person2 = new Person2(arr[0],parseInt(arr[1]));

  let msg:Element = document.querySelector('#msg2');
  msg.innerHTML = obj.print();
}


//
class Person3 {
  public name:string;
  private age:number;

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }
  print():string {
    let msg:string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
    return msg;
  }
}

class Student extends Person {
  public grade:number;

  constructor(n:string, y:number, g:number) {
    super(n, y);
    this.grade = g;
  }

  printAll():string {
    let msg:string = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
    return msg;
  }
}

function doClick3():void {
  let msg:Element = document.querySelector('#msg3');
  let val:string = document.querySelector('#text3').value;

  let arr:string[] = val.split(',');
  if(arr.length == 2){
    let obj:Person3 = new Person3(arr[0],parseInt(arr[1]));
    msg.innerHTML = obj.print();
  }

  if(arr.length == 3){
    let obj:Student = new Student(arr[0],parseInt(arr[1]),parseInt(arr[2]));
    msg.innerHTML = obj.printAll();
  }
}


//
class Person4 {
  public name:string;
  private age:number;

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }
  print():string {
    let msg:string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
    return msg;
  }
}

class Student2 extends Person {
  public grade:number;

  constructor(n:string, y:number, g:number) {
    super(n, y);
    this.grade = g;
  }

  print():string {
    let msg:string = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
    return msg;
  }
}

function doClick4():void {
  let msg:Element = document.querySelector('#msg4');
  let val:string = document.querySelector('#text4').value;

  let arr:string[] = val.split(',');
  let obj:Person4 = null;
  if(arr.length == 2){
    obj = new Person4(arr[0],parseInt(arr[1]));
  }

  if(arr.length == 3){
    obj = new Student2(arr[0],parseInt(arr[1]),parseInt(arr[2]));
  }
  msg.innerHTML = obj.print();
}


//
class Person5 {
  public name:string;
  private age:number;
  public static tag = 'p';

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }

  print():string {
    let msg:string = '<' + Person5.tag + '>My name is ' + this.name + '. I am ' + this.age + 'years old.</' + Person5.tag + '>';
    return msg;
  }
}

function doClick5():void {
  let msg:Element = document.querySelector('#msg5');
  let val:string = document.querySelector('#text5').value;
  let arr:string[] = val.split(',');
  let obj:Person5 = new Person5(arr[0],parseInt(arr[1]));
  Person5.tag = 'h1';
  msg.innerHTML = obj.print();
}


//
interface Man {
  name:string;
  age:number;

  print():string;
}

class Person6 implements Man {
  public name:string;
  private age:number;

  constructor(n:string, y:number) {
    this.name = n;
    this.age = y;
  }

  print():string {
    let msg:string = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
    return msg;
  }
}

class Student3 implements Man {
  public name:string;
  private age:number;
  public grade:number;

  constructor(n:string, y:number, g:number) {
    this.name = n;
    this.age = y;
    this.grade = g;
  }

  print():string {
    let msg:string = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
    return msg;
  }
}

var data:Man[] = [];
data.push(new Person6('taro',37));
data.push(new Student3('hanako', 17, 3));
data.push(new Person6('sachiko',45));

function doClick6():void {
  let msg:Element = document.querySelector('#msg6');
  let val:string = document.querySelector('#text6').value * 1;

  let obj:Man = data[val];
  msg.innerHTML = obj.print();
}
