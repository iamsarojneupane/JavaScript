// singleton
// Object.create

// object literals

const mySym = Symbol("React")

const myObj = {
    "name": "Saroj",
    "full name": "ReactJS_Developer",
    [mySym]: "key1",                    // defining symbol in object using []
    "age": 20,
    "location": "toronto",
    "email Id": "iamsarojb8@gmail.com",
    "isLoggedIn": true,
    "lastLoginDays": ["Monday", "Saturday"]
}

// console.log(myObj.name);
// console.log(myObj["full name"]);
// console.log(myObj["email Id"]);
// console.log(typeof myObj[mySym]);       // print symbol using []

myObj["email Id"] = "kca22.11sn@ismt.edu.np"
// Object.freeze(myObj)

myObj["emailId"] = "microsoft@ismt.edu.np"
// console.log(myObj);


// function 
myObj.greeting = function() {
    console.log("Hello React Developer");
}

myObj.greetingTwo = function() {
    console.log(`Hello React Developer, ${this.name}`);
}
// console.log(myObj.greeting);                  // undefined
console.log(myObj.greeting()); 
console.log(myObj.greetingTwo());



