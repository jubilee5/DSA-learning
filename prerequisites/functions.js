function printHelloWorld() {
    console.log("Hello World");
}

printHelloWorld();

function greet(name) {
    console.log("Hello " + name);
}

greet("Jubilee");
greet("Akshay");

function add(a,b ) {
    let sum = a + b;
    console.log(sum);
}

add(2,3);

function multiply(a,b) {
    let product = a * b;
    console.log(product);
}

multiply(2,3);

function square(a) {
    let product = a * a;
    return product;
}

let result = square(2);         // when we return a value, we need to store it in a variable
console.log(result);


function sum(a,b) {
    let add = a+b ;
    console.log(add);
}

sum(4,9)