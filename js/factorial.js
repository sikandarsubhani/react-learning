function calculateFactorial(num) {
  if (num===1){
      return 1;
  }
  else{
      return num* calculateFactorial(num-1);
  }
}

console.log(calculateFactorial(5));