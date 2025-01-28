// String Indexing: How do you access the third character of a string in JavaScript?
// by using index number or charAt() method
// let str='JavaScript'
// console.log(str[2])
// console.log(str.charAt(2))


// Useful string methods: What does the String.prototype.split() method do in JavaScript?
// split method is used to split string into array of substrings 
//example
// console.log(str.split('a'))

// Template Strings: How can you embed a variable inside a string using template literals in JavaScript?
// by using backticks and ${} to embed a variable inside a string.example
// console.log(`My name is ${str}`)


// Null, undefined, BigInt, typeof: What is the difference between null and undefined in JavaScript?
//  a variable with unassigned value is undefinded and null is assigned value of null

// Booleans and Comparison Operator: How does the === operator differ from the == operator in JavaScript?
// === is strict equality operator chec both value and data type while == only checck value 


// Truthy and Falsy Values: Which of these values is considered falsy in JavaScript: 0, "0", null, or "false"?
// null and false are falsy values


// If else statement: How do you write an if-else statement that checks if a variable x is greater than 10?
// we can use ternary operator for ease of use
// let x=11
// if (x>10){ console.log('greater than 10')}else { console.log('less than 10')}


// Ternary Operator: Rewrite the following if-else statement using the ternary operator: if (age >= 18) { status = 'adult'; } else { status = 'minor'; }.
// let age =10
// age>=18?console.log('adult') : console.log('minor')



// && || operator: What will be the output of the expression true || false && false in JavaScript?
// true beccause && has higher precedence than || so it will be evaluated first
// console.log(true || false && false)


// Nested if else: How do you write a nested if-else statement to check if a number is positive, negative, or zero?
// if (x>0){ console.log('positive')}
// else if (x<0){ console.log('negative')}
// else { console.log('zero')}


// If elseif else: Write an if-elseif-else statement to categorize a person's age into "child", "teen", "adult", or "senior".
// if (age<13){ console.log('child')}
// else if (age<20){ console.log('teen')}
// else if (age<45){ console.log('adult')}
// else { console.log('senior')}

// Switch statement: How do you use a switch statement to handle multiple cases for a variable day representing days of the week?
// let day='monday'
// switch(day){
//   case 'monday':
//     console.log('monday')
//     break
//   case 'tuesday':
//     console.log('tuesday')
//     break
//   case 'wednesday':
//     console.log('wednesday')
//     break
//   case 'thursday':
//     console.log('thursday')
//     break
//   case 'friday':
//     console.log('friday')
//     break
//   case 'saturday':
//     console.log('saturday')
//     break
//   case 'sunday':
//     console.log('sunday')
//     break
//     default:
//       console.log('invalid day')
// }



// While loop: Write a while loop that prints numbers from 1 to 5.
// let i=1;
// while(i<=5){
//   console.log(i)
//   i++
// }


// While loop examples: Give an example of a while loop that keeps asking for user input until the user types "exit".
// let userInput=''
// while(userInput.toLowerCase()!=='exit'){
//   userInput=prompt('Enter exit to exit')
// }


// For loop: Write a for loop that prints the first 10 even numbers.
//we can use incrememt of 2 for even numbers or we can use i%2==0
// for (let i=2;i<=20;i+=2){
//   console.log(i)
// }



// For loop examples: Provide an example of a for loop that iterates over an array and prints each element.
// let arr=['a','b','c','d','e']
// for (let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }


// Break and continue keyword: How do you use the continue keyword to skip the current iteration in a loop?
// for (let i=0;i<arr.length;i++){
//   if (i==2){
//     continue
//   }
//   console.log(arr[i])
// }
// Do while loop: How does a do-while loop differ from a while loop in JavaScript?
// while loop run if condition is ture while do while loop run atleast once and then check condition


// Intro to arrays: How do you create an array of numbers from 1 to 5 in JavaScript?
// let arr1=[1,2,3,4,5]

// Push pop shift unshift: What is the difference between push and unshift methods in JavaScript arrays?
// shift remove elemnt from head while unshift add element at head of list

// Primitive vs reference data types: Explain the difference between primitive and reference data types in JavaScript.
// primitive datatypes stored in stack like number,string,boolean while reference data types stored in heap like object,array


// Clone array & spread operator: How do you clone an array using the spread operator in JavaScript?
// let arr2=[...arr1,...arr]
// console.log(arr2)


// For loop: How do you iterate over an array using a for loop in JavaScript?
// we can use for loop with length of array to iterate over array or for of loop 
// for (let i=0;i<arr2.length;i++){
//   console.log(arr2[i])
// }

// use const for creating arrays: Why is it recommended to use const when creating arrays in JavaScript?
// const is recommended cuz we cant reassign const variable but we can change its value



// While loop in array: Provide an example of using a while loop to iterate over an array in JavaScript.
// i=0
// while(i<arr2.length){
//   console.log(arr2[i]); i++;
// }


// For of loop: How do you use the for-of loop to iterate over elements of an array in JavaScript?
// for (let item of arr2){
//   console.log(item)
// }
// For in loop: How do you use the for-in loop to iterate over properties of an object in JavaScript?
// let obj={
//   name:'sikandar',
//   age:23,
//   greet: function(){
//     console.log(`Hello ${this.name}`)
//   }
// }
// for (let key in obj){
//   console.log(key,obj[key])
// }
// Array destructuring: How do you use array destructuring to assign the first two elements of an array to variables a and b?
// let [a,b,...rest]=arr2
// console.log(a,b,rest)

// Objects in JavaScript: How do you create an object with properties name and age in JavaScript?
// let obj1 = {name:'sikandar',age:23}

// Intro to objects: What is the purpose of objects in JavaScript?
// to store multiple value in single variable we use objects. data is stored in key-value pairs 

// Dot vs Bracket Notation: When should you use bracket notation instead of dot notation to access object properties?
// bracket notation is recommended when we have to access property dynamically or when property name is not valid identifier e.g name with space
// while dot notation is used when property name is valid identifier

// Iterate objects: How do you iterate over all the keys in an object using for-in loop?
// for (let key in obj1){
//   console.log(key)
// }

// Computed properties: How do you dynamically set a property name in an object using computed properties in JavaScript?
// let key='email'
// obj1[key]='test@test.com'
// console.log(obj1)

// Spread operator in objects: How do you use the spread operator to merge two objects in JavaScript?
// let obj2={...obj1,city:'lahore'}

// Object Destructuring: How do you use object destructuring to extract the name and age properties from an object?
// let {name,age}=obj1

// Objects inside Array: How do you access the name property of the first object in an array of objects?
// let arr3=[obj1,obj2]
// console.log(arr3[0].name)

// Nested Destructuring: How do you use nested destructuring to extract a nested property from an object?
// let obj3={
//   name:'sikandar',
//   address:{
//     city:'lahore',
//     country:'pakistan'
//   }
// }
// let {address:{city}}=obj3
// console.log(city)
// // or 
// let {address}=obj3  
// console.log(address.city)


// Functions in JavaScript: How do you declare a function named greet that takes a parameter name and logs a greeting message?
// function greet(name){
//   console.log(`Hello ${name}`)
// }

// Function declaration: What is a function declaration? and how is it different from a function expression?
// function declaration creates a function object that return value every time it is called 
// function declaration is hoisted while function expression is not hoisted mean 
// function declaration can be called before its declaration while function expression can't be called before its declaration

// Function Expression: How do you write a function expression to calculate the square of a number?
// let square=function(num){
//   return num*num
// }

// Arrow Functions: How do you write an arrow function that returns the sum of two numbers?
// let sum=(a,b)=>{ return a+b}
// console.log(sum(2,3))
// Function declarations are hoisted: What does it mean that function declarations are hoisted in JavaScript?
// when function declaration can be called before its declaration that is called hoisting
// example
// Hello()
// function Hello(){
//   console.log('Hello')
// }
// // Function inside function: How do you define a function inside another function in JavaScript?
// function outer(){
//   function inner(){
//     console.log('inner function')
//   }
//   inner()
// }


// Lexical Scope: What is lexical scope in JavaScript?
// lexical scope means inner function can access variables of outer function but outer function can't access variables of inner function
// example
// function outer1(){
//   let a=10
//   function inner1(){
//     var b=30
//     console.log(a,b)
//   }
//   console.log(a,b)
//   inner1()
// }
// outer1()

// Block Scope Vs Function Scope: What is the difference between block scope and function scope in JavaScript?
// varibale declared with var are function scoped while variable declared with let and const are block scoped
// example
// function outer2(){
//   if(true){
//     var y=10
//     let z=20
//   }
//   console.log(y)
//   console.log(z)
// }
// outer2() // reference error z is not defined 


// Default Parameters: How do you set a default parameter value in a JavaScript function?
// function greet1(name='Sir'){
//   console.log(`Hello ${name}`)
// }
// Rest Parameters: How do you use rest parameters to accept an indefinite number of arguments in a function?
// function sum1(...args){
//   return args.reduce((acc,curr)=>acc+curr)
// }
// console.log(sum1(1,2,3,4,5))

// Parameter Destructuring: How do you use parameter destructuring in a function to extract properties from an object passed as an argument?
// function greet2({name,age}){
//   console.log(`Hello ${name} your age is ${age}`)
// }
// greet2(obj)

// Very brief intro to callback functions: What is a callback function, and how is it commonly used in JavaScript?
// callback function is function that is passed argument to another function and called inside that function
// in below example sum is working as callback function
// function calculate(a,b,sum){
//   return sum(a,b)
// }
// console.log(calculate(2,3,sum))

// Functions returning Functions: How do you write a function that returns another function in JavaScript?
// here is the example of function returning function increment is returning function that increment value by 1
// function createCounter(n){
//   let count = n;
//   return function(){
//     return count++;
//     } 
// }
// var counter = createCounter(5);

// Very Important Array Methods: What does the Array.prototype.forEach() method do in JavaScript?
// Array.prototype.forEach() method calls a provided function once for each element in an array, in order.
// example
// arr.forEach((item,index)=>console.log(item,index))

// Foreach method: How do you use the forEach method to log each element of an array?
// arr.forEach((item,index)=>console.log(item,index))

// let test_array=[1,2,3,4,5,0,-1,-2,-3]
// Map method: How do you use the map method to create a new array with each element doubled?
// let doubled = test_array.map(item=>{
//   return item*2})
//   console.log(doubled)

// Filter: How do you use the filter method to get an array of even numbers from an array of integers?
// let even = test_array.filter(item=>{
//   return item%2==0})
//   console.log(even)


// Reduce: How do you use the reduce method to calculate the sum of an array of numbers?
// let sum2= test_array.reduce ((acc,curr)=>{
//   return acc+curr;
// })
// console.log(sum2)


// Sort: How do you use the sort method to sort an array of strings in alphabetical order?
// let sorted = arr.sort()
// console.log(sorted)


// Find: How do you use the find method to get the first element in an array that is greater than 10?
// let find_func=test_array.find(item=>{
//   return item>10
// })
// console.log(find_func)

// Every: How do you use the every method to check if all elements in an array are positive numbers?
// let evry=test_array.every(item=>{
//   return item>0
// })
// console.log(evry)

// Some: How do you use the some method to check if there is at least one negative number in an array?
// let some=test_array.some(item=>{
//   return item<0
// })
// console.log(some)

// Fill method: How do you use the fill method to replace all elements in an array with a specific value?
// let filled=test_array.fill(0,2,5)
// console.log(filled)

// Splice method: How do you use the splice method to remove elements from an array?
// let splice =test_array.splice(2,3)
// console.log(splice)
// More useful things: What are iterables in JavaScript, and how do they differ from arrays?
// iterables are objects that transformable into array like object with length property and index. they are not arrays but can be used like arrays.  they are used in for of loop and spread operator
// example
// let str4='sikandar'
// for (let char of str4){
//   console.log(char)
// }
// Iterables: How do you iterate over a string using a for-of loop?
// for (let char of str){
//   console.log(char)
// }
// Sets: How do you create a Set in JavaScript and add elements to it?
// let set =new Set(arr)
// set.add(6)
// console.log(set)


// Maps: How do you create a Map in JavaScript and set key-value pairs?
// let map = new Map()
// map.set('name','sikandar')
// map.set('age',23)
// // console.log(map.get('name'))
// console.log(map)


// Object.assign: How do you use Object.assign to copy properties from one object to another?
// let obj4=Object.assign({},obj)
// console.log(obj4)

// Optional chaining: How do you use optional chaining to safely access nested properties in an object?
// let op_city=obj1?.address?.city
// console.log(city)


// Object Oriented JavaScript / Prototypal Inheritance: What is prototypal inheritance in JavaScript?
// prototypal inheritance is a way to create object based on another object. it is used to inherit properties and methods from one object to another
//example
// let obj5=Object.create(obj)
// obj5.greet()
// console.log(obj5.name)

// Methods: How do you define a method inside a JavaScript object?
// let obj={
//   name:'sikandar',
//   age:23,
//   greet: function(){
//     console.log(`Hello ${this.name}`)
//   }
// }
// obj.greet()

// This keyword, Window object: What is the this keyword in JavaScript, and how does it differ in global and function contexts?
// this keyword refers to the object that is calling the function. in global context this refers to window object
// window object is the global object in browser and global object in nodejs

// Call , apply and bind method: How do you use the call method to invoke a function with a specific this context?
// let obj={
//   name:'sikandar',
//   age:23,
//   greet: function(){
//     console.log(`Hello ${this.name}`)
//   }
// }
// let obj6={
//   name:'ali',
//   age:24
// }
// obj.greet.call(obj6) 


// Some warnings: What is a common warning when using this inside arrow functions?
// example
// let obj7={
//   name:'sikandar',
//   age:23,
//   greet: ()=>{
//     console.log(`Hello ${this.name}`)
//   }
// }
// obj7.greet() //TypeError: Cannot read properties of undefined


// This inside arrow functions: How does the this keyword behave inside an arrow function compared to a regular function?
// this inside arrow function refers to the object that is calling the function not the object that is defining the function. 
// example
// let obj8={
//   name:'sikandar',
//   age:23,
//   greet: function(){
//     let inner=()=>{
//       console.log(`Hello ${this.name}`)
//     }
//     inner()
//   }
// }
// obj8.greet()


// Short syntax for methods: How do you define a method using the short syntax in an object literal?
// let obj9={
//   name:'sikandar',
//   age:23,
//   greet(){
//     console.log(`Hello ${this.name}`)
//   }
// }
// obj9.greet()
// console.log(Object.keys(obj9))


// Factory functions & discuss some memory related problems: What is a factory function in JavaScript, and how does it help with memory issues?
// factory function is a function that return object. it helps with memory issues by creating new object every time it is called
// example
// function createPerson(name,age){
//   return {name,age}
// }
// let person1=createPerson('sikandar',23)
// let person2=createPerson('ali',24)

// First solution to that problem: What is a common solution to avoid memory problems in JavaScript when using factory functions?
// common solution is to use prototype to add methods to object
// example
// function createPerson(name,age){
//   let obj={name,age}
//   obj.greet=function(){
//     console.log(`Hello ${this.name}`)  
//   }
//   return obj
// }
// let person3=createPerson('sikandar',23)
// let person4=createPerson('ali',24)
// person3.greet()

// Why that solution isn’t that great: Why might the common solution for memory issues in factory functions not be ideal?
// it is not ideal because it creates new function every time it is called. it is better to use prototype to add methods to object


// What is _proto_ , [[prototype]]: What is the difference between __proto__ and [[Prototype]] in JavaScript?
// __proto__ allow you to inherit property while [[Prototype]] is an internal property of an object that holds a reference to its prototype
// example
// console.log(person3.__proto__)
// console.log(person3.__proto__===Object.prototype)
// console.log(person3.__proto__===person4.__proto__)



// What is prototype: What is the prototype of an object in JavaScript?
// prototype is an object that is shared among all instances of object. it is used to add methods to object
// example
// function Person(name,age){
//   this.name=name
//   this.age=age
// }
// Person.prototype.greet=function(){
//   console.log(`Hello ${this.name}`)
// }
// let person5=new Person('sikandar',23)
// let person6=new Person('ali',24)

// Use prototype: How do you add a method to an object's prototype in JavaScript?
// we can add method to object prototype by using prototype property of constructor function
// example
// function Person(name,age){
//   this.name=name
//   this.age=age
// }
// Person.prototype.greet=function(){ 
//   console.log(`Hello ${this.name}`)
// }


// New keyword: How do you create a new instance of an object using the new keyword in JavaScript?
// we can create new instance of object using new keyword with constructor function
// example
// let person7=new Person('sikandar',23)
// person7.greet()


// Constructor function with new keyword: How do you define a constructor function and create an object using it in JavaScript?
// constructor function is a function that is used to create object. it is used with new keyword to create object
// example
// function Person(name,age){
//   this.name=name
//   this.age=age
// }
// let person8=new Person('sikandar',23)
// console.log(person8)



// More discussion about proto and prototype: How does the prototype chain work in JavaScript?
// prototype chain is used to inherit properties and methods from one object to another. it is used to add methods to object
// example
// function Person(name,age){
//   this.name=name
//   this.age=age
// }
// Person.prototype.greet=function(){
//   console.log(`Hello ${this.name||'sir'}`)
// }
// let person9=new Person('sikandar',23)
// let person10=new Person('',24)
// person10.greet()



// Class keyword: How do you define a class in JavaScript using the class keyword?
// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   greet(){
//     console.log(`Hello ${this.name}`)
//   }
// }

// Example using class keyword: Provide an example of creating a class with a constructor and a method in JavaScript.
// let person11=new Person('sikandar',23)

// // Super keyword: How do you use the super keyword to call the parent class constructor in a subclass?
// class Student extends Person{
//   constructor(name,age,grade){
//     super(name,age)
//     this.grade=grade
//   }
// }
// let student1=new Student('ali',24,'A')
// student1.greet()
// Method overriding: How do you override a method in a subclass in JavaScript?
// we can override method in subclass by defining same method in subclass
// example
// class Student1 extends Person{
//   constructor(name,age,grade){
//     super(name,age)
//     this.grade=grade
//   }
//   greet(){
//     console.log(`Hello ${this.name} your grade is ${this.grade}`)
//   }
// }
// let student2=new Student1('ali',24,'A')
// student1.greet()



// Getters and setters: How do you define getter and setter methods in a JavaScript class?
// we can define getter and setter method in class by using get and set keyword
// example
// class Student1 extends Person{
//   constructor(name,age,grade){
//     super(name,age)
//     this.grade=grade
//   }
//   get getGrade(){
//     return this.grade
//   }
//   set setGrade(grade){
//     this.grade=grade
//   }
// }
// let student3=new Student1('ali',24,'A')
// console.log(student3.getGrade)
// student3.setGrade='B'
// console.log(student3.getGrade)

// Static methods and properties: How do you define a static method in a JavaScript class?
// we can define static method in class by using static keyword
// example
// class Student1 extends Person{
//   constructor(name,age,grade){
//     super(name,age)
//     this.grade=grade
//   }
//   static greet(){
//     console.log('Hello')
//   }
// }
// Student1.greet()


// How JavaScript Works: What is the Global Execution Context in JavaScript? 
// The Global Execution Context is the outermost scope in which a JavaScript program is executed.
// It is created when a program starts running and is responsible for creating the Global Object, the this keyword,

// Global Execution context: What is the role of the Global Execution Context in JavaScript?
// The Global Execution Context is responsible for creating the Global Object, the this keyword.
// It also creates the outer environment for all the code that is executed in the program.


// This and window in global execution context: What does the this keyword refer to in the global execution context?
// in global context this keyword refer to windoew object in browser and global object in nodejs

// Hoisting: What is hoisting in JavaScript?
// hoisting means moving declaration of variable to top of the scope. it is done by javascript engine before executing code

// Are let and const are hoisted? What is a reference Error?: Are let and const variables hoisted in JavaScript, and what is a Reference Error?
// let and const are not hoisted. if we try to access variable before its declaration it will throw reference error.
// reference error is thrown when we try to access variable/method before its declaration

// Function execution context: What is a Function Execution Context in JavaScript?
// Function Execution Context is created when a function is called. It is responsible for creating the arguments object,
// the this keyword, and the outer environment for the function.


// Scope chain and lexical environment: How does the scope chain and lexical environment work in JavaScript?
// scope chain is used to access variable in nested function. it is created when function is defined.


// Intro to closures: What is a closure in JavaScript?
// closure is a function that has access to its outer function scope even after the outer function has returned
// it is used to create private variables and functions in a function.
// example
// function outer(){
//   let a=10
//   return function inner(){
//     console.log(a)
//   }
// }
// let inner=outer()
// inner()


// DOM: How do you select an element by its ID in the DOM using JavaScript?
// document.getElementById('id')

// Async vs defer: What is the difference between async and defer attributes in script tags in HTML?
// defer load script after html is parsed while async load script instead of parsing first
// flaw of async is that it can load script in any order while defer load script in order

// Select elements using id: How do you use document.getElementById to select an element in the DOM?
// document.getElementById('id')

// querySelector: How do you use document.querySelector to select an element in the DOM?
// document.querySelector('selector')

// textContent & innerText: What is the difference between textContent and innerText in JavaScript?
// textContent return text of all elements while innerText return text of visible elements


// Change the styles of elements using js: How do you change the style of an element using JavaScript?
// element.style.property='value'
// example
// let element=document.getElementById('id')
// element.style.color='red'


// Get and set attributes: How do you get and set attributes of an element using JavaScript?
// document.getElementById('id').getAttribute('attribute')
// document.getElementById('id').setAttribute('attribute','value')

// Select multiple elements and loop through them: How do you select multiple elements using querySelectorAll and loop through them?
// let elements=document.querySelectorAll('selector')
// elements.forEach(element=>console.log(element))

// innerHTML: How do you use innerHTML to change the content of an element in the DOM?
// document.getElementById('id').innerHTML='<h1>heading</h1>'


// Deeply understand dom tree, root node , element nodes, text nodes: What is the DOM tree, and what are its root node, element nodes, and text nodes?
// dom tree is tree like structure of html document in which root node is doc node 
// element nodes are html elements while text nodes are text inside elements


// classList: How do you add or remove a class from an element using classList in JavaScript?
// document.getElementById('id').classList.add('class')
// document.getElementById('id').classList.remove('class')
// example
// let element=document.getElementById('section')
// element.classList.add('li')
// element.classList.remove('ul')


// Add new elements to page: How do you create a new element and add it to the page using JavaScript?
// let element=document.createElement('tag')
// document.body.appendChild(element)
// example
// let element=document.createElement('h1')
// element.textContent='heading'
// document.body.appendChild(element)

// Create elements: How do you use document.createElement to create a new DOM element?
// let element=document.createElement('h1')
// element.textContent='heading'
// document.body.appendChild(element)

// Insert adjacent elements: How do you use insertAdjacentHTML to insert HTML content at a specified position relative to an element?
// document.getElementById('id').insertAdjacentHTML('position','html content')
// example
// let element=document.getElementById('section')
// element.insertAdjacentHTML('beforeend','<h1>heading</h1>')
// element.insertAdjacentHTML('afterend','<h1>heading</h1>')


// Clone nodes: How do you clone a DOM element using JavaScript?
// document.getElementById('id').clone
// example
// let element=document.getElementById('section')
// let clone=element.cloneNode(true)
// document.body.appendChild(clone)


// More methods to add elements on page: What are some other methods to add elements to the page in JavaScript?
// appendChild, append, prepend


// How to get the dimensions of the element: How do you get the dimensions (width and height) of a DOM element using JavaScript?
// document.getElementById('id').clientWidth
// document.getElementById('id').clientHeight

// Intro to events: What are events in JavaScript, and how are they used?
// events are actions that are performed on elements like click,hover etc. they are used to interact with elements


// This keyword inside eventListener callback: How does the this keyword behave inside an event listener callback in JavaScript?
// this keyword inside event listener refer to the element that is calling the event like button in case of click event


// Add events on multiple elements: How do you add the same event listener to multiple elements in JavaScript?
// using foreach loop or for loop we can add event listener to multiple elements

// Event object: What is the event object in JavaScript, and how do you use it?
// event object is object that is passed to event listener callback function. it is used to get information about event
// example
// addEventListener('keypress',(event)=>{alert(event.key)}


// How event listener works: How does an event listener work in JavaScript?
// event listener is used to perfom certain action when event is triggered, like click or key press . it is used to interact with elements


// Practice with events: Provide an example of using an event listener to change the background color of a button when it is clicked.
// let colorchanger=document.querySelector('.colorchanger')
//       colorchanger.addEventListener('click',function(){
//         let color=document.querySelector('.bg-color').style.backgroundColor
//         if(color=='white'){
//           document.querySelector('.bg-color').style.backgroundColor='black'
//           document.querySelector('.bg-color').style.color='white'
//         }else{
//           document.querySelector('.bg-color').style.backgroundColor='white'
//           document.querySelector('.bg-color').style.color='black'
//         }
//       })


// Create demo project: How do you create a simple project that uses event listeners to interact with the DOM?
// i can add functionality to change color of text on button click or trigger alert when certain button is pressed or hover


// More events: What are some common events in JavaScript, and how are they used?
// common events are click,hover,scroll,keydown,keyup etc. they are used to interact with elements

// Event bubbling: What is event bubbling in JavaScript?
// event bubbling is process in which event is triggered on child element and then on parent element
// example
// let parent=document.querySelector('.parent')
// let child=document.querySelector('.child')
// child.addEventListener('click',function(){
//   alert('child')
// })
// parent.addEventListener('click',function(){  
//   alert('parent')
// })


// Event Capturing: What is event capturing in JavaScript?
// event capturing is process in which event is triggered on parent element and then on child element
// example
// let parent=document.querySelector('.parent') 
// let child=document.querySelector('.child')
// child.addEventListener('click',function(){
//   alert('child')
// },true)
// parent.addEventListener('click',function(){
//   alert('parent')
// },true)

// Event delegation: What is event delegation, and why is it useful in JavaScript?
// Create Project using event delegation: How do you create a project that uses event delegation to handle events?


// Asynchronous JavaScript: Is JavaScript a synchronous or asynchronous programming language, and why?
// javascript is asynchronous programming language.  cuz it can perform multiple tasks at same time


// Is Javascript a synchronous or asynchronous programming language?: How does JavaScript handle asynchronous operations?
// javascript handles asynchronous operations using callbacks, promises and async/await


// SetTimeout(): How do you use the setTimeout function in JavaScript?
// setTimeout(function(){
// console.log('hello')
// },1000)

// SetTimeout() with 0 millisecond: What happens when you use setTimeout with a delay of 0 milliseconds?
// the delay will be 0 milliseconds but it will be executed on the next tick of event loop

// Callback Queue: What is the callback queue in JavaScript?
// callback queue is used to store callback functions that are ready to be executed

// SetInterval and create little project with setInterval: How do you use setInterval to create a simple project in JavaScript?
// i can a make a project that remind user to take break after every 30 minutes


// Understand callbacks in general: What is a callback function in JavaScript, and how is it used?
// callback function is a function that is passed as an argument to another function and is executed after the completion of that function
// function sum(a,b,callback){
//   return callback(a,b)
// }
// function add(a,b){
//   return a+b
// }
// console.log(sum(2,3,add))

// Callbacks in asynchronous programming: How are callbacks used in asynchronous programming in JavaScript? state in simple language
// callbacks are used in asynchronous programming to handle the result of an asynchronous operation
// function getdata(callback){
//   setTimeout(()=>{
//     callback('data')
//   },1000)
// }
// getdata((data)=>{
//   console.log(data)
// })


// Callback Hell and Pyramid of doom: What is callback hell, and how can it be avoided in JavaScript?
// callback hell is situation in which multiple nested callbacks are used. it can be avoided by using promises or async/await


// Intro to promises: What is a promise in JavaScript, and how is it used?
// promise is object that is used to handle asynchronous operations. it has 3 states pending, fulfilled and rejected

// Microtask Queue: What is the microtask queue in JavaScript?
// Function that returns promise: How do you write a function that returns a promise in JavaScript?
// function getdata(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve('data')
//     },1000)
//   })
// }
// getdata().then((data)=>{
//   console.log(data)
// })


// Promise and settimeout: How do you use a promise with setTimeout in JavaScript?
// function getdata(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve('data')
//     },1000)
//   })
// }
// getdata().then((data)=>{
//   console.log(data)
// })

// Promise.resolve and more about then method: How do you use Promise.resolve and the then method in JavaScript?
// Promise.resolve('data').then((data)=>{
//   console.log(data)
// })

// Convert nested Callbacks to flat code using promises: How do you convert nested callbacks to flat code using promises in JavaScript?
// nested callbacks can be converted to flat code using promises
//nested callbacks
// function calculate(a, b, callback) {
//   setTimeout(() => {
//     callback((a,b)=>{
//       return a+b;
//     });
//   }, 1000);
// }
// calculate(2,3,sum=>{
//   console.log(sum(2,3));
// })
//flat code using promises
// function calculate(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(sum(a, b));
//     }, 1000);
//   });
// }
// calculate(2,3).then(result=>{console.log(result)})

// Intro to Ajax, HTTP Request: What is AJAX, and how are HTTP requests used in JavaScript?
// ajax is asynchronous javascript and xml. 
// XHR requests: How do you make an XHR request in JavaScript?
// we can make xhr request by creating new XMLHttpRequest() and using GET arugument we can fetch data from our url
// here is the example 
// const urllink="https://api.github.com/users/sikandarsubhani"
// const xhr= new XMLHttpRequest()
// xhr.open('GET',urllink)
// xhr.onreadystatechange(function(){
//   if (xhr.readyState==4 || xhr.status==400){
//     const data=JSON.parse(xhr.responseText)
//     console.log(data);    
//   }
// })
// xhr.send()


// Error handling in XHR requests: How do you handle errors in XHR requests in JavaScript?
// we can use if else to handle errors or we can use .onError method to handle errors

// XHR request Chaining: How do you chain multiple XHR requests in JavaScript?
// we can make a reusable function for xhr request and use promises to chain multiple xhr requests
// function makeRequest(url) {
//   return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url, true);
      
//       xhr.onload = () => {
//           if (xhr.status >= 200 && xhr.status < 300) {
//               resolve(JSON.parse(xhr.responseText));
//           } else {
//               reject({
//                   status: xhr.status,
//                   statusText: xhr.statusText
//               });
//           }
//       };
//       xhr.onerror = () => {
//           reject({
//               status: xhr.status,
//               statusText: 'Request failed'
//           });
//       };
//       xhr.send();
//   });
// }


// Promisifying XHR requests and chaining using then method: How do you promisify XHR requests and chain them using the then method?
// let url="https://jsonplaceholder.typicode.com/posts/1/"
// let url2="https://jsonplaceholder.typicode.com/posts/2/"
// makeRequest(url).then(data=>{
//   console.log(data)
//   return makeRequest(url2)
// }).then(data=>{
//   console.log(data)
// }).catch(error=>{
//   console.log(error)
// })

// Fetch API: How do you use the Fetch API to make HTTP requests in JavaScript?
// example
// const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/");




// Error Handling in Fetch API: How do you handle errors when using the Fetch API in JavaScript?
// we use try and catch block to handle errors in fetch api
// async function fetchData() {
  //   try {
  //     console.log("Fetching data...");
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/");
  //     const data = await response.json();
  //     console.log("Data fetched:", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  
  // fetchData();


// Consume Promises with async and Await: How do you consume promises using async and await in JavaScript?
// async function getUsers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data=await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// getUsers();