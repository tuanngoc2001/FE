function greeter(person) {
    return "Hello " + person;
}
var use = "Tuan Ngoc";
// document.body.innerHTML = greeter(use);
//rest parametor
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(colors);
};
displayColors("Red");
displayColors("Red", "Green");
//spread parametor
var displayColors1 = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var color = ["red", "green", "blue"];
displayColors1.apply(void 0, color);
//bóc tách array
var employee = ['red', 'green', 'blue'];
var emp = employee[2];
console.log(emp);
