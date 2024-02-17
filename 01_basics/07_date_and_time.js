// dates

let myDate = new Date()
// console.log(myDate.toString());             //  Sat Feb 17 2024 19:31:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());         //  Sat Feb 17 2024
// console.log(myDate.toLocaleString());       //  2/17/2024, 7:31:22 PM
// console.log(myDate.toISOString());          //  2024-02-17T19:31:22.158Z
// console.log(myDate.toJSON());               //  2024-02-17T19:31:22.158Z
// console.log(myDate.toLocaleDateString());   //  2/17/2024

console.log(typeof myDate);                    //  object

// let createdDate = new Date(2024, 0, 19)
// console.log(createdDate.toDateString());

let createdDate = new Date(2024, 0, 19, 4, 4, 4)       //   month always starts with 0
// console.log(createdDate.toLocaleString());

// yy.dd.mm date

let createdDateTime = new Date("2024-03-19")
// console.log(createdDateTime.toLocaleString());

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(createdDateTime.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);


newDate.toLocaleString('default', {

    weekday: "narrow",
})

