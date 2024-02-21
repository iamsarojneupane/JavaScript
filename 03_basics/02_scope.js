let numb1 = 300

if (true) {
    let numb1 = 10
    const numb2 = 40

    // console.log("Inner: ", numb1);
}


// console.log(`The value of numb1: ${numb1}`);
// console.log(`The value of numb2: ${numb2}`);

// console.log(`The value of numb3: ${ }`);


function one() {
    const userName = "developer"

    function two() {
        const website = "JavaScript"
        // console.log(userName);
    }
    // console.log(website);

    two()

}

one()

if(true) {
    const framework = "React"
    if(framework === "React") {
        const position = "developer"
        // console.log(`${framework} ${position}`)
    }
    // console.log(position);
}

// console.log(framework);


/* Interesting */

console.log(addOne(4));

function addOne(num) {
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}

// console.log(addTwo);
