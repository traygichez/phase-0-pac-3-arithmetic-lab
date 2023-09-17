function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n-1;
}

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

let number = 5;
number = number + 3;
number = number - 2;
number = number * 10;
number = number / 5;

number = 10;

function add5() {
    return (number += 5);
}
function divideBy3() {
    return (number /= 3);
}

console.log(divideBy3());
console.log(add5());

number = 10;

console.log(add5());
console.log(divideBy3());

function makeInt(string) {
    return parseInt(string, 10);
}
function preserveDecimal(string) {
    return parseFloat(string);
}