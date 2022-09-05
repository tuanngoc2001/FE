// var object={'a':1};
// console.log(_.has(object,'a'));//_.equals()

var obj={
    id:1,
    firstName:"Nguyen Tuan Ngoc",
    lastName:"TuanNgoc",
    birthDay:new Date(2001,06,11)
}
// console.log(_.map(obj,m=>m));
// _.omit(object,['firstName'])//tự động bỏ trường firstName khi hiện ra
//_.keys(object):lấy ra các trường của nó
// console.log(_.keys(obj));

//tự động kiểm tra tuổi để đưa ra object 
var users=[
    {'user':'barney','age':36,'active':true},
    {'user':'fred','age':40,'active':false},
    {'user':'pebbles','age':1,'active':true}
]
//lamda
console.log(_.find(users,function(o){return o.age>=40}));
function square(n)
{
    return n*n;
}
// ._map([4,8],square)//gọi hàm dể tính toán
//và trả về [16,64]

// ---------
// ._map({'a':4,'b':8},square)
//=>[16,64]


var mapper=[
    {'user':'barney'},
    {'user':'fred'}
]
//map lại
console.log(_.map(mapper,'user'));