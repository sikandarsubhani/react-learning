// //functions

// function factorial(num){
//     if (num===1){
//         return 1;
//     }
//     else{
//         return num* factorial(num-1);
//     }
// }

// const calculateFactorial= (num)=>{
//     if (num===1){
//         return 1;
//     }
//     else{
//         return num* calculateFactorial(num-1);
//     }
// }
// console.log(calculateFactorial(5));
// //function expresion
// const greet2 = function(name) {
//     console.log(`Hello ${name}`);
// }

// //arrow function
// const greet3 = (name) => {
//     console.log(`Hello ${name}`);
// }

console.log(this)
//call()
function hello(){
    console.log("Hello");
}
hello.call()

//bind()

const hello2 = hello.bind(this);
hello2();

// apply()
function hello3(){
    console.log("Hello");
    }
hello3.apply(this, [1,2,3]);
// call() and apply() are similar but call() is used with arguments while apply() is used with array of arguments.


// closures
function outerFunction(){
    let outerVariable = "I am outside!";
    function innerFunction(){
        console.log(outerVariable);
    }
    innerFunction();
}
 outerFunction();
 console.log(outerVariable);
 
