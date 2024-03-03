/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 & 1 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push

*/

const countData = (arr, searchValue) => {
  // tulis code di sini
  
  // initial data , ex: { '1': 0, '5': 0 }
  let result = {};
  let counter = 0;
  for (let i = 0; i < searchValue.length; i++) {
    counter++;
    result[ searchValue[i] ] = 0;
  }

  // prosess
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (typeof result[arr[i]] !== 'undefined') { // if property exist
      result[arr[i]]++;
    }
      
    // check apakah ada di search value (ini masih banyak looping)
    // for (let j = 0; j < searchValue.length; j++) {
    //   counter++;
    //   if (searchValue[j] === arr[i]) {
    //     result[arr[i]]++;
    //   }
    // }
  }

  console.log({counter});

  // return
  return result;
}

// ihwan
/*
const countData = (arr, searchValue) => { // buar parameter yang menampung data_array dan array yg ingin dicari
  const hitungObjek = {}; // buat objek kosong

  let counter = 0;
  for (let i = 0; i < searchValue.length; i++) { // selama i kurang dari panjang searchValue
    const angkaDicari = searchValue[i]; // searchValue di inisiasi ke dalam variable angkaDicari
    let hitung = 0 // buat nilai awal pada variabel hitung

    for (let j = 0; j < arr.length; j++) { // selama j kurang dari panjang data_array
      counter++;
      if (angkaDicari === arr[j]) { // jika angkaDicari sama dengan angka yang ada di data_array
        hitung++; // variabel hitung ditambah 1 pada setiap kondisi yang memenuhi
      }
    }

    hitungObjek[angkaDicari] = hitung; // masukkan string angkaDicari kedalam objek kosong, dan nilai hitung dimasukkan dalam setiap angkaDicari
    
  }
  
  console.log({counter});
  return hitungObjek; // mengembalikkan nilai hitungObjek
}
*/

// bramantyo
/*
const countData = (arr, searchValue) => {
  // tulis code di sini
  const countValue = {};
  let count = 0;
  for (let i = 0; i < searchValue.length; i++) {
    if (!countValue[searchValue[i]]) countValue[searchValue[i]] = count;

    for (let j = 0; j < arr.length; j++) {
      if (searchValue[i] === arr[j]) count++;
    }
    countValue[searchValue[i]] = count;
    count = 0;
  }
  return countValue;
};
*/

// orlando
/*
const countData = (arr, searchValue) => {
  // tulis code di sini
  let temp = [];
  let res = {};
  let counter = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < searchValue.length; j++) {
      counter++;
      if (searchValue[j] === arr[i]) {
        temp.push(searchValue[j]);
        break;
      }
    }
  }
  for (k = 0; k < temp.length; k++) {
    counter++;
    if (res[temp[k]]) {
      res[temp[k]]++;
    } else {
      res[temp[k]] = 1;
    }
  }
  console.log({counter});
  return res;
};
*/


let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countData(data_array, [1,5,8,9,1000,1100]));  // output: { '1': 4, '5': 6 }  (satu ada 4 & lima ada 6)