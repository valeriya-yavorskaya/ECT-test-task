// Write a function which checks if two objects are equivalent
// - “undefined” and “null” can be treated as equal
// - consider all primitive types, objects, arrays and dates
// function check(...) {
//  // TODO
// }
// Example
// var data1 = { a: 17, b: { c: 'Test', d: null } };
// var data2 = { a: 17, b: { c: 'Test' } };
// var data3 = { a: 17, b: null };
// check(data1, data2); // -> true
// check(data1, data3); // -> false

function check(object1, object2) {
    // Deal with null and undefined
    if (object1 == null || object2 == null) {
      return object1 == null && object2 == null;
    } 

    // Compare primitives
    if (typeof object1 !== 'object' && typeof object2 !== 'object') {
        return object1 === object2;
    }

    // Compare Dates
    if (object1 instanceof Date && object2 instanceof Date) {
        return object1.getTime() === object2.getTime();
    }

    // Compare Arrays
    if (Array.isArray(object1) && Array.isArray(object2)) {
        if (object1.length !== object2.length) return false;
        for (let i = 0; i < object1.length; i++) {
            if (!check(object1[i], object2[i])) return false;
        }
        return true;
    }

    // Compare Objects
    if (typeof object1 === 'object' && typeof object2 === 'object') {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        const allKeys = new Set([...keys1, ...keys2]);
        for (const key of allKeys) {
            if (!check(object1[key], object2[key])) return false;
        }
        return true;
    }    

    return false;
}