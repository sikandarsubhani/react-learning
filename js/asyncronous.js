// set timeout
// console.log("Countdown begins!");
// setTimeout(() => {
//   console.log("setTimeout Time's Up!");
// }, 5000); // Runs after 5 seconds


// console.log("Start");
// setTimeout(() => {
//   console.log("setTimeout Executed after 0 ms");
// }, 0);
// console.log("End");

// //set interval
// let countdown = 5;
// const intervalId = setInterval(() => {
//   console.log(countdown);
//   countdown--;

//   if (countdown < 0) {
//     clearInterval(intervalId); // Stops the interval
//     console.log("setInterval Time's Up!");
//   }
// }, 1000); // Executes every 1 second

// //callback
// function countdownTimer(start, callback) {
//   let count = start;

//   const intervalId = setInterval(() => {
//     console.log(count);
//     count--;

//     if (count < 0) {
//       clearInterval(intervalId);
//       callback(); // Calls the callback function
//     }
//   }, 1000);
// }

// countdownTimer(5, () => console.log("Time's Up!"));

// Callbacks in Asynchronous Programming

// function asyncTask(callback) {
//   setTimeout(() => {
//     console.log("Task complete!");
//     callback(); // Executes the callback
//   }, 3000);
// }

// console.log("Starting async task...");
// asyncTask(() => console.log("Done with async task!"));



// callback hell
// function countdownTimer(start, callback) {
//   let count = start;

//   const intervalId = setInterval(() => {
//     console.log(count);
//     count--;

//     if (count < 0) {
//       clearInterval(intervalId);
//       callback(() => {
//         setTimeout(() => {
//           console.log("Executing next task...");
//           setTimeout(() => {
//             console.log("All done!");
//           }, 2000);
//         }, 5000);
//       });
//     }
//   }, 1000);
// }

// countdownTimer(3, (next) => next());

// Promises in Asynchronous Programming
// function asyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Task complete!");
//       resolve(); // Resolves the promise
//     }, 3000);
//   });
// }
// asyncTask().then(() => console.log("Done with async task!"));
// console.log("Starting async task...");
// console.log("Continuing with other tasks...");
// console.log("All done!");

// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// wait(1000)
//   .then(() => console.log("Step 1"))
//   .then(() => wait(1000))
//   .then(() => console.log("Step 2"))
//   .then(() => console.log("All done!"));


// // async/await
// async function countdownTimerAsync(start) {
//   for (let i = start; i >= 0; i--) {
//     console.log(i);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
//   console.log("Time's Up!");
// }

// countdownTimerAsync(5);


// pyramiding of doom
// function countdownTimer(start) {
//   return new Promise((resolve) => {
//     let count = start;
//     const intervalId = setInterval(() => {
//       console.log(count);
//       count--;
//       if (count === 0) {
//         clearInterval(intervalId);
//         resolve();
//       }
//     }, 1000);
//   });
// }
// countdownTimer(5).then(() => console.log("Time's Up!"));
// console.log("Starting countdown timer...");
// console.log("Continuing with other tasks...");
// console.log("All done!");

// async function fetchData() {
//   try {
//     console.log("Fetching data...");
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/link");
//     const data = await response.json();
//     console.log("Data fetched:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();

// fetch(url, options)
//   .then(response => response.json()) // Parses the response as JSON
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));

// url="https://jsonplaceholder.typicode.com/posts/1/link"
// fetch(url, options)



//create a nested callbacks and then convert it into flat code using promises, take sum method as context
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


