const test1 = "test";
const test2 = "kayak";

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  } else {
    if (str[start] === str[end]) {
      return isPalindrome(str, start + 1, end - 1);
    }
    return false;
  }
}

console.log(isPalindrome(test1, 0, test1.length - 1));
console.log(isPalindrome(test2, 0, test2.length - 1));
