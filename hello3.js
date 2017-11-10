///////////////////////
// クラス型オブジェクト //
//////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//
var Person = (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person;
}());
function doClick() {
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    var obj = new Person(arr[0], parseInt(arr[1]));
    var msg = document.querySelector('#msg');
    msg.innerHTML = obj.print();
}
//
var Person2 = (function () {
    function Person2(n, y) {
        this.name = n;
        this.age = y;
    }
    Object.defineProperty(Person2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (y) {
            this._age = y < 0 ? 0 : y;
        },
        enumerable: true,
        configurable: true
    });
    Person2.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person2;
}());
function doClick2() {
    var val = document.querySelector('#text2').value;
    var arr = val.split(',');
    var obj = new Person2(arr[0], parseInt(arr[1]));
    var msg = document.querySelector('#msg2');
    msg.innerHTML = obj.print();
}
//
var Person3 = (function () {
    function Person3(n, y) {
        this.name = n;
        this.age = y;
    }
    Person3.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person3;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(n, y, g) {
        var _this = _super.call(this, n, y) || this;
        _this.grade = g;
        return _this;
    }
    Student.prototype.printAll = function () {
        var msg = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
        return msg;
    };
    return Student;
}(Person));
function doClick3() {
    var msg = document.querySelector('#msg3');
    var val = document.querySelector('#text3').value;
    var arr = val.split(',');
    if (arr.length == 2) {
        var obj = new Person3(arr[0], parseInt(arr[1]));
        msg.innerHTML = obj.print();
    }
    if (arr.length == 3) {
        var obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]));
        msg.innerHTML = obj.printAll();
    }
}
//
var Person4 = (function () {
    function Person4(n, y) {
        this.name = n;
        this.age = y;
    }
    Person4.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person4;
}());
var Student2 = (function (_super) {
    __extends(Student2, _super);
    function Student2(n, y, g) {
        var _this = _super.call(this, n, y) || this;
        _this.grade = g;
        return _this;
    }
    Student2.prototype.print = function () {
        var msg = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
        return msg;
    };
    return Student2;
}(Person));
function doClick4() {
    var msg = document.querySelector('#msg4');
    var val = document.querySelector('#text4').value;
    var arr = val.split(',');
    var obj = null;
    if (arr.length == 2) {
        obj = new Person4(arr[0], parseInt(arr[1]));
    }
    if (arr.length == 3) {
        obj = new Student2(arr[0], parseInt(arr[1]), parseInt(arr[2]));
    }
    msg.innerHTML = obj.print();
}
//
var Person5 = (function () {
    function Person5(n, y) {
        this.name = n;
        this.age = y;
    }
    Person5.prototype.print = function () {
        var msg = '<' + Person5.tag + '>My name is ' + this.name + '. I am ' + this.age + 'years old.</' + Person5.tag + '>';
        return msg;
    };
    Person5.tag = 'p';
    return Person5;
}());
function doClick5() {
    var msg = document.querySelector('#msg5');
    var val = document.querySelector('#text5').value;
    var arr = val.split(',');
    var obj = new Person5(arr[0], parseInt(arr[1]));
    Person5.tag = 'h1';
    msg.innerHTML = obj.print();
}
var Person6 = (function () {
    function Person6(n, y) {
        this.name = n;
        this.age = y;
    }
    Person6.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + 'years old.</p>';
        return msg;
    };
    return Person6;
}());
var Student3 = (function () {
    function Student3(n, y, g) {
        this.name = n;
        this.age = y;
        this.grade = g;
    }
    Student3.prototype.print = function () {
        var msg = '<p>私は、' + this.name + 'です。' + this.age + '歳です。現在、' + this.grade + '年生です。</p>';
        return msg;
    };
    return Student3;
}());
var data = [];
data.push(new Person6('taro', 37));
data.push(new Student3('hanako', 17, 3));
data.push(new Person6('sachiko', 45));
function doClick6() {
    var msg = document.querySelector('#msg6');
    var val = document.querySelector('#text6').value * 1;
    var obj = data[val];
    msg.innerHTML = obj.print();
}
