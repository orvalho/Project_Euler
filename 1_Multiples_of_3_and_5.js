/*
* If we list all the natural numbers below 10 that are multiples
* of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*/

/**
  * @description Find the sum of all the multiples of m below l.
  * @param {number} m - multiplier
  * @param {number} l - last number in range
  * @returns {number} - sum of all the multiples of m bellow l
*/
function sumMultiplesOf(m, l) {
  return m * Math.floor(l / m) / 2 * (1 + Math.floor(l / m));
}

sumMultiplesOf(3,999) + sumMultiplesOf(5,999) - sumMultiplesOf(15,999)

// Answer: 233168
