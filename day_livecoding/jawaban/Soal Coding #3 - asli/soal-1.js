/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

*/

const countManual = (arr) => {
  // tulis code di sini
  
  // cara while

  // let i = 0;
  // while (typeof arr[i] != 'undefined') {
  //   i++;
  // }
  // return i;

  // let i = 0;
  // while (true) {
  //   if (typeof arr[i] === 'undefined') {
  //     break;
  //   }

  //   i++;
  // }
  // return i;


  // for

  // let count = 0;
  for (let i = 0; i >= 0; i++) {
    if (typeof arr[i] === 'undefined') {
      return i;
    }
    // count++;
  }
  // return count;
}

let data_array = [2];
console.log(countManual(data_array)); // output : 21

// console.log();