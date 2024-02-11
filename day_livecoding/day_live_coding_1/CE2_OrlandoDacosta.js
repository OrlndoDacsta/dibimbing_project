// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67];

function maxMin(array) {
  // write your code here
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    // membandingkan nilai indeks dari indeks awal sampai mendapatkan nilai terbesar
    if (array[i] > max) {
      max = array[i];
    }

    // membandingkan nilai indeks dari indeks awal sampai mendapatkan nilai terkecil
    if (array[i] < min) {
      min = array[i];
    }
  }
  return `{ max: ${max}, min: ${min} }`;
}

console.log(maxMin(array));
