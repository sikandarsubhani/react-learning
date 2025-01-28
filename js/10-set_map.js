//sets
// const arr = [1, 2, 3, 2, 4, 1];
// const set = new Set(arr); // Removes duplicates: Set {1, 2, 3, 4}

// const uniqueArr = [...set]; // Convert back to array: [1, 2, 3, 4]
// // const set = new Set(['apple', 'banana', 'orange']);
// set.forEach(value => console.log("Using for each",value));

// // Using for...of loop
// for (const value of set) {
//   console.log("using for of",value);
// }
// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueEvenNumbers = [...new Set(numbers)].filter(num => num % 2 === 0);
// console.log(uniqueEvenNumbers); // [2, 4]


//maps
// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');
// map.set('name', 'Jane'); // This will overwrite the previous value

// const map = new Map();
// const keyObj = { id: 1 };
// map.set(keyObj, 'Value for Object Key');

// console.log(map.get(keyObj)); // "Value for Object Key"
// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// map.forEach((value, key) => console.log(`${key}: ${value}`));

// // Using for...of loop
// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }

//object to map
const obj = { a: 1, b: 2, c: 3, d:4 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { 'a' => 1, 'b' => 2

const arr = ['apple', 'banana', 'apple', 'orange'];
const frequencyMap = new Map();

arr.forEach(item => {
  frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
});

console.log(frequencyMap); // Map { 'apple' => 2, 'banana' => 1, 'orange' => 1 }



