// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr) {
  // This function returns the largest number in a given array.
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("findMax", findMax([38, 14, 1, 99, 23]));

function factorial(num) {
  // This function returns the factorial of a given number.
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log("factorial", factorial(7));

function fibonacci(num) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("fibonacci", fibonacci(8));

function coinFlips(num) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  let arr = [];
  if (num === 0) {
    arr = [];
  }
  if (num === 1) {
    return ["H", "T"];
  }
  const previousOutcomes = coinFlips(num - 1);

  const newOutcomes = [];

  for (let i = 0; i < previousOutcomes.length; i++) {
    const outcome = previousOutcomes[i];
    newOutcomes.push(outcome + "H");
    newOutcomes.push(outcome + "T");
  }
  return newOutcomes;
}
console.log("coinFlips", coinFlips(3));

function letterCombinations(arr) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

  const combinations = [];

  function generateCombinations(currentStr, remainingLetters) {
    if (currentStr !== "") {
      combinations.push(currentStr);
    }

    for (let i = 0; i < remainingLetters.length; i++) {
      generateCombinations(
        currentStr + remainingLetters[i],
        remainingLetters.slice(0, i).concat(remainingLetters.slice(i + 1))
      );
    }
  }

  generateCombinations("", arr); // Start generating combinations with an empty string and the original array

  return combinations;
}

console.log("letterCombinations", letterCombinations(["a", "b", "c"]));