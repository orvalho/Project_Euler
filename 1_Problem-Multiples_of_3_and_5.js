/*
* If we list all the natural numbers below 10 that are multiples
* of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*/

function multiplesOf ( x1, x2) {
var sum = 0;
for ( var i = 1; i < 1000; i++ ) {
  i % x1 === 0 ? sum += i : i % x2 === 0 ? sum += i : sum += 0;
}
  return sum;
}

multiplesOf (3,5);

// Answer: 233168
