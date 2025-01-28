let fruits = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];
console.log(fruits);
console.log(fruits[0]);

// Add an element to the end of the array
fruits.push('grape');
console.log(fruits);


// Remove the last element from the array
fruits.pop();
console.log(fruits);


// Add an element to the beginning of the array
fruits.unshift('grape');
console.log(fruits);


// Remove the first element from the array
fruits.shift();
console.log(fruits);

fruits[2]='pear';
console.log(fruits);

// Remove an element by index position
fruits.splice(1, 1);

// Copy an array
let fruits2 = fruits.slice();
console.log(fruits2);

// Concatenate two arrays
let fruits3 = ['apple', 'banana', 'orange'];
let fruits4 = ['grape', 'kiwi', 'strawberry'];
let allFruits = fruits3.concat(fruits4);
console.log(allFruits);

// Sort an array
fruits.sort();
console.log(fruits);

// Reverse an array
fruits.reverse();
console.log(fruits);

// Find the index of an element in the array
let pos = fruits.indexOf('orange');

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum);

//clone an array
let clone = fruits.slice();

//for loop in array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for of loop in array
for (let fruit of fruits) {
    console.log(fruit);
}

//for in loop in array
for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

//for each loop in array
fruits.forEach(fruit => {
    console.log(fruit);
});

//while loop in array
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

//do while loop in array
i=0;
do {
    console.log(fruits[i]);
    i++;
} while (i < fruits.length);



//map in array 
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

//array destructuring
let [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

//array destructuring with rest operator  
let [first, ...rest] = fruits;
console.log(first);
console.log(rest);



let arr1 = [1, 2, 3];
let arr2 = [1,2,3];
console.log(arr1 === arr2); //false

//check if 2 variables are strictly equal for all data types primitive and reference both make a funtion 
function areEqual(a, b) { 
  if (typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    for (let key in a) {
      if (!areEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  } 
}