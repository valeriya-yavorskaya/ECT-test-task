// Write a function which executes a string provided javascript code, while
// considering the following:
// a) The function can receive variables, which can be accessed in the
// code
// b) There is a set of "global" variables, which are always available
// - '$math': exposes two functions 'sum' and 'mul', adding or
// multiplying two numbers
// - '$logger': exposes the console.log functionality
// c) Give a name to the evaluated string code, so that it can be opened
// and debugged like any other source
// function execute(code, variables) {
//  // TODO
// }
// execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 });
// // -> Sum: 20
// execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 });
// // -> Mul: 51

const $math = {
        sum: (a, b) => a + b,
        mul: (a, b) => a * b
};
const $logger = (...args) => console.log(...args);

function execute(code, variables = {}) {  
    const varNames = Object.keys(variables).concat(['$math', '$logger']);
    const varValues = Object.values(variables).concat([$math, $logger]);
    const fn = new Function(...varNames, `"use strict";\n${code}\n//# sourceURL=execute.js`);
    return fn(...varValues);
}
