(function() {
    const words = ["level", "hello", "radar", "world"];
  
    // Define an IIFE to check if a word is a palindrome
    const isPalindrome = (str) => str === str.split("").reverse().join("");
  
    // Filter palindromes from the array
    const palindromes = words.filter(isPalindrome);
  
    console.log("Palindromes:", palindromes);
  })();
  