let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

const checkAnagram = (str1, str2) => {
  let temp1 = {};
  let temp2 = {};

  for (let i = 0; i < str1.length; i++) {
    temp1[str1[i]] = (temp1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    temp2[str2[j]] = (temp2[str2[j]] || 0) + 1;
  }

  for (let char in temp1) {
    if (temp1[char] !== temp2[char]) {
      return false;
    }
  }

  return true;
};

console.log(checkAnagram(kata_1, kata_2));
console.log(checkAnagram(kata_1, kata_3));
console.log(checkAnagram(kata_2, kata_3));
console.log(checkAnagram(kata_1, kata_4));
