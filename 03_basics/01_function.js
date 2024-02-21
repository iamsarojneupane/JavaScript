function sayName() {
    console.log("Saroj");
}
// sayName()

function addTwoNumber(number1, number2) {           // (parameters)
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(4, 3)                    // (arguments)

// console.log("Result:", result);

function loginUserMessage(userName = "React") {     // (userName = "React"): default values 
    if(userName === undefined ) {                   // if(!userName) 
        // console.log("Please enter a username!");
        return
    }

    return `${userName} just logged in.`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("developer"));

function calculateCartPrice(...numb1) {             // ...spread operator
    return numb1
}

// console.log(calculateCartPrice(200, 400, 800));


// Passing Object through functions
const user = {
    userName: "developer",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}.`);
}

// handleObject(user)

handleObject({
    userName: "reactCourse",
    price: 999
})

// Passing Arrays through functions

const newArray = [200, 400, 150, 750]

function returnSecondValue(getArray) {      // parameter: (getArray)
    return getArray[2]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 150, 750]));

