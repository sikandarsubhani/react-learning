// Part 1: Theory Questions
// 1. Introduction to Arrays
// •	What is an array in JavaScript? How does it differ from an object? 
// array is a collection of elements of same type. array is indexed whereas object is key value pair. 
// array are reference type and object are reference type

// 2. Push, Pop, Shift, Unshift
// •	Explain the purpose of the push, pop, shift, and unshift methods in arrays.
//    push is used to add element at tail 
//    pop is used to remove element from tail
//    shift is used to remove element from head
//    unshift is used to add element at head

// 3. Primitive vs Reference Data Types
// •	What is the difference between primitive and reference data types in JavaScript? Give examples. 
// primitive data types are immutable and stored in stack memory whereas reference data types are mutable and stored in heap memory.
// example of primitive data types are number, string, boolean, null, undefined. example of reference data types are array, object, function


// 4. Cloning Arrays
// •	Name two ways to clone an array in JavaScript. Explain their differences.
//    using slice method. slice method is used to copy the array from start to end index.
//    using spread operator. spread operator is used to copy the array by using the ... sign.
//    difference between them is that slice method is used to copy the array from start to end index whereas spread operator is used to copy the whole array.

// 5. const for Arrays
// •	Can you modify an array declared with const? Why or why not? 
//    yes we can modify the array declared with const but we cannot reassign the array to another array.
//    because the array is reference type and the reference is constant but the values inside the array can be changed.

// 6. Array Destructuring
// •	What is array destructuring? Provide an example of how it simplifies working with arrays.
//    array destructuring is used to assign the values of array to the variables in one line. 

// 7. Objects in JavaScript
// •	What are objects in JavaScript, and how are they different from arrays? 
//   objects are collection of key value pairs. objects are reference type and arrays are indexed.

// 8. Dot vs Bracket Notation
// •	When should you use bracket notation over dot notation for accessing object properties? 
//    when the key is dynamic or the key is not valid identifier then we should use the bracket notation.
//    example of dynamic key is the key which is generated at runtime. example of invalid identifier is the key which contains special characters or spaces.

// 9. Computed Properties
// •	What are computed properties in objects? Why are they useful?
//    computed properties are used to create the key of object dynamically. 
//    computed properties are useful because we can create the key of object dynamically. 

// 10. Spread Operator in Arrays and Objects
// •	What does the spread operator (...) do in arrays and objects? Provide examples.
//    spread operator is used to copy the array or object by using the ... sign.
//    let arr=[...arr1]

// 11. Object Destructuring
// •	Explain object destructuring with an example.
//    object destructuring is used to assign the values of object to the variables in one line.
//    let {name,age}=obj;

// 12. Nested Destructuring
// •	How do you destructure nested arrays or objects? 
//    let {name,age,address:{city,country}}=obj;

// Part 2: Coding Questions
// Question 1: Array Methods
// Write a program to demonstrate the use of push, pop, shift, and unshift.
let arr=[1,2,4,4,2,3];
console.log(arr);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);

// Question 2: Clone Arrays
// Write a function to clone an array using both the spread operator and the concat method.
let arr1=[1,2,3,4,5];
let arr2=[...arr1];
let arr3=arr1.concat();
console.log(arr2);
console.log(arr3);

// Question 3: Looping Through Arrays
// Write a program to iterate over an array using:
// 1.	A for loop. 
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
// 2.	A while loop. 
let i=0;
while(i<arr1.length){
  console.log(arr1[i]);
  i++;
}
// 3.	A for...of loop. 
for(let element of arr1){
    console.log(element);
}
// 4.	A for...in loop. 
for(let index in arr1){
  console.log(arr1[index]);
}

// Question 4: Array Destructuring
// Write a program to destructure the first two elements of an array and log them. Also, use default values for missing elements.
let [first,second,...rest]=arr1;


// Question 5: Objects and Accessing Properties
// Create an object and access its properties using both dot and bracket notation.
let obj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(obj.name);
  console.log(obj['name']);
  console.log(obj.age);
  console.log(obj['age']);
  console.log(obj.city);
  console.log(obj['city']);

// Question 6: Iterating Over Objects
// Write a function to iterate over the keys and values of an object using for...in and Object.entries().
function iterate(obj){
    for(let key in obj){
        console.log(key,obj[key]);
    }
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value);
    }
}


// Question 7: Computed Properties
// Write a program that creates an object with a computed property name based on a variable.
let key="name";
let obj1={
    [key]:"John"
}
console.log(obj1.name);

// Question 8: Spread Operator
// Write a function to merge two arrays and two objects using the spread operator.
function merge(arr1,arr2){
    return [...arr1,...arr2];
}
function mergeObj(obj1,obj2){
    return {...obj1,...obj2};
}


// Question 9: Object Destructuring
// Write a program to destructure an object with default values for missing properties.
// let obj2={
//     name:"John",
//     age:30
// }
// let {name,age,city="New York"}=obj2;  


// Question 10: Nested Destructuring
// Write a program to destructure a nested object and access specific properties.
// let obj3={
//     name:"John",
//     age:30,
//     address:{
//         city:"New York",
//         country:"USA"
//     }
// }
// let {name,age,address:{city,country}}=obj3;
// console.log(name,age,city,country);

// Question 11: Object Inside Array
// Write a function that accepts an array of objects and logs the value of a specific property from each object.
function logValue(arr,key){
    for(let obj of arr){
        console.log(obj[key]);
    }
}

// Question 12: Combining Arrays and Objects
// Write a program to create an array of objects where each object represents a student with name and score. Find the student with the highest score.
let students=[
    {name:"John",score:90},
    {name:"Alice",score:80},
    {name:"Bob",score:85}
]
