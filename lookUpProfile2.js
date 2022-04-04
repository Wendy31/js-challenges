/*
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
    contacts.forEach(contact => {
        console.log(contact);
        if (name == contact.firstName && contact.hasOwnProperty(prop) == true) {
            console.log("Contact name: " + contact.firstName);
            console.log("Prop value: " + contact[prop]);
            return contact[prop];
        } else if (name == contact.firstName && contact.hasOwnProperty(prop) != true) {
            console.log("No such property");
            return "No such property";
        } else if (name != contact.firstName) {
            console.log("No such contact");
            return "No such contact";
        }
    })
}

// Only change code above this line


lookUpProfile("Harry", "likes");

*/

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
        for (let key in contacts[con]) {
            console.log("Key: " + key);
            if (name == contacts[con].firstName && prop == key) {
                console.log("Property: " + key);
                console.log("Prop value: " + contacts[con][key]);
                return contacts[con][key];
            } else if (name != contacts[con].firstName) {
                console.log("No such contact: ");
                return "No such contact";
            } else if (contacts[con].hasOwnProperty(prop) == false) {
                console.log("No such property: ");
                return "No such property";
            }
        }
    }
}

// Only change code above this line


lookUpProfile("Akira", "lastName");