// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// x = 1 + 1

// we start our sum at zero
// because this is the default value
var sum = 0

// this counts upward from i=0 to i=9
for (var i = 0; i < 10; i += 1) {
  // this finds all i which are divisible
  // by 3 with remainder 0
  if (i % 3 === 0 || i % 5 === 0) {
    // this adds all i together
    sum += i
  }
  console.log({i, sum})
}

console.log(sum)
