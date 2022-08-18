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


// //class
// // class Person {
// //     private name: string;
  
// //     public constructor(name: string) {
// //       this.name = name;
// //     }
  
// //     public getName(): string {
// //       return this.name;
// //     }
// //   }

// //
//   interface Shape {
//     getArea: () => number;
//   }
  
//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
  
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }
//   //generics
//   function createPair<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
//   }
//   console.log(createPair<string, number>('hello', 42)); 

// ///Các ràng buộc có thể được thêm vào generic để hạn chế những gì được phép
// //Các ràng buộc làm cho nó có thể dựa vào một kiểu cụ thể hơn khi sử dụng kiểu chung.
//   function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
//     console.log(`creating pair: v1='${v1}', v2='${v2}'`);
//     return [v1, v2];
//   }
//keyof
//khở tạo 1 interface
interface Person {
    name: string;
    age: number;
  }
  
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person = {
    name: "Max",
    age: 27
  };
  //'name' sẽ đc truyển vào biến property
  printPersonProperty(person, "name");