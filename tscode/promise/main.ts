// import { Rectangle } from "./Rectangle";
// var rectangle=new Rectangle(5,5,10,20);
// console.log(rectangle.area());




let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 1000001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})