/*
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143?
*/

function largestPrimeFactor (number) {
  var arrayOfPrimeFactors = [];
  for (var i = 2; i <= number;) {
    if (number % i === 0) {
      number /= i;
      arrayOfPrimeFactors.push(i);
    } else {
      i++;
    }
  }
  return Math.max(...arrayOfPrimeFactors);
}

largestPrimeFactor(600851475143);

// Answer: 6857
