/* Number Methods*/

const score = 400
// console.log(score);

const balance = new Number(100.)
// console.log(balance);

// toString Method
// console.log(balance.toString().length);

// toFixed Method
// console.log(balance.toFixed(2));

// toPrecision method
    const otherNumber = 124.9898
//  console.log(otherNumber.toPrecision());  //toPrecision(precision value)

// toLocaleString
    const hundreds = 4000000
//  console.log(hundreds.toLocaleString('en-NP'));  // toLocaleString(locales, options)

// valueOf
    const anotherNumber = new Number(44)
//  console.log(typeof(anotherNumber));  

const num = anotherNumber.valueOf();
// console.log(num);
// console.log(typeof num);

/* **************** Maths ****************** */

// console.log(Math);
// console.log(Math.abs(-4));               absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));             highest value
// console.log(Math.floor(4.9));            lowest value
// console.log(Math.min(4, 5, 8, 9));       minimum value   
// console.log(Math.max(4, 3, 6, 9));       maximum value

// console.log(Math.random());  // greater than or equal to 0 and less than 1
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);