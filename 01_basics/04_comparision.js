// console.log("2" > 1);
// console.log("02" > 1);
 
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true
console.log(null <= 0);     // true

/* The reason is that an equity check == and comparision >, <, >=, =< work differently.
Comparisions convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);     // false bacause === checks the datatypes of both data which is different.
console.log("2" == 2);      // true because both data are same althugh the datatype is different.

