const arr = ["aha", "raghu", "gaag", "hello", "jooj", "kook"];

// Define an anonymous function to check if a word is a palindrome
const isPalindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

// Loop through the array and log palindromes
for (let i = 0; i < arr.length; i++) {
  if (isPalindrome(arr[i])) {
    console.log(arr[i] + " is a palindrome");
  }
}
