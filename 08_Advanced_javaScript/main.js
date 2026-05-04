// let myObj = {
//     name: "Arun",
//     age: 21,
//     Job: "Cyber Security Engineer",
//     location: "Tokyo, Japan",
//     Hobbies: ["Reading", "Writing", "Coding"],
//     Skills: function () {
//         console.log("I am a ", this.Job);
//     },
//     Address: {
//         City: "Tokyo",
//         State: "Japan",
//         Zip: "100-0001"
//     }

// }

// // Accessing the properties of the object
// console.log(myObj.name);
// console.log(myObj['age']);
// console.log(myObj.Address.City);
// console.log(myObj.Hobbies[0]);



//



// let myObj ={
//     name : "Arun",
//     age : 21,
//     details : function(){
//         return `${this.name} is ${this.age} year old!`
//     }

// }

// console.log(myObj.details());



//



const obj = {
    name: "Arun",
    age: 21,
    city: "Surat"
}
console.log(Object.keys(obj)); // [ 'name', 'age', 'city' ]
console.log(Object.values(obj)); // [ 'Arun', 21, 'Surat' ]
console.log(Object.entries(obj)); // [ [ 'name', 'Arun' ], [ 'age', 21 ], [ 'city', 'Surat' ] ]
console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'job')); // false

