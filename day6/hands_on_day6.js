const palindrome = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j >= 0; j--) {
      if (str[i] === str[j]) {
        res = "true";
      } else {
        res = "false";
      }
    }
  }
  return res;
};

// 1. Buatkan function palindrome untuk menyelesaikan tase case dibawah
// // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome("blanket")); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

