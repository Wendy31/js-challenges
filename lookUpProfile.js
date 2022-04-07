/*
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been
pre-written for you. The function should check if name is an actual contact's firstName
and the given property (prop) is a property of that contact. If both are true, then
return the "value" of that property. If name does not correspond to any contacts then
return the string No such contact. If prop does not correspond to any valid properties 
of a contact found to match name then return the string No such property. 
*/

// data
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

// function
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop) == true) {
                console.log("Value: " + contacts[i][prop]);
                return contacts[i][prop];
            } else {
                console.log("No such property");
                return "No such property";
            }
        }
    }
    // return out of the for-loop as a final catch-all
    console.log("No such contact");
    return "No such contact";
}

lookUpProfile("Akira", "lastName");