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

// 1. no track/ value > add props
// 2. has track/ no value > create array and add value
// 3. has track/ value > add value at the end of array
// 4. has track but empty array > delete track property 
function updateRecords(records, id, prop, value) {
    
    for (let keyId in records) {
        console.log("keyId: " + keyId);
        if (id == keyId) {
            for (keyProp in records[id]) {
                console.log("keyProp: " + keyProp);
                // 1. if prop isnt tracks and value isnt empty strings update or set prop
                if (keyProp != "tracks" && Object.values(records[keyId]).includes("")) {
                    keyProp = value;
                    //records[id][prop] + keyProp;
                    console.log("1st loop " + keyProp);

                    // 2. has track/ no value > create array and add value
                } else if (key === prop && records[id][key].length > 0) {
                    key = [value];
                    console.log("2nd loop " + records[id]);
                } else if (key === prop && records[id][key].length > 0) {
                    object.key.tracks.push(val);
                } else if (i == "tracks" && records[id][key].length == 0) {
                    delete object.key.tracks;
                }
                console.log(records);
                return records;

            }
        }

    }

}
updateRecords(recordCollection, 1245, 'artist', 'ABBA');