/*
* A palindromic number reads the same both ways.
* The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

* Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(num) {
  const reversedNum = parseInt(num.toString().split('').reverse().join(''));
  return num === reversedNum ? true : false;
}

function getLargestPalindromeProduct(fromValue, toValue) {
  let LargestPalindromeProduct = 0;
  for(let i = toValue; i >= fromValue; i--) {
    for(let j = toValue; j >= fromValue; j--) {
      product = i * j;
      if(isPalindrome(product)) {
        if(LargestPalindromeProduct < product) LargestPalindromeProduct = product;
      }
    }
  }
  return LargestPalindromeProduct;
}

getLargestPalindromeProduct(100, 999);
