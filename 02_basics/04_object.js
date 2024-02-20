// const myAppUser = new Object()           // singleton object
const appUser = {}

appUser.id = "9898"
appUser.name = "Bravo"
appUser.isLoggedIn = true

// console.log(appUser);

// object inside object
const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Saroj",
            lastName: "Neupane"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)          // (target, source)

const obj3 = {...obj1, ...obj2}                        // spread operator

// console.log(obj3);

const users = [
    {
        id: 4,
        email: "developer@gmail.com"
    },
    {
        id: 44,
        email: "Reactdeveloper@gmail.com"
    },
    {
        id: 444,
        email: "JavaScriptdeveloper@gmail.com"
    },
]

users[1].email  
// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLogged'));        // property


const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "Jackson"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
// console.log(Instructor);

// destructuring object in ReactJS
// const courses = ({framework}) => {

// }

// courses(framework = "React")
// console.log(courses);

// APIs in JSON
// {
//     "name": "developer",
//     "coursename": "react",
//     "price": "999"
// }

[
    {},
    {},
    {}
]









