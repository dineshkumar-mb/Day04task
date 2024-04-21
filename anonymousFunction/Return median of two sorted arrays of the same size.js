function getMedian(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  const n = arr1.length;

  while (i + j <= n) {
      if (i === n) {
          merged.push(arr2[j]);
          j++;
      } else if (j === n) {
          merged.push(arr1[i]);
          i++;
      } else if (arr1[i] <= arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          merged.push(arr2[j]);
          j++;
      }
  }

  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
  } else {
      return merged[mid];
  }
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const median = getMedian(arr1, arr2);
console.log(`Median: ${median}`);
