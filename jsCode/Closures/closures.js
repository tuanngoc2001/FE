//parent function
function sayHello()
{
    let message="Hi";
    //funtion con
    //funtion con có thể truy xuất được scope của hàm cha
    function sayHi()
    {
        console.log(message);
    }
    return sayHi;
}
// let hello=sayHello();
// hello();

//clouse được tạo ra mỗi khi function được tạo


function sayHello2(message)
{
    return function hiYourName(name)
    {
        console.log(`${message} ${name}`);
    }
}
let hello =sayHello2("sayhello");
hello("abc");