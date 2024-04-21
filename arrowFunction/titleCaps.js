const stringArray = ["hello", "world", "javascript","first","language"];
const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log("Title Caps Array:", titleCapsArray);

