// setTimeout(function(){
//     console.log('LẬP');
//     setTimeout(function(){
//         console.log('TRÌNH');
//         setTimeout(function(){
//            console.log('CODEGYM');
//        },2000);
//     },3000);
//  }, 5000);




// let sum: number = 0;
// let count: number = 0;
// for (let i = 2; count < 30; i++) {
//     let isPrime: boolean = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(!isPrime){
//         continue;
//     }
//     sum += i;
//     count++;
// }
// console.log(sum);
export class Share{
    private _x:number;
    private _y:number;
    constructor(x:number,y:number)
    {
        this._x=x;
        this._y=y;
    }
    setX(x:number){
        this._x=x;
    }
    setY(y:number)
    {
        this._y=y;
    }
    getX()
    {
        return this._x;
    }
    getY()
    {
        return this._y;
    }
}

