// Truthy values
// "0", 'false', " ", [], {}, function(){}, 

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = []

if (userEmail) {
    console.log("Got the user email");
} else {
    console.log("Don't have user email");
}


// if (userEmail.length === 0) {   // checking triple equals to zero, if the Array is empty or not
//     console.log("Array is empty");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let value1;
// value1 = 5 ?? 10
// value1 = null ?? 10
// value1 = undefined ?? 15

value1 = null ?? 10 ?? 14

console.log(value1);

// terniary Operator

// Syntax: condition ? true : false

const chaiaurCode = 400
chaiaurCode <= 380 ? console.log("Less than 380") : console.log("More than 380");





