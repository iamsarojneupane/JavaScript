// Reduce using function

const myNumb = [1, 2, 3, 4]

// const totalNumb = myNumb.reduce( () => {})
const totalNumb = myNumb.reduce(function (accumulator, currentValue) {
   // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
   return accumulator + currentValue
}, 0)                               // initialValue = 0

// console.log(totalNumb);

// using Arrow function
const myTotal = myNumb.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)   // initialValue = 0

// console.log(myTotal);

const shoopingCart = [

   {
      itemName: "Reactjs course",
      price: 999
   },
   {
      itemName: "Nextjs course",
      price: 1999
   },
   {
      itemName: "Python course",
      price: 2999
   },
   {
      itemName: "Game developement course",
      price: 3999
   }
]


const totalPrice = shoopingCart.reduce( (accumulator, items) => accumulator + items.price, 0)

console.log(`totalPrice = ${totalPrice}`);