//foreach
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((element) => {
  console.log("foreach",element);
});


//map
const newArray = array.map((element) => {
  return element * 2;
});
console.log("map",newArray);

//filter
const evenArray = array.filter((element) => {
  return element % 2 === 0;
});
console.log("filter",evenArray);


//find
const found = array.find((element) => {
  return element > 5;
});
console.log("find",found);

//reduce
const sum = array.reduce((acc, element) => {
  return acc + element;
});
console.log("reduce",sum);

const usercart = [ 
  {product1: 'apple', price: 1000000},
  {product2: 'banana', price: 200000000000},
  {product3: 'orange', price: 300000000}
 ];
  const total = usercart.reduce((totalprice, current_product) => {
    return totalprice + current_product.price;
  });
  console.log(total);



//some
const some = array.some((element) => {
  return element > 5;
});
console.log("some",some);

//every
const every = array.every((element) => {
  return element > 5;
});
console.log("every",every);

//fill  
const filledArray = array.fill(0, 2, 5);
console.log("fill",filledArray);


//splice
const splicedArray = array.splice(6, 3);
console.log("splice",splicedArray);

//slice
const slicedArray = array.slice(1,7);
console.log("slice",slicedArray);

//sort
const sortedArray = array.sort((a, b) => {
  return a - b;
});
console.log("sort",sortedArray);

const sortarr=array.sort()
console.log(sortarr);


//reverse
const reversedArray = array.reverse();
console.log("reverse",reversedArray);
//indexOf
const index = array.indexOf(5);
console.log("indexOf",index);

//lastIndexOf
const lastIndex = array.lastIndexOf(5);
console.log("lastIndexOf",lastIndex);

//replace
//replace all smiley with sad
const str = " I am happy :) and I am sad :(";
const newStr = str.replace(/:\)/g, ":(");

// write a function to check if number is pronic number or not
function isPronic(num){
  for(let i=0;i<=num;i++){
    if(i*(i+1)===num){
      return true;
    }
  }
  return false;
}

//write a function to hide credit card number except last 4 digits using repeat and slice
function hideCardNumber(cardNumber){
  const lastFourDigits = cardNumber.slice(-4);
  return "*".repeat(cardNumber.length-4)+lastFourDigits;
}
function hideCreditCardNumber(cardNumber){
  const lastFourDigits = cardNumber.slice(-4);
  return lastFourDigits.padStart(cardNumber.length, "*");
}

// isspongecase
//test case: isSpongeCase("sPoNgEbOb") => false
function isSpOnGeCaSe(str) {
  for(let i=0;i<str.length;i++){
if(i%2===0 && str[i]===str[i].toLowerCase()){
  return false;
}
if(i%2!==0 && str[i]===str[i].toUpperCase()){
  return false;
}
}
return true;
}




// explain the working of alll the functions in the array functions
//foreach - iterates over each element in the array
//map - creates a new array with the results of calling a provided function on every element in the array
//filter - creates a new array with all elements that pass the test implemented by the provided function
//find - returns the first element in the array that satisfies the provided testing function
//findIndex - returns the index of the first element in the array that satisfies the provided testing function
//every - tests whether all elements in the array pass the test implemented by the provided function
//some - tests whether at least one element in the array passes the test implemented by the provided function
//reduce - executes a reducer function on each element of the array, resulting in a single output value
//fill - fills all the elements of an array from a start index to an end index with a static value
//splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//slice - returns a shallow copy of a portion of an array into a new array object selected from start to end
//sort - sorts the elements of an array in place and returns the array  
//reverse - reverses an array in place
//indexOf - returns the first index at which a given element can be found in the array
//lastIndexOf - returns the last index at which a given element can be found in the array
//concat - merges two or more arrays and returns a new array
//join - returns a string with all elements separated by commas or a specified separator
//includes - determines whether an array includes a certain element, returning true or false as appropriate
//isArray - determines whether the passed value is an Array
//push - adds one or more elements to the end of an array and returns the new length of the array
//pop - removes the last element from an array and returns that element
//shift - removes the first element from an array and returns that element
//unshift - adds one or more elements to the beginning of an array and returns the new length of the array
//toString - returns a string representing the specified array and its elements
//toLocaleString - returns a string representing the elements of the array