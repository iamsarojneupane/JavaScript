// map

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = numb.map( (num) => num + 10) 
// const newNumbs = numb.map( (num) => { return num + 10})

// map chaining 
const newNumbs = numb.map( (num) => num * 10).map( (num) => num + 1 )
                 .filter( (num) => num >= 40)

console.log(newNumbs);