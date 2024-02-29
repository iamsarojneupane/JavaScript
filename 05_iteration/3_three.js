// for of -> preferred used on Array      
// higher order function

["", "", '']      // Array
[{}, {}, {}]      // Object

const arr = [1, 2, 3, 4, 5]

for (const numb of arr) {  // Reassigning the variable inside the loop body does not affect the original value in the iterable 
   // console.log(numb);  
}

const greetings = "Hello World!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);   
}

// Maps -> didn't repeat same data || unique value

let map = new Map();
map.set("nextLearning", "ReactJS");
map.set('USA', "United State of America")
map.set('NZ', "New Zealand")
map.set("nextLearning", "ReactJS");

// console.log(map);


// for of loop on map
for (const [key, value] of map) {
   console.log(key, ':-', value);
}


// for of loop did not work on object
const myObject = {
   'framework':  'ReactJS',
   'language':  'JavaScript',
    position:  'Developer',
    experience: 'less than 1 year'
}

for (const [key, value] of myObject) {
   // console.log(key + ": " + value);
}




