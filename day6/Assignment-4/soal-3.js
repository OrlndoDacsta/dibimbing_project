const angkaPalindrome = (num) => {
  while (true) {
    num++;

    let numStr = "" + num;
    let reverse = "";

    for (let i = numStr.length - 1; i >= 0; i--) {
      reverse += numStr[i];
      console.log(reverse);
    }

    if (numStr === reverse) {
      return num;
    }
  }
};

// 3. AngkaPalindrome
// [INSTRUCTIONS]
// AngkaPalindrome adalah function yang dibuat untuk mencetak angka yang memenuhi kriteria palindrome. Jika nilai yang diinputkan bukan palindrome maka akan mencetak angka baru yang sesuai dengan cara ditambahkan satu per satu

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
