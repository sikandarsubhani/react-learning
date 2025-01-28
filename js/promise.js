// promise


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//     console.log('Hello from inside the promise');
//     resolve('success');
//   }, 1000);
// }
// );
// promise.then(() => {
//   console.log('Hello from inside the promise.then()');
// });
// console.log(promise); // undefined


// explain the promise and then feature with real life example
// promise is a object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved.
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
// Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// Promises are chainable.
// Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.
// Promises are useful both in node.js and in the browser.

// Example:
// You are a student and you promise your parents that you will get good grades in the exam.
// Your parents can:
// take action when you get good grades (resolve)
// take action when you fail (reject)
// take action even before the result is out (pending)

// code:
const promise = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve('Promise is completed successfully');
    } else {
        reject('Promise is not completed successfully');
    }
});
promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
console.log(promise);


// take sum as the function and return the promise and resolve the sum of two numbers othwerwise reject the promise
// code:
// function sum(a, b) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (typeof a ==true && typeof b ==true) {
//         resolve(a + b);
//       } else {
//         reject('Please enter numbers only');
//       }}, 1000);
      
//         // if (typeof a !== 'number' || typeof b !== 'number') {
//         //     reject('Please enter numbers only');
//         // } else {
//         //     resolve(a + b);
//         // }
//     });
// }
// sum(2, 3).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// sum('2', 3).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// use async and await with the above example
// code:
async function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Please enter numbers only');
            } else {
                resolve(a + b);
            }
        }, 1000);
    });
}
async function result() {
    try {
        const res = await sum('2', 3);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
    finally {
        console.log('This will run no matter what');
    }
}
result();

// explain async and await and what they do 
// async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises.
// async function returns a promise.
// When you return a value in a promise, it will automatically be wrapped in a promise.
// async functions enable the use of await.
// await works only with promises.
// await makes the async function wait until the promise settles, and then returns the result.
// await literally makes JavaScript wait until the promise returns a result.
// await can only be used inside an async function.

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

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));