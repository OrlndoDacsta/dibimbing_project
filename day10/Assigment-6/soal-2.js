// 2.Metode Pengurutan (Sorting):

// a. array bilangan bulat: [5, 3, 8, 1, 2].
// b. array objek: [{ nama: 'Andi', umur: 25 }, { nama: 'Budi', umur: 30 }, { nama: 'Cici', umur: 20 }],
// kunci pengurutan: umur.

//soal - 2a
let arrNum = [5, 3, 8, 1, 2];
arrNum.sort();
console.log(arrNum);

arrNum.sort((a, b) => a - b);
console.log(arrNum);

//soal - 2b
let arrObj1 = [
  { nama: "Andi", umur: 25 },
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 20 },
];

arrObj1.sort((a,b) => a.umur - b.umur)
console.log(arrObj1);