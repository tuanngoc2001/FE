//union cho phép sử dụng nhiều kiểu dữ liệu 
var unionTs = 'Tuấn Ngọc';
console.log(unionTs);
//kiểu dữ liệu any sử dụng khi ta không biết kiểu dữ liệu của nó là gì
var something = "type any";
//thông báo rằng không trả về dữ liệu
function sayHi() {
    console.log('Hi!');
}
//hàm có tham số mặc định
function Greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
//lamda nó là arrow function
var sum = function (x, y) {
    return x + y;
};
sum(10, 20);
//tham số rest
//không biết truyền vào bao nhiêu biến thì phải nghĩ đến tham số rest
function Green(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
var jquery = {
    accepts: true,
    async: false
};
console.log("jquery:" + jquery.accepts);
var kv1 = { key: 1, value: "Steve" };
console.log(kv1.key);
