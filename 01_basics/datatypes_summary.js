//  Primitive - fundamental datatypes / Built-in datatypes

/* 7 types: 
N - Null
N - Number
S - String
S - Symbol
B - Boolean
B - BigInt
U - Undefined 
*/

const score = 4;
const scoreValue = 4.4

const isLoggedIn = false
const outsideTemp = null
let userEmailId;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

// const bigNumber = 1458965125794613n  // representing n in last means bigInt.


// Reference (Non primitive)

// Array, Objects, Functions

const lang = ["JavaScript", "Python", "ReactJS_library"];
let myObj = {
    name: "ReactJS",
    age: 4,
}

const myFunction = function() { 
    console.log("ReactJS Developer");
}

/* **************************************************************************************** */

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "CaffeineCodehubdotcom"

let anothername = myYoutubename;
anothername = "chaiarucode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    esewa: "user@ybl"
}

let userTwo = userOne

userTwo.email = "reactjsdeveloper@intern.com"

console.log(userOne.email);
console.log(userTwo.email);
