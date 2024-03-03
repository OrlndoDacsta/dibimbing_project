const mengelompokkanAngka = (arr) => {
  let result = [[], [], []];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      result[2].push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      result[0].push(arr[i]);
    } else {
      result[1].push(arr[i]);
    }
  }
  return result;
};

// 4. MengelompokkanAngka
// [INSTRUCTIONS]
// MengelompokkanAngka adalah function yang dibuat untuk mengelompokan angka menjadi 3 kelompok.
// kelompok-1 adalah angka yang bisa dibagi 2, kelompok ke-2 adalah bilangan prima dan
// kelompok ke-3 adalah bilangan yang bisa dibagi 3

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
