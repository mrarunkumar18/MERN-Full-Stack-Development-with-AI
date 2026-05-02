//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, Followed by their full name and ending with the fullname lenght.
// Example: Full Name = Arun Singh, Username = @ArunSingh10

let fullName = prompt("Enter your full name without spaces: ");

fullName = fullName.replace(/\s+/g, ""); // removes all spaces

let username = "@" + fullName + fullName.length;

console.log(username.toLowerCase());
