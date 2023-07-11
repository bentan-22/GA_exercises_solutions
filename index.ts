// TypeScript notes

// Type `tsc index.ts --outfile file-name.js` to specify the name of an output js file.
// Type `tsc index.ts -w` to compile your code automatically whenever a change is made.
// Type `tsc --init` to create a ts config file.

// In TypeScript, we can set the type we want a variable to be be adding : type (called a "type annotation" or a "type signature") after declaring a variable.
// let id: number = 5;
// let firstName: string = "danny";
// let hasDog: boolean = true;
// let unit: number;
// unit = 5;

// In TypeScript, it is usually best not to explicitly state the type since TypeScript can automatically infer the type of a variable.
// let sport = "football";
// hasDog = 'yes'; // This will return an error.

// In TypeScript, we can set a variable to be of a union type: a variable that can be assigned more than one type.
// let age: string | number;
// age = 26;
// age = "26";

// In TypeScript, we can define what type of data an array can contain.
// let ids: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ["Danny", "Anna", "Bazza"];
// let options: boolean[] = [true, false, false];
// let books: object[] = [
//   { name: "Fooled by randomness", author: "Nassim Taleb" },
//   { name: "Sapiens", author: "Yuval Noah Harari" },
// ];
// let arr: any[] = ["hello", 1, true];

// ids.push(6);
// ids.push('7'); This will return an error because ids is specified to take in numbers only.

// You can use union types to define arrays containing multiple types.
// let person: (string | number | boolean)[] = ['Danny', 1, true];
// person[0] = 100;
// person[1] = {name: 'Danny'}; This will return an error as person cannot contain an object.

// You don't need to explicitly state the type of the variable as TypeScript can infer it.
// let person = ['Danny', 1, true];
// person[0] = 100;
// person[1] = { name: 'Danny' }; This will return an error as person cannot contain an object.

// Tuples are arrays with fixed sizes and known datatypes. They are stricter than regular arrays. Tuples can be defined in TypeScript.
// let person: [string, number, boolean] = ['Danny', 1, true];
// person[0] = 100; This will return an error since index 0 of person must be a string.

// Objects in TypeScript must have all the correct properties and value types.
// let person: {
//   name: string;
//   location: string;
//   isProgrammer: boolean;
// };

// Assign person to an object with all the necessary properties and value types
// person = {
//   name: "Danny",
//   location: "United Kingdom",
//   isProgrammer: true,
// };

// person.isProgrammer = "Yes"; This will return an error as isProgrammer must be a boolean

// person = {
//   name: "John",
//   location: "United States",
// }; This will return an error because the isProgrammer property is missing.

// We use an interface to define the signature of an object and check that multiple objects have the same specific properties and value types.
// interface Person {
//   name: string;
//   location: string;
//   isProgrammer: boolean;
// };

// let person1: Person = {
//   name: 'Danny',
//   location: 'United Kingdom',
//   isProgrammer: true,
// };

// let person2: Person = {
//   name: 'Sarah',
//   location: 'Germany',
//   isProgrammer: false,
// };

// We can use function signatures to declare function properties.
// interface Speech {
//   sayHi(name: string): string;
//   sayBye: (name: string) => string;
// };

// let sayStuff: Speech = {
//   sayHi: function (name: string) {
//     return `Hi ${name}`;
//   },
//   sayBye: (name: string) => `Bye ${name}`,
// };
// console.log(sayStuff.sayHi('Heisenberg'));
// console.log(sayStuff.sayBye('Heisenberg'));

// In TypeScript, we can define the types of the function arguments and the return type of the function.
// function circle(diam: number): string {
//   return 'The circumference is ' + Math.PI * diam;
// };

// console.log(circle(10));

// In TypeScript, it is not necessary to explicitly state that a function is a function as TypeScript can infer it, as well as the return type.

// const circle = (diam: number) => {
//   return 'The circumference is ' + Math.PI * diam;
// };

// We can add a question mark after a parameter to make it optional.

// const add = (a: number, b: number, c?: number | string) => {
//   console.log(c);
//   return a + b;
// };
// console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));

