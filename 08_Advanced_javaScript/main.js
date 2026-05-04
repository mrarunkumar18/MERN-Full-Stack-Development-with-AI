let myObj = {
    name: "Arun",
    age: 21,
    Job: "Cyber Security Engineer",
    location: "Tokyo, Japan",
    Hobbies: ["Reading", "Writing", "Coding"],
    Skills: function () {
        console.log("I am a ", this.Job);
    },
    Address: {
        City: "Tokyo",
        State: "Japan",
        Zip: "100-0001"
    }

}

console.log(myObj.name)