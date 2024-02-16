const name = "Saroj"
const repoCount = 2

console.log(name + repoCount);

console.log(`Hello  ${name}! You have ${repoCount} repository.`);

const gameName = new String("DEVELOPER")
console.log(gameName);

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.slice(0,5));
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('E'));
// console.log(gameName.endsWith('per'));
// console.log(gameName.length);
// console.log(gameName.lastIndexOf("V"));
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.toString());

// substring method
const newString = gameName.substring(); // substring(start number, end number)
console.log(newString);

// slice method
const anotherString = gameName.slice(-9, 2); // slice starting from -9 to 2 and prints remaining character in the string.
console.log(anotherString);

// trim method
const newStringOne = "   developer   "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace method
const url  ="https://codersarojnepane.com/%4developer"

console.log(url);
console.log(url.replace('%4', '_'));

//includes method
console.log(url.includes('developer'));

// split method
console.llog(gameName.split('')) // split(seperator, limit)