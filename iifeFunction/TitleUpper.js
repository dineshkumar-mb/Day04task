const strArray = ["apple", "banana", "cherry"];

// Using an IIFE to convert strings to title case
const titleCapsArray = (function() {
  return strArray.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})();

console.log("Title Caps Array:", titleCapsArray);

