// let test:[number,boolean];
// test=[1,false]
// console.log(test);
// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = 234; 
// console.log(nameAgeMap);
// //ép kiểu
// let x:unknown='hello';
// console.log((x as string).length);
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
//'name' sẽ đc truyển vào biến property
printPersonProperty(person, "name");
