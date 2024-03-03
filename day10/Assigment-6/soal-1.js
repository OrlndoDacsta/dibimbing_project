// 1.Metode Pencarian (Searching):
// a. array: [10, 20, 30, 40, 50], nilai yang dicari: 30.
// b. array objek: [{ nama: 'Andi', umur: 25 }, { nama: 'Budi', umur: 30 }, { nama: 'Cici', umur: 20 }],
//  kriteria: umur lebih dari 25.

//soal - 1a
let array = [10, 20, 30, 40, 50];
//Metode indexof
const target = 30;
const foundIdx = array.indexOf(target);
console.log(foundIdx);

//Metode includes
const isArrIncluded = array.includes(target);
console.log(isArrIncluded);

//soal - 1b
let arrObj = [
  { nama: "Andi", umur: 25 },
  { nama: "Budi", umur: 30 },
  { nama: "Cici", umur: 20 },
];
//Metode find dan findIndex
const foundAge = arrObj.find(item => item.umur > 25);
console.log(foundAge);

const foundIdxAge = arrObj.findIndex(item => item.umur > 25);
console.log(foundIdxAge);

//Metode filter
const filteredAge = arrObj.filter(item => item.umur > 25 );
console.log(filteredAge);
