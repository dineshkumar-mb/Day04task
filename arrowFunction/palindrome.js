const words = ["level", "hello", "radar", "world"];
const isPalindrome = str => str === str.split("").reverse().join("");
const palindromes = words.filter(isPalindrome);
console.log("Palindromes:", palindromes);
