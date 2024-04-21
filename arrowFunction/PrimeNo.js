const array = [2, 3, 5, 7, 11, 13, 17, 19, 23,4,44,6,15];
const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const primeNumbers = array.filter(isPrime);
console.log("Prime Numbers:", primeNumbers);
