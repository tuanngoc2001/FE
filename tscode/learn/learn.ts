//union cho phép sử dụng nhiều kiểu dữ liệu 
let unionTs: (string | number) ='Tuấn Ngọc'
console.log(unionTs);
//kiểu dữ liệu any sử dụng khi ta không biết kiểu dữ liệu của nó là gì
let something:any="type any"


//thông báo rằng không trả về dữ liệu
function sayHi(): void { 
    console.log('Hi!')
} 
//hàm có tham số mặc định
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}
//lamda nó là arrow function
let sum = (x: number, y: number): number => {
    return x + y;
}
sum(10, 20); 
//tham số rest
//không biết truyền vào bao nhiêu biến thì phải nghĩ đến tham số rest
function Green(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

interface JQueryAjaxSettings{
    accepts?: any;//tham số có thể truyền vào hoặc không
    async?: boolean;
    contents?: { [key: string]: any; };
}
let jquery: JQueryAjaxSettings = {
    accepts: true,
    async:false,
}
console.log("jquery:" + jquery.accepts);
//generic
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kv1: KeyPair<number, string> = { key: 1, value: "Steve" }; 
console.log(kv1.key);

