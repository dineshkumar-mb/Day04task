(function() {
    const array = [1, 2, 3, 2, 4, 1, 5, 3];
  
    // Using an IIFE to remove duplicates
    const uniqueArray = (function(arr) {
      return arr.filter((value, index) => arr.indexOf(value) === index);
    })(array);
  
    console.log("Unique Array (IIFE):", uniqueArray);
  })();
  
  
  