var user = {
    name: "Hayes",
    id: 0
};
console.log(user);
function union(code) {
    console.log("type ".concat(code));
}
union("string");
union(1);
///generics
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }
//   // This line is a shortcut to tell TypeScript there is a
//   // constant called `backpack`, and to not worry about where it came from.
//   declare const backpack: Backpack<string>;
//   // object is a string, because we declared it above as the variable part of Backpack.
//   //result:backpack not define 
//   const object = backpack.get();
//   interface Point {
//     x: number;
//     y: number;
//   }
//   function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
//   }
//   // logs "12, 26"
//   //ts so sánh thấy có dạng giống nhau nên nó đã nhận Point làm kiểu dữ liệu của nó
//   const point = { x: 12, y: 26 };
//   logPoint(point);
//   //error vì kiểu dữ liệu k trùng khớp 
//   const point1={hex:"CCCCCC"};
// //   logPoint(point1);
//   //
//   const rect = { x: 33, y: 3, width: 30, height: 80 };
//   logPoint(rect); // logs "33, 3"
console.log("Erased Structural Types");
function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log("Hello, " + x.name);
}
var obj = {
    x: 0,
    y: 0,
    name: "Origin"
};
logPoint(obj);
logName(obj);
//tuple
//khai báo một mảng tuple
var employee;
employee = [[1, "Steve"], [2, "Bill"]];
//truy cập mảng tuple
// console.log(employee[0]);//return {1,Steve}
// console.log(employee[1]);return {2,Bill}
var deparment = [1, "Steve"];
console.log(deparment[0]); //return 1
