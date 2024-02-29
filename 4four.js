// for in -> preferred used in objects

const myObject = {
   'JS': 'javascript',
   '3js': 'three.JS',
   py: 'python',
   rb: 'ruby on rails'
}

for (const key in myObject) {
      // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["JS", "RB", "PY", "PHP", "JAVA", "C#"];

for (const key in programming) {
      // console.log(programming[key]);
   
}

// map didn't works on iterate(loops)
let map = new Map();
map.set("nextLearning", "ReactJS");
map.set('USA', "United State of America")
map.set('NZ', "New Zealand")
map.set("nextLearning", "ReactJS");

for (const key in map) {
//    console.log(key);
//    console.log(map[key]);
}


