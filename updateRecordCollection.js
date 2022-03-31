/*You are given an object literal representing a part of your musical album 
collection. Each album has a unique id number as its key and several other properties. 
Not all albums have complete information.You start with an updateRecords function that 
takes an object literal, records, containing the musical album collection, an id, a 
prop (like artist or tracks), and a value. Complete the function using the rules below 
to modify the object passed to the function. */

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// 1. if prop param is not tracks and value is not empty, set album's prop and value
// 2. if prop param is tracks but album does not have such prop, set album's prop tracks with array of values
// 3. if prop param is tracks and value is not empty, add value to the end of array
// 4. if value is empty, delete album's prop

let property = "";
function updateRecords(records, id, prop, value) {
    for (let keyId in records) {
        console.log("keyId: " + keyId);
        if (id == keyId) {
            for (let keyProp in records[keyId]) {
                property = keyProp;
                console.log("Property: " + property);
                if (prop != "tracks" && value != "") {
                    let propVal = records[keyId][prop] = value;
                    console.log("Property has new value added: " + propVal);
                } else if (prop === "tracks" && records[keyId].tracks == null && value != "") {
                    let trackAndVal = records[keyId][prop] = [value];
                    console.log("Both \"tracks\" and its values added: " + trackAndVal);
                } else if (prop == "tracks" && value != "") {
                    let valPosition = records[keyId].tracks;
                    valPosition.push(value);
                    console.log("New value added at the end: " + valPosition);
                } else if (value == "") {
                    console.log("Property deleted: " + records[keyId][prop]);
                    delete records[keyId][prop];
                }
                console.log(records);
                return records;
            }
        }
    }
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');