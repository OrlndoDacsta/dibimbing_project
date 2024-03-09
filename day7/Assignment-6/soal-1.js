// 1. mostFrequentLargestNumbers
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mencari nilai terbesar dan
// hitung berapa kali muncul dalam deret nilai:
const mostFrequentLargestNumbers = (arr) => {
  let maxNum = 0;
  let countNum = 0;
  let hasil = "";

  if (arr.length === 0) {
    return `''${hasil}`;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      countNum = 1;
    } else if (arr[i] === maxNum) {
      countNum++;
    }
  }
  hasil = `angka paling besar adalah ${maxNum} dan jumlah kemunculan sebanyak ${countNum} kali`;
  return hasil;
};

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
console.log(mostFrequentLargestNumbers([]));
//''
