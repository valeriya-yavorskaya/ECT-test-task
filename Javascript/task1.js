// Task 1: Create a function which creates a deep copy of an object
// function deepCopy(...) {
//  // TODO
// }

function deepCopy(object) {
    let clonedObject = {};

    // deal with object itself or object properties which are objects
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            clonedObject[key] = deepCopy(object[key]);
        }
    }

    // deal with some different types of possible object properties
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (Array.isArray(object)) {
        return object.map(item => deepCopy(item));
    }

    if (object instanceof Date) {
        return new Date(object.getTime());
    }

    if (object instanceof Error) {
        clonedObject = new object.constructor(object.message);
        clonedObject.name = object.name;
        clonedObject.stack = object.stack;
        for (const key of Object.getOwnPropertyNames(object)) {
            if (!['name', 'message', 'stack'].includes(key)) {
                clonedObject[key] = object[key];
            }
        }
        return clonedObject;
    }

    if (object instanceof Map) {
        clonedObject = new Map();   
        for (const key of object.keys()) {
            clonedObject.set(key, deepCopy(object.get(key)));
        }            
    }

    if (object instanceof Set) {
        clonedObject = new Set();   
        for (const item of object) {
            if (item && typeof item === 'object') {
                clonedObject.add(deepCopy(item));
            } else {
                clonedObject.add(item);
            }
        }
    }       

    return clonedObject;
}