// Question 1

// Write a function that receives a single string input and returns the number (count) of vowels in the given string.
// Example:
// getVowelCount(‘i am a donkey’)
// returns: 5

function getVowelCount(str) {
    const lowerCaseString = str.toLowerCase();

    const vowelArr = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let i = 0; i < lowerCaseString.length; i++) {
        const currentLetter = lowerCaseString[i];

        if (vowelArr.includes(currentLetter)) {
            count ++;
        }
    }

    return count;
}

console.log(getVowelCount('i am a donkey'));

// Question 2
// Write a function that receives an array of numbers and returns a new array with the numbers sorted in ascending order.
// Example:
// sortArrayAscending([3, 1, 9, 8])
// returns: [1, 3, 8, 9]

function sortArrayAscending(arr) {
    // the sort function ensures that the numbers are sorted in ascending order
    const sortedArray = arr.sort((a, b) => a -b);

    // create a new array using the spread operator
    const result = [...sortedArray];

    return result;
};

console.log(sortArrayAscending([3, 1, 9, 8]));

// Question 3
// Write a function that will check if two given characters are the same case
// Example:
// checkLetterCasing(‘a’, ‘g’)
// returns true
// checkLetterCasing(‘A’, ‘C’)
// returns true
// checkLetterCasing(‘a’, ‘G’)
// returns false

// checkLetterCasing(‘A’, ‘c’)
// returns false

// checkLetterCasing(‘0’, ‘c’)
// returns null
// Additional Context (Only provide this information if your candidate asks)
// Inputs will always be a single character with a type of string
// If either of the characters is not a letter, return null
// If both characters are the same case, return true
// If both characters are letters, but not the same case, return false
// Characters considered letters are only A-Z and a-z. 

function checkLetterCasing(letter1, letter2) {
    function isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }

    function isLowerCase(letter) {
        return letter === letter.toLowerCase();
    }

    function isLetter(letter) {
        return /^[a-zA-Z]+$/.test(letter);
    }

    if (!isLetter(letter1) || !isLetter(letter2)) {
        return null;
    }

    if (isUpperCase(letter1) && isUpperCase(letter2)) {
        return true;
    }

    if (isLowerCase(letter1) && isLowerCase(letter2)) {
        return true;
    }

    return false;
}

console.log(checkLetterCasing('a', 'g')); // Output: true
console.log(checkLetterCasing('A', 'C')); // Output: true
console.log(checkLetterCasing('a', 'G')); // Output: false
console.log(checkLetterCasing('A', 'c')); // Output: false
console.log(checkLetterCasing('0', 'c')); // Output: null

// Question
// Write a function that receives a number and calculates the correct change using Australian currency values. The returned value should be an object with the count of each denomination currency needed to make up the change.
// Example:
// giveChange(426)
// returns: { 100: 4, 50: 0, 20: 1, 10: 0, 5: 1, 2: 0, 1: 1 }

function giveChange(num) {
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    
    const change = {};

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const count = Math.floor(num / denomination);
        change[denomination] = count;
        num %= denomination;
    }

    return change;
}

console.log(giveChange(426));