// if
const isUserloggedIn = true
const temperature = 44

// Operator:  <, >, <=, >=, ==, !=, !==, === (checks both value and data type)

// if(temperature != 50){
//     console.log("temperature is greater than 50");
// } else {
//     console.log("temperature is less than 50");
// }


// if(temperature === 50){
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

const score = 400

// if(score > 100){
//     const power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

// shorthand notation
const balance = 1000

// if (balance > 500) console.log(`Balance is less than ${balance}`);

// Nesting

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 900");

// } else {
//     console.log("less than 1100");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log(`Allow to buy courses if the user isloggedIn and have a debitCard.`);
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User loggedin");
}





