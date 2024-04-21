(function() {
    const arr1 = [1, 12, 15, 26, 38];
    const arr2 = [2, 13, 17, 30, 45];
  
    let j = 0;
    let i = arr1.length - 1;
  
    while (arr1[i] > arr2[j] && j < arr1.length && i > -1) {
      i--;
      j++;
    }
  
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
  
    const medianIIFE = (arr1[arr1.length - 1] + arr2[0]) / 2;
    console.log(`Median (IIFE): ${medianIIFE}`);
  })();
  
  
  