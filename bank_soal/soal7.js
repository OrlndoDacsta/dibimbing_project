const checkPalindrome = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      console.log(word[word.length - 1 - i], word[i]);
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome("kapak"));
console.log(checkPalindrome("isi"));
console.log(checkPalindrome("level"));
console.log(checkPalindrome("merdeka"));
console.log(checkPalindrome("sukses"));
