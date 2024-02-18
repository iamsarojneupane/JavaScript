const createArray = [0, 1, 2, 3, 4]
const createFramework = ["Vue", "Angular", "React_Library"];

const createArrays = new Array("javaScript_developer", "react_developer", "fullStack_developer")         // preferred declaration

// console.log(createArrays);

/* Array methods */

// Array.push
// createArray.push(5)
// console.log(createArray);

// Array.pop 
// createArray.pop(5)
// console.log(createArray);

// unshift & shift method
// createArray.unshift(5)           // adds the specified elements to the beginning of an array and returns the new length of the array. similar as pull method

// createArray.shift()              // similar as pull method


// Array.includes
// console.log(createArray.includes(4));

// // Array.index
// console.log(createArray.indexOf(4));

// const newArray = createArray.join()
// console.log(createArray);

// console.log(newArray);
// console.log(typeof newArray);


// slice & splice methods
console.log("A ", createArray);

// slice
const newArray1 = createArray.slice(1, 3)       // To access part of an array without modifying it.

console.log(newArray1);
console.log("B ", createArray);

// splice
const newArray2 = createArray.splice(1, 3)      // To create a new array with a segment removed or replaced without mutating(changing) the original array.

console.log("C ", createArray);
console.log(newArray2);
