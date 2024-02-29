// for each  -> 
const coding = ["JS", "reactjs", "python", "rust", "nextjs"]

// callbackfn doesnot have function name, it is anonymous arrow function.
coding.forEach( function (val) {
   // console.log(val);
})

// arrow function
coding.forEach( (item) => {
   // console.log(item);            //    (value, item, parameter)
} )

function printMe(item){
   console.log(item);
}

// coding.forEach(printMe);             // pass the function as a argument to forEach method.

coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
} )

// Object inside Array -> [{}, {}, {}]
const myCoding = [
   {
      languageName: "javascript",
      langugageFileName: "js"
   },

   {
      languageName: "reactjs",
      langugageFileName: "reactjs"
   },

   {
      languageName: "python",
      langugageFileName: "py"
   }
] 

myCoding.forEach( (item) => {
   
   console.log(item.languageName);
} );                     