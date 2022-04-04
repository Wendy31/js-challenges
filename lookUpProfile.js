// Setup
const contacts = [{
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let con in contacts) {
        console.log(contacts[0]);
        console.log("Has prop: " + prop + " = " + contacts[con].hasOwnProperty(prop));
        if (name == contacts[con].firstName && contacts[con].hasOwnProperty(prop) == true) {
            console.log("Property: " + prop);
            console.log("Prop value: " + contacts[con][prop]);
            return contacts[con][prop];
        } else if (name != contacts[con].firstName) {
            console.log("No such contact: ");
            return "No such contact";
        } else if (contacts[con].hasOwnProperty(prop) == false) {
            console.log("No such property: ");
            return "No such property";
        }
    }
}

// Only change code above this line


lookUpProfile("Akira", "likes");