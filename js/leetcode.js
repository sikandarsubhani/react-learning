// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).here is the code:
// var createCounter= function(n){
//   let count = n;
//   return function(){
//     return count++;
//     } 
// }
// var counter = createCounter(5);
// console.log(counter()); // 5
// console.log(counter()); // 6


// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
// function expect(val) {
//   return {
//     toBe: function(otherVal) {
//       if (val === otherVal) {
//         return true;
//         }
//       else {
//           throw new Error("Not Equal");
//         }
//       },
//     notToBe: function(otherVal) {
//       if (val !== otherVal) {
//         return true;
//       }
//       else {
//         throw new Error("Equal");
//       }
//     }
//   }
// }

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
// function createCounter(init) {
//   let count = init;
//   return {
//     increment: function() {
//       count++;
//       return count;
//       },
//       decrement: function() {
//         count--;
//         return count;
//         },
//         reset: function() {
//           count = init;
//           return count;
//           }
//           }
//           }

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
// function transformArray(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//     }
//   return result;
// }



// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.
// function filterArray(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }


// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.
// function reduceArray(nums, fn, init) {
//   let result = init;
//   for (let i = 0; i < nums.length; i++) {
//     result = fn(result, nums[i]);
//   }
//   return result;
// }


// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.
// function composeFunctions(funcs) {
//   // Base case: if the array of functions is empty, return the identity function
//   if (funcs.length === 0) { 
//     return function(x) {
//       return x;
//     }
//   }
//       // Recursive case: compose the current function with the rest of the functions
//   else {
//     let current = funcs[funcs.length - 1];
//     let rest = funcs.slice(0, -1);
//     return function(x) {
//       return composeFunctions(rest)(current(x));
//     }
//   }
// }
// var compose = function(functions) {
//   if (functions.length === 0) {
//       return function(x) { return x; }
//   }
  
//   return functions.reduceRight(function(prevFn, currentFn) {
//       return function(x) {
//           return currentFn(prevFn(x));
//       }
//   });
// };

// var compose = function(functions) {
//   if (functions.length === 0) {
//       return function(x) { return x; }
//   }
  
//   return function(x){
//       let result=x;
//       for (let i =functions.length-1;i>=0;i--){
//           result=functions[i](result)
//       }
//       return result;
//   }
// };
//   // Example usage:
// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(5));  // Output: 50
// fn(4) = 65
// Test the function
// console.log(composeFunctions([function(x) { return x + 1; }, function(x) { return x * 2; }])(5));  // Outputs: 12



// write a function that return length of arguments passed
var argumentsLength = function(...args) {
  count=0
  for (let elements of args){
      count++;
  }
  return count
};
