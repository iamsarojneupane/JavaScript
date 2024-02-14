"use strict"; // treat all JS code as newer version

// alert("Hello") // we are using nodejs, not browser.

/* 
let isLoggedIn = false 
let state;  // Undefined
let state = null
*/

/* 
N -> Null           let a = null;                       (standalone value)             
N -> Number         let b = 4;                          [2 to the power of 53 (2^53)]
S -> String         let c = "I'm reading javaScript";
S -> Symbol         let d = unique;
B -> Boolen         let e = "true/false";
B -> bigInt         let f = BigInt("567") + BigInt(765);
U -> Undefined      let g
*/

// object

console.log(typeof Null);       // Null is an object 
console.log(typeof undefined);  // undefined is a type in itself