// Part 1: Theory Questions
// 1.	Rules for Naming Variables
// 	List the rules and best practices for naming variables in JavaScript. 
//  rules: name should be meaningful, 
//  camelCase, should not start with number, 
//  should not be a keyword, should not contain special characters,
//  should not contain spaces
//  best practices: variable starts with letter, $sign and _underscore, avoid using number in the start of variable 


// 2.	let and const
// 	Explain the differences between let and const. When should you use each? 
// when defining variable with let you have the control to change the value anytime while const is used for the constant values for example pi value,

// 3.	String Indexing
// 	What is string indexing in JavaScript? How do you access the last character of a string? 
// string indexing is the way to access the character of string by using the index number,
//  to access the last character of a string we can use string.length-1


// 4.	Useful String Methods
// 	Name three string methods in JavaScript and describe their purpose.
// 1. toUpperCase() - converts the string to uppercase
// 2. toLowerCase() - converts the string to lowercase
// 3. trim() - removes the white spaces from the start and end of the string 

// 5.	typeof and Data Conversion
// 	What does the typeof operator do in JavaScript? Provide examples. 
// typeof operator is used to check the type of the variable,
// example: let num = 5; console.log(typeof num); // number
// 	How do you convert a string to a number? 
// we can convert the string to number by using the Number() function or + sign. example
// let str = "5"; let num = Number(str); console.log(typeof str); // 5
// let str=+"5"; console.log(typeof str); // 5

// 6.	String Concatenation vs. Template Strings
// 	Compare string concatenation and template strings. Write examples for both. template strings are used to join the strings by using the backticks and ${} sign
// string concatenation is the way to join the two or more strings together by using the + sign
// example: let name = "Alice"; let age = 25; 
// console.log("My name is " + name + " and I am " + age + " years old.");
// console.log(`My name is ${name} and I am ${age} years old.`);

// 7.	Undefined, Null, and BigInt
// 	Differentiate between undefined, null, and BigInt in JavaScript. 
// when a variable is declared but not initalized that variable type become undefined 
// when a variable is declared if value is undetermind Null is used to better practice 
// BigInt is used to represent numbers out of range of counting either smallest one or largest one 


// 8.	Booleans and Comparison Operators
// 	How do comparison operators like == and === differ? Provide examples. 
//  == compares values but not datatypes whereas === compares both. example
// console.log(5=='5')// true
// console.log(5==='5')// false


// 9.	Truthy and Falsy Values
// 	Define truthy and falsy values. Provide three examples of each. 
// truthy values are the values that are true in the boolean context like [1,2,3],"hello",123. 
// falsy values are the values that are false in boolean context like Nan, "", Null, undefined


// 10.	Ternary Operator
// 	What is the ternary operator? // Rewrite the following if-else statement using a ternary operator: 
// if (score >= 50) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }

//  The ternary operator is a shorthand for a simple if/else statement.
let score=50;
let result= score >=50?'Pass':'fail';


// 11.	Logical Operators (and, or)
// 	Explain the && and || operators in JavaScript. How do they behave with truthy and falsy values? 
//  && operator returns true if both the values are true otherwise it returns false.
// || operator returns true if any of the values are true otherwise it returns false. example


// 12.	Switch Statements
// 	When would you use a switch statement over if-else? 
//  A switch statement is used when we have to check the value of a variable and perform a 
//  different action based on that value.


// 13.	Loops in JavaScript
// 	Compare the while, for, and do-while loops. When would you use each? 
//  while loop is used when we don't know how many times the loop will run.
//  for loop is used for known iteration 
//  do-while loop is used when we want to run the loop at least once.

// 14.	Break and Continue
// 	What are break and continue in loops? Provide examples of their usage. 
//  break is used to exit the loop and continue is to skip iteration on specific condition


// Part 2: Coding Questions
// Question 1: Rules for Naming Variables
// Write a program to declare three variables using valid and descriptive names. Log their values.
let name="Ali";
let age=25;


// Question 2: String Indexing
// Write a function that returns the first and last characters of a string.
function getFirstAndLast(str) {
    // Your code here
     // Output: { first: 'h', last: 'o' }
     return {first:str[0],last:str[str.length-1]}
    // return str[0]+str[str.length-1];
}
console.log(getFirstAndLast("hello")); // Output: { first: 'h', last: 'o' }

// Question 3: Useful String Methods
// Write a function that takes a string, converts it to uppercase, replaces all spaces with underscores, and returns the result.
function modifyString(str) {
    // Your code here
    return str.toUpperCase().replace(/ /g, "_");

}
console.log(modifyString("hello world !")); // Output: HELLO_WORLD

// Question 4: typeof and Data Conversion
// Write a program that demonstrates the use of typeof and converts a number to a string and vice versa.
const num = 123;
const str = "456";
console.log(typeof num, typeof str); // Output: number string
console.log(String(num), Number(str)); // Output: "123" 456
console.log(typeof String(num), typeof Number(str)); // Output: string number
console.log(typeof +str,+str,typeof (num+""), num+""); // Output: 456 "123"


// Question 5: String Concatenation vs. Template Strings
// Rewrite the following code using template strings:
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Alice and I am 25 years old.

// Question 6: Undefined, Null, and BigInt
// Write a program to demonstrate undefined, null, and BigInt.
let x;
console.log(x); // Output: undefined
let y = null;
console.log(y); // Output: null
const bigNumber = 12345678901234567890n;


// Question 7: Booleans and Comparison
// Write a program that compares two values using == and === and explains the difference in results.
const a = 5;
const b = "5";
console.log(a == b); // Output: true
console.log(a === b); // Output: false


// Question 8: If-Else and Ternary Operator
// Write a function that determines if a number is positive, negative, or zero. Use both if-else and a ternary operator.
function checkNumber(num) {
    // Using if-else
    // Your code here
    if(num>0){
        return "positive"
    }else if(num<0){
        return "negative"
    }else{
        return "zero"
    }
  
}

function checkNumberTernary(num) {
    // Using ternary operator
    // Your code here
    return num>0?"Positive":num<0?"Negative":"Zero"
}

console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumberTernary(0)); // Output: Zero

// Question 9: Logical Operators
// Write a program that uses && and || to check if a number is within a range.
function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(10, 5, 15)); // Output: true
console.log(isInRange(20, 5, 15)); // Output: false

// Question 10: Switch Statement
// Write a program that takes a day of the week (number) and logs the corresponding day using a switch statement.
function getDay(num) {
    // Your code here
    switch(num){
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Invalid day"; 
    }
}
console.log(getDay(3)); // Output: Wednesday

// Question 11: Loops
// Write a program that uses:
// 1.	A while loop to print numbers from 1 to 5. 
let i=1;
while (i <= 5) {
    console.log(i);
    i++;
}
// 2.	A for loop to print numbers from 6 to 10. 
for (let i = 6; i <= 10; i++) {
    console.log(i);
}
// 3.	A do-while loop to print numbers from 11 to 15. 
i=11;
do {
    console.log(i);
    i++;
} while (i <= 15);

// Question 12: Break and Continue
// Write a program that uses break to stop a loop when a specific number is reached and continue to skip a specific number.
i = 0;
while (i <= 10) {
    if (i === 5) {
        break;
    }
    if (i === 3) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
