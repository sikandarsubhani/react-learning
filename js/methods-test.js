// Part 1: Theory Questions
// 1.	Function Declarations vs. Function Expressions
// •	What is the difference between a function declaration and a function expression? Provide examples to illustrate.
//    the difference between function declaration and function expression is that function declaration is hoisted to the top of the code and can be called before it is declared, while function expression is not hoisted and cannot be called before it is declared.
 
// 2.	Arrow Functions
// •	How do arrow functions differ from traditional functions in JavaScript?
//    arrow functions are anonymous functions and do not have their own this keyword. arrow functions are more concise and have implicit return.

// •	Explain how the this keyword behaves in arrow functions. 
//    refer to the parent scope of the arrow function.example:
//    const obj = {
//        name: "Alice",
//        greet: function() {
//            setTimeout(() => {
//                console.log(`Hello, ${this.name}`);
//            }};

// 3.	Hoisting
// •	How does hoisting affect function declarations and function expressions? Provide an example to clarify. 
//    hoisting allows function call before the function is declared. while function expression cannot be called before it is declared.
// example:
//    console.log(declaredFunction()); // this will not give error because the function is hoisted.

// 4.	Lexical Scope and Block Scope
// •	Define lexical scope in JavaScript. How does it differ from block scope? 
//    lexical scope looks for the variable in the parent scope if it is not found in the current scope. block scope looks for the variable in the block where it is declared.

// •	Explain function scope vs. block scope using examples with var, let, and const. 
//    var is function scoped, let and const are block scoped. example:
//    function testScope() {
//        if (true) {
//            const functionScoped1 = "I am function scoped!";
//            var functionScoped2 = "I am function scoped also!"; 
//            let blockScoped = "I am block scoped!";
//        }
//        console.log(functionScoped1,functionScoped2); // I am function scoped!
//        console.log(blockScoped);    // ReferenceError: blockScoped is not defined
//    }

// 5.	Default Parameters
// •	What are default parameters, and how do they simplify function definitions? Provide an example to illustrate. 
//    default parameters are the values assigned to the parameters if the value is not provided. example:
//    function greet(name = "Alice") { rerurn `Hello ${name}`; }

// 6.	Rest Parameters
// •	Explain rest parameters in JavaScript. How are they different from the arguments object? 
//    rest parameters are used to pass a variable number of arguments to a function. they are different from the arguments object because rest parameters are an array-like object and arguments object is an array-like object.

// 7.	Parameter Destructuring
// •	What is parameter destructuring, and why is it useful? Provide an example.
//    parameter destructuring is used to assign the values of the parameters to the variables in one line. example:
//    function greet({ name, age }) { console.log(`Name: ${name}, Age: ${age}`); }

// 8.	Callback Functions
// •	What is a callback function in JavaScript? Why are they commonly used? Provide a simple example. 
//    callback function is a function passed as an argument to another function.example:
//    function calculate(a, b, callback) { return callback(a, b); }
//    const add = (x, y) => x + y;
//    console.log(calculate(5, 3, add)); // Output: 8
// 9.	Functions Returning Functions
// •	Explain the concept of a function returning another function in JavaScript. Why might this pattern be useful? 
//    function returning function is used to return a function from another function. it is useful because it allows us to create a function factory.
//    example:
//    function createMultiplier(x) { return function(y) { return x * y; }; }

// Part 2: Coding Questions
// Question 1: Function Declaration and Expression
// Write a function declaration and a function expression that both calculate the square of a number. Test both functions.
// Function Declaration
function squareDeclaration(num) {
    // Your code here
    return num * num;
}

// Function Expression
const squareExpression = function(num) {
    // Your code here
    return num * num;
};

console.log(squareDeclaration(4)); // Output: 16
console.log(squareExpression(4)); // Output: 16

// Question 2: Arrow Function
// Convert the following traditional function into an arrow function:
// Traditional function
function multiply(a, b) {
    return a * b;
}

// Arrow function
const multiplyArrow = (a, b) => {
    // Your code here
    return a * b;
};

console.log(multiplyArrow(5, 6)); // Output: 30

// Question 3: Hoisting
// Write a program to demonstrate the difference in hoisting behavior between a function declaration and a function expression.
console.log(declaredFunction()); // this will not give error because the function is hoisted.

function declaredFunction() {
    return "I am a declared function!";
}

//console.log(expressionFunction()); // this will give error because the function is not hoisted.

var expressionFunction = function() {
    return "I am a function expression!";
};

// Question 4: Function Inside Function
// Write a function outerFunction that contains another function innerFunction. outerFunction should return the result of innerFunction multiplied by 2.
function outerFunction(num) {
    function innerFunction() {
        // Your code here
        return num * 2;
    }
    // Your code here
    return innerFunction();
}

console.log(outerFunction(5)); // Example Output: 10

// Question 5: Lexical Scope
// Write a program to demonstrate lexical scope by defining a function inside another function and accessing a variable from the outer function's scope.
function outer() {
    const outerVar = "I am from the outer scope!";
    function inner() {
        // Your code here
        console.log(outerVar);
    }
    inner();
}

outer(); // Example Output: I am from the outer scope!

// Question 6: Block Scope vs. Function Scope
// Write a program that demonstrates the difference between block scope (using let or const) and function scope (using var).
function testScope() {
    if (true) {
        var functionScoped = "I am function scoped!";
        let blockScoped = "I am block scoped!";
    }
    console.log(functionScoped); // I am function scoped! 
    // console.log(blockScoped);    // ReferenceError: blockScoped is not defined
}

testScope();

// Question 7: Default Parameters
// Write a function greet that takes two parameters: name and greeting. If greeting is not provided, it should default to "Hello".
function greet(name, greeting = "Hello") {
    // Your code here
    return `${greeting} ${name}`;
}
console.log(greet("Alice"));             // Output: Hello Alice
console.log(greet("Alice", "Welcome")); // Output: Welcome Alice

// Question 8: Rest Parameters
// Write a function sumAll that takes any number of arguments and returns their sum using rest parameters.
function sumAll(...nums) {
    // Your code here
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Question 9: Parameter Destructuring
// Write a function displayUser that takes an object with name and age properties as its parameter and logs "Name: <name>, Age: <age>". Use parameter destructuring.
function displayUser({ name, age }) {
    // Your code here
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "John", age: 30 };
displayUser(user); // Output: Name: John, Age: 30

// Question 10: Callback Function
// Write a function calculate that takes two numbers and a callback function. The callback function should define how to combine the two numbers (e.g., add, subtract, multiply, divide).
function calculate(a, b, callback) {
    // Your code here
    return callback(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(calculate(5, 3, add)); // Output: 8

// Question 11: Function Returning Function
// Write a function createMultiplier that takes a number x and returns a new function. The returned function should take another number y and return the product of x and y.
function createMultiplier(x) {
    return function(y) {
        // Your code here
        return x * y;
    };
}
const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // Output: 10

