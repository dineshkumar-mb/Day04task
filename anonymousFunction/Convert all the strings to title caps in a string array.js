const strArray = ["apple", "banana", "cherry"];

// Using an anonymous function to convert strings to title case
const titleCapsArray = strArray.map((str) => str.charAt(0).toUpperCase() + str.slice(1));

console.log("Title Caps Array:", titleCapsArray);
