const languages = ["JavaScript", "Python", "Rust"]
const frameworks = [ "NextJS", "Django", "Rocket"]

// languages.push(frameworks);

// console.log(languages);
// console.log(languages[3]);

// concationation
// const knowledge = languages.concat(frameworks)
// console.log(knowledge);


// spread Operator
const knowledge = [...languages, ...frameworks]
// console.log(knowledge);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 4]]]


// flat
const usuable_another_array = another_array.flat(Infinity)
console.log(usuable_another_array);


// from
console.log(Array.isArray("Programmer"));
console.log(Array.from("Programmer"));

console.log(Array.from({name: "Programmer"})); // imp topic: we should declare what to print key or value otherwise it will throw empty[] array.

let score = 400
let score2 = 300
let score3 = 100

console.log(Array.of(score, score2, score3));



