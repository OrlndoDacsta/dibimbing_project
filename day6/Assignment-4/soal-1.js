const MajoritySweeper = (arr) => {
  let temp = {};
  let result = [];
  let maxMajority = 0;
  let mostFrequent = 0;

  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof temp[arr[i]] !== "undefined") {
      temp[arr[i]]++;
    }
    if (temp[arr[i]] > maxMajority) {
      maxMajority = temp[arr[i]];
      mostFrequent = arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== mostFrequent) {
      result.push(arr[j])
    }
  }
  return result
};

// 1. MajoritySweeper
// [INSTRUCTIONS]
// MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang
// sering muncul (mayoritas) dari daftar nilai array

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]
