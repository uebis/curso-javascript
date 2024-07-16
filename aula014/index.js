// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 += num2; // num1 = num1 + num2;
// num1 += num2; // 0.9
// num1 += num2; // 1.0
// num1 = Number(num1.toFixed(2));

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString(2) + num2); // binário
// console.log(typeof num1);
// num1 = num1.toString;
// console.log(num1.toFixed(2)); // fixa duas casas após a vírgula
// console.log(Number.isInteger(num1));
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp));