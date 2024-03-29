// https://projecteuler.net/problem=2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// setup
var prev = 0
var curr = 1
var sum = 0

// Fibonacci of under 4,000,000
while (prev + curr < 4000000) {
  curr = prev + curr
  prev = curr - prev
  
  // Even numbered ones
  if (curr % 2 === 0) {
    sum = sum + curr
    console.log({curr, sum})
  }
}

console.log(sum)
