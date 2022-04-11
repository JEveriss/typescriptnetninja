// let character = "Mario";
// let age = 30;
// let isBlackBelt = false;

// // character = 20;
// character = "Luigi";

// // age = 'Yoshi';
// age = 100;

// // isBlackBelt = 'yes';
// isBlackBelt = true;

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(23));

// // arrays
// let names = ["Luigi", "Mario", "Yoshi"];
// names.push("Toad");
// // names.push(3);
// // names[0] = 1;

// let numbers = [10, 20, 30, 40];
// // numbers.push('hello');
// // numbers[0] = 'hello';

// let mixed = ["Ken", 23, "Ryu", 69];
// mixed.push("Chun-Li");
// mixed.push(420);
// mixed[0] = 1;

// // objects

// let ninja = {
//   name: "Mario",
//   belt: "black",
//   age: 23,
// };

// // key: value pairs act like variables
// // variables cannot be re-assigned once they have been first

// ninja.age = 30;
// ninja.name = "Luigi";
// // ninja.age = 'Thirty';
// // ninja.skills = ['stealth', 'fighting']
// // additional properties cannot be added

// // ninja = {
// //     name: 'Yoshi',
// //     belt: 'green',
// // age: 20,
// // skills: [],
// // }
// // objects must follow the same structure of the initial object

// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age = 'Luigi';
// age = 23;
// // isLoggedIn = 69;
// isLoggedIn = true;

// Arrays
// let ninjas: string[] = [];

// ninjas = [10, 20];
// ninjas = ['Mario', 'Luigi']
// ninjas.push("Yoshi");
// cannot .push to an array that hasn't been initialised with the type of properties it will contain
// let ninjas: string[] is saying what 'ninjas' will be once initialised
// add '= []' so that it initialised with an empty array

// union type
// let mixed: (string | number | boolean)[] = [];
// mixed.push("hello");
// mixed.push(23);
// mixed.push("no");
// mixed.push(true);
// console.log(mixed);

// let uid: string|number;
// uid = 'hello';
// uid = 23;
// // uid = true;

// // objects
// let ninjaOne: object;
// ninjaOne = {name: 'Mario', age: 23};

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string,
// }

// ninjaTwo = {
//     name: 'Luigi',
//     age: 30,
//     beltColour: 'red'
//     // skills: [];
// }

// let age: any = 25;
// // age = 25;
// age = true;
// console.log(age);
// age = "hello";
// console.log(age);
// age = { name: "Luigi" };
// console.log(age);

// let mixed: any[] = [];
// mixed.push("Mario");
// mixed.push(23);
// mixed.push(true);
// console.log(mixed);

// let ninja: { name: any; age: any };

// ninja = { name: "Luigi", age: 300 };
// console.log(ninja);
// ninja = { name: 300, age: "Luigi" };
// console.log(ninja);

// let greet = () => {
//     console.log('alright world');
// }

// let greet: Function;

// greet = () => {
//   console.log("Alright, world?");
// };

// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b);
//   console.log(c);
// };

// add(1, 2);
// // 'c: number | string' = 10 10 is the default parameter
// // if there wasn't a default it would be 'c?: number | string'

// const minus = (a: number, b: number)=>{
//     return a + b;
// }
// let result = minus(10, 7);
// // automatically inferred that minus is a number
// // (a: number, b: bumber): number...
// // explicitly declares value

// // Type Aliases
// type StringOrNum = string | number;
// type objWithName = {name: string, uid: StringOrNum}
// // allows us to simplify or shorten the allowed properties

// const logDetails = (uid: StringOrNum, item: string)=>{
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greetings = (user: objWithName)=>{
//     console.log(`${user.name} has a uid of ${user.uid}`);
// }

// Function Signature
// let greet: Function;

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

///

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return (num1 = num2);
  }
};

///

let logDetails: (object: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
