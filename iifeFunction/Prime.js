(function() {
    const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const primeArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    });
    console.log("Prime Numbers (IIFE):", primeArray);
  })();
  
  