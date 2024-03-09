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
const foundAge = arrObj.find((item) => item.umur > 25);
console.log(foundAge);

const foundIdxAge = arrObj.findIndex((item) => item.umur > 25);
console.log(foundIdxAge);

//Metode filter
const filteredAge = arrObj.filter((item) => item.umur > 25);
console.log(filteredAge);

//----------------------------------------------------------------------------

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

arrObj1.sort((a, b) => a.umur - b.umur);
console.log(arrObj1);

//----------------------------------------------------------------------------

// 3.Callback & Promise:

// a. array: [1, 2, 3, 4, 5].
// b. array: [10, 20, 30, 40, 50],
// fungsi callback untuk menghitung jumlah: function hitungJumlah(total, nilai) { return total + nilai; }.

// Array nilai
const array2 = [1, 2, 3, 4, 5];
// Fungsi yang menghitung total nilai dalam array secara rekursif dengan callback
function hitungTotalCallback(arr, index, total, callback) {
  if (index < arr.length) {
    setTimeout(() => {
      total += arr[index];
      hitungTotalCallback(arr, index + 1, total, callback);
    }, 500); // Simulasi tugas asinkron
  } else {
    callback(total);
  }
}

// Fungsi yang menghitung total nilai dalam array menggunakan Promise
function hitungTotalPromise(arr) {
  return new Promise((resolve) => {
    hitungTotalCallback(arr, 0, 0, resolve);
  });
}

// Menggunakan callback
hitungTotalCallback(array2, 0, 0, (total) => {
  console.log("Total nilai soal a (callback):", total);
});

// Menggunakan Promise
hitungTotalPromise(array2)
  .then((total) => {
    console.log("Total nilai soal a (promise):", total);
  })
  .catch((error) => {
    console.error(error);
  });

//--------------------------------------------------------------------------------------------------------------

const array3 = [10, 20, 30, 40, 50];
function hitungTotalCallback(arr, index, total, callback) {
  if (index < arr.length) {
    setTimeout(() => {
      total += arr[index];
      hitungTotalCallback(arr, index + 1, total, callback);
    }, 500);
  } else {
    callback(total);
  }
}

function hitungTotalPromise(arr) {
  return new Promise((resolve) => {
    hitungTotalCallback(arr, 0, 0, resolve);
  });
}

hitungTotalCallback(array3, 0, 0, (total) => {
  console.log("Total nilai soal b (callback):", total);
});

hitungTotalPromise(array3)
  .then((total) => {
    console.log("Total nilai soal b (promise):", total);
  })
  .catch((error) => {
    console.error(error);
  });

//----------------------------------------------------------------------------

// 4.Async Await :
// URL API: https://6582c47102f747c8367a2854.mockapi.io/api/v1/movies

async function getMovies() {
  try {
    const response = await fetch(
      "https://6582c47102f747c8367a2854.mockapi.io/api/v1/movies"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed get data");
  }
}
async function getDataMov() {
  const dataMovies = await getMovies();
  console.log(dataMovies);
}

getDataMov();
