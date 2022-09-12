class Employee{
    name:String;
    sex:Sex;
    date:String;
    email:String;
    phone:number;
    constructor(name:String,sex:Sex,date:String,email:String,phone:number)
    {
        this.date=date,
        this.name=name,
        this.email=email,
        this.phone=phone,
        this.sex=sex;
    }
}
function showEmployee(employee:Employee):void{
    console.log(employee);
}
enum Sex{
    MAN,
    WOMAN,
    Other
}
//cần khai báo mảng rỗng trước
//vì thằng này cần giá trị
var employee:Employee[]=[];
const epl:Employee={
    name:'Tuấn Ngọc',
    date:"06/11/2001",
    email:"ngoccnttk60@gmail.com",
    phone:0969883705,
    sex:Sex.MAN
};
employee.push(epl);

