(function() {
    const myArray = [1, 2, 3, 4, 5];
    const k = 2;
  
    // Rotate the array to the right by k positions
    for (let i = 0; i < k; i++) {
      myArray.unshift(myArray.pop());
    }
  
    console.log("Rotated Array (IIFE):", myArray);
  })();
  