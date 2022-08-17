function greeter(person:String)
{
    return "Hello " + person;
}
var use ="Tuan Ngoc";
// document.body.innerHTML = greeter(use);


//rest parametor
let displayColors = (...colors) => {
    console.log(colors);
    
}
displayColors("Red");
displayColors("Red", "Green");

//spread parametor
let displayColors1 = (...colors) => {
    for (let i in colors)
    {
        console.log(colors[i]);
        
        }
}
let color = ["red", "green", "blue"];
displayColors1(...color)
//bóc tách array
var employee = ['red', 'green', 'blue'];
let [, , emp] = employee;
console.log(emp);

