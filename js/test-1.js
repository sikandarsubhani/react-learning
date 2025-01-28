// JS Q-1
// 1. Rules for Naming Variables
// a) Write a variable declaration for storing a person's age. Name the variable appropriately and assign it a value of 25.
let age=25

// b) Can you declare a variable with a name that starts with a number? Why or why not?
// no, name must begin with letter $sign or _underscore.

// c) What will happen if you try to use a JavaScript reserved keyword (like let, const, if, etc.) as a variable name? Provide an example.
// syntax error will ocurr for unsing reserved keyword as a variable name.example,
//let let = 10; //'let' is not allowed to be used as a name in 'let' or 'const' declarations.ts(2480)


// 2. Let
// a) Create a variable using let to store the value 10. Then, change the value of the variable to 20 and print it.
let num = 10
num = 20
console.log(num)

// b) What happens if you try to redeclare a variable that was declared using let in the same scope?
// syntax error occur as commented below
// let num = 30; // Parsing error: Identifier 'num' has already been declared eslint Cannot redeclare block-scoped variable 'num'.ts(2451)

// c) Can you access a let variable before it is declared in the code? Try writing a piece of code to test it.
// no we cannot access a let variable before it is declared in the code. example:
// console.log(x); // ReferenceError: Cannot access 'x' before initialization

// 3. Const
// a) Declare a constant variable pi and assign it the value 3.14. Try changing the value of pi to 3.14159. What happens?
const pi = 3.14
// pi = 3.14159; // TypeError: Assignment to constant variable.

// b) Can you modify the properties of an object declared with const? Provide an example.
// properties can be modified but the object itself cannot be reassigned.example:
const person = { name: "John" };
person.age = 30; // Allowed
person.name = "Wick"; // wasnt sure but it worked
// person = { name: "Jane" }; // TypeError: Assignment to constant variable.
console.log(person)

// c) Why is const used instead of let? Provide a situation where you would use const over let.
// const is used when the value of the variable is not expected to change. for example value of pi as mentioned above 

// 4. String Indexing
// a) Given the string let str = "Hello", what is the character at index 1?
let str = "Hello"
console.log(str[1]) //str[1]=e

// b) Write a code snippet to get the last character of a string str = "JavaScript".
let str1 = "JavaScript"
console.log(str1[str1.length - 1])

// c) What will str[0] return if the string is an empty string?
//undefined. example
let str2 = ""
console.log(str2[0]) //undefined

// 5. Useful String Methods
// a) Write a function to convert a string str = "javascript" to uppercase.
function toUpperCase(str) { return str.toUpperCase() }
console.log(toUpperCase("javascript"))

// b) Use the substring method to extract the word "script" from the string str = "JavaScript".
let str3 = "JavaScript"
let script=str3.substring(4, 10)

// c) Check if the string str = "JavaScript" contains the substring "Script". Write a code to test this.
console.log(str3.indexOf("Script")>-1 ? "yes, it is" : "no, it is not")

// 6. typeof and Data Conversion
// a) What is the result of typeof 42?
// number

// b) Write a piece of code to convert the string "123" into a number and add it to 10.
let num1 = "123"
console.log(+num1 + 10)

// c) What will happen if you try to convert undefined to a number? Provide a code example.
// NaN(Not a number). example:
let n = undefined
console.log(+n)

// 7. String Concatenation
// a) Concatenate two strings: "Hello" and "World" to make "Hello World".
let str4 = "Hello"
let str5 = "World"
console.log(str4 + " " + str5)

// b) Combine a string "Number: " with a number 5 using concatenation.
console.log("Number: " + 5)

// c) Is it possible to concatenate a number and a boolean using the + operator? Test it in code.
console.log(5 + true) //6

// 8. Template Strings
// a) Use a template string to display the message: "Hello, my name is John and I am 30 years old.".
let firstName = "John"
age= 30
console.log(`Hello, my name is ${firstName} and I am ${age} years old.`)

// b) Write a template string to combine the variables firstName = "Jane" and age = 25 into a message like "My name is Jane and I am 25.".
firstName = "Jane"
age=25
console.log(`My name is ${firstName} and I am ${age}.`)

// c) How do you include an expression inside a template string? Demonstrate with the expression 5 + 10.
console.log(`The sum of 5 and 10 is ${5 + 10}.`)

// 9. Undefined, null, BigInt
// a) What will be the output of typeof undefined?
// undefined

// b) Create a variable x and assign it the value null. What is the result of typeof x?
let x = null
console.log(typeof x) //object

// c) Write a code example where a BigInt is used to store a very large number.
let bigInt = 1234567890123456789012345678901234567890n

// 10. Booleans & Comparison Operators
// a) Write a condition that checks if the variable age = 20 is greater than or equal to 18.
age=20
console.log(age>=18) //true

// b) What does the expression 5 == "5" return? Why?
// true, beccause == operator only checks the value not the type. for type and value both === operator is used.

// c) Use the !== (strict inequality) operator to check if two values are not equal. Test with 10 and "10".
console.log(10 !== "10") //true

// 11. if-else & Truthy-Falsy Values
// a) Write an if-else statement to check if the variable isRaining = true, and print "Take an umbrella" if true, otherwise print "Enjoy the sunshine".
let isRaining = true
if (isRaining) {  console.log("Take an umbrella") } else { console.log("Enjoy the sunshine") }


// b) In JavaScript, which values are considered falsy? Test with a variable x = 0.
let x1 = 0
if (x1) { console.log("Truthy") } else { console.log("Falsy") } //Falsy

// c) Given a variable name = "", write an if-else condition to check if the variable is truthy or falsy.
let name = ""
if (name) { console.log("Truthy") } else { console.log("Falsy") } //Falsy

// 12. Ternary Operator
// a) Use a ternary operator to check if a number x = 15 is greater than 10. If it is, return "Greater", otherwise return "Smaller".
let x2 = 15
console.log(x2 > 10 ? "Greater" : "Smaller")

// b) Write a ternary expression that assigns the value "Even" or "Odd" to the variable result based on whether num = 6 is even or odd.
let num2 = 6
let result = num2 % 2 === 0 ? "Even" : "Odd"

// c) Use a ternary operator to check if a string name = "Alice" is empty. If it is, return "Name is empty", else return "Name is present".
let name1 = "Alice"
console.log(name1 === "" ? "Name is empty" : "Name is present")


// 13. and, or Operator
// a) Write a condition using the && (AND) operator to check if a variable age = 25 is both greater than or equal to 18 and less than or equal to 30.
let age1 = 25
console.log(age1 >= 18 && age1 <= 30) //true

// b) Use the || (OR) operator to check if a variable x = 10 is either equal to 5 or x is greater than 8.
let x3 = 10
console.log(x3 === 5 || x3 > 8) //true

// c) Given isDay = true and isWeekend = false, use the && operator to check if it is both a day and a weekend.
let isDay = true
let isWeekend = false
console.log(isDay && isWeekend) //false


// 14. Nested if-else
// a) Write a nested if-else statement to check if a number num = 15 is positive, negative, or zero.
let num3 = 15
if (num3 > 0) { console.log("Positive") }
else if (num3 < 0) { console.log("Negative") }
else { console.log("Zero") }

// b) Write a nested if-else statement to determine if a number num = 50 is between 1 and 100.
let num4 = 50
if (num4 >= 1 ) {
  if (num4 <= 100) { console.log("Between 1 and 100") } }  
else { console.log("Not between 1 and 100") }

// c) Create a program using a nested if-else to check if a person is eligible to vote based on age (age >= 18) and citizenship (citizen = true).
let age2 = 18
let citizen = true
if (age2 >= 18){
   if (citizen) { console.log("Eligible to vote") } }
else { console.log("Not eligible to vote") }


// 15. Else if
// a) Write a program using else if to print "Small", "Medium", or "Large" based on a number size = 25 (small: 1-10, medium: 11-20, large: 21+).
let size = 25
if (size >= 1) {
  if (size <= 10) { console.log("Small") }
  else if (size <= 20) { console.log("Medium") }
  else { console.log("Large") } 
} else { console.log("Invalid size") }

// b) Use else if to check the temperature temp = 30 and print "Cold", "Warm", or "Hot" based on the temperature (Cold: below 15, Warm: 15-25, Hot: above 25).
let temp = 30
if (temp < 15) { console.log("Cold") }
else if (temp <= 25) { console.log("Warm") }
else { console.log("Hot") }

// c) Create an else if structure to classify a number num = -5 as "Negative", "Zero", or "Positive".
let num5 = -5
if (num5 < 0) { console.log("Negative") }
else if (num5 === 0) { console.log("Zero") }
else { console.log("Positive") }

// 16. Switch Statement
// a) Write a switch statement that checks the day of the week (day = 3) and returns the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
let day = 3
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// b) Using a switch statement, check if a number num = 7 is between 1 and 5, 6 and 10, or greater than 10.
let num6 = 7
switch (true) {
  case num6 >= 1 && num6 <= 5: console.log("Between 1 and 5"); break;
  case num6 >= 6 && num6 <= 10: console.log("Between 6 and 10"); break;
  case num6 > 10: console.log("Greater than 10"); break;
  default: console.log("Invalid number");
}
// c) Create a switch statement to return "Red", "Blue", or "Green" based on the color code (colorCode = 1 for red, 2 for blue, 3 for green).
let colorCode = 1
switch (colorCode) {
  case 1: console.log("Red"); break;
  case 2: console.log("Blue"); break;
  case 3: console.log("Green"); break;
  default: console.log("Invalid color code");
}

// 17. While Loop
// a) Write a while loop that prints numbers from 1 to 5.
let i = 1
while (i <= 5) { console.log(i); i++ }

// b) Write a while loop that prints the sum of numbers from 1 to 10.
let sum = 0
i = 1
while (i <= 10) { sum += i; i++ }

// c) Create a while loop that prints "Hello" five times.
i=0
while(i<=5){console.log("hello");i++}


// 18. For Loop
// a) Write a for loop to print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) { console.log(i) }

// b) Write a for loop to find the product of numbers from 1 to 4.
let product = 1
for (let i = 1; i <= 4; i++) { product *= i }

// c) Create a for loop that iterates through an array let arr = [10, 20, 30] and prints each element.
let arr = [10, 20, 30]
for (let i = 0; i < arr.length; i++) { console.log(arr[i]) }




// 19. Break and Continue
// a) Write a for loop that prints numbers from 1 to 10, but skips 5 using continue.
for (let i = 1; i <= 10; i++) { if (i === 5) { continue } console.log(i) }

// b) Write a while loop that stops when a number num = 3 is reached using break.
let num7 = 1
while (num7 <= 10) { if (num7 === 3) { break } console.log(num7); num7++ }

// c) Write a for loop that breaks out of the loop when the sum of numbers exceeds 15.
sum = 0
for (let i = 1; i <= 10; i++) { sum += i; if (sum > 15) { break } }

// 20. Do-while Loop
// a) Write a do-while loop that prints the number 1 to 5.
i = 1
do {
   console.log(i); i++ 
}while (i <= 5);

// b) Create a do-while loop that continues asking the user for a number until they enter a number greater than 10.
let num8
do {
  num8 = prompt("Enter a number")
} while (num8 <= 10)
  
// c) Write a do-while loop to print "Hello" three times.
i = 0
do {
   console.log("Hello"); i++
} while (i < 3);