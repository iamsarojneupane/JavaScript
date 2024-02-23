const user = {
    userName: "Saroj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
        console.log(this);
    }
} 


// user.welcomeMessage()
// user.username = "saroj"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "developer"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "developer"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "developer"})


console.log(addTwo(3, 4))


// const myArray = [2, 4, 3, 6, 9]

// myArray.forEach()
