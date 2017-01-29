//this function returns a boolean if a word/sentence is a palindrome
function isPalindrome(inputStr) {
  //getting input ready to check
  var input = inputStr.toLowerCase(); //convert to lowercase
  input = input.replace(' ', ''); //get rid of whitespace
  return input.split('').reverse().join('') === input;
}

//this function returns a string of numbers into a number array ordered descending
function orderDesc(numbers) {
  var output = [];
  numbers.split(',').forEach(num => {
    output.push(Number(num));
  });
  
  return output.sort(function(a,b) {
    return a-b;
  });
}

//this function returns the largest values from each array in an array of arrays
function findLargestInEach(arrays) {
  var output = [];
  arrays.forEach(array => {
    output.push(Math.max(...array));
  });
  return output.sort(function(a,b) {
    return a-b;
  });
}



