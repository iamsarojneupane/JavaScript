let score = "Saroj"
// let score = "4JS"
// let score = null
// let score = undefined
// let score = true

// console.log(typeof score);
// console.log(typeof(score));     // typeof(method)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// let isLoggedIn = 1      // true
// let isLoggedIn = 0      // false
// let isLoggedIn = ""     // false
let isLoggedIn = "saroj";   // true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/* Notes
"4" =>           4
"4JS" =>         NaN
1 => true ; 0 => false;
"" =>            false
"Developer" =>   true

null =>      0
undefined => undefined
*/

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************* Operations *********************

let value = 4
let negValue = -value
console.log(negValue);

// console.log(2+2);    4
// console.log(2-2);    0   
// console.log(2*2);    4
// console.log(2**3);   8  // (2*2*2)
// console.log(2/3);    0.66    
// console.log(2%3);    2

let str1 = "hello";
let str2 = " JS Developer";

let str3 = str1 + str2;
// console.log(str3);

// tricky conversion
console.log(true);
console.log(+true);      // 1
console.log(+"");

// Prefix and Postfix Operator

let gameCounter = 4
gameCounter++;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
