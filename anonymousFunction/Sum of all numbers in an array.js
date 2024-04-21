const numbers = [1, 2, 3, 4];
for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]);

console.log("Sum of numbers:", sum);