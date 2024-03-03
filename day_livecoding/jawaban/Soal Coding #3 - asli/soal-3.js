/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini

  // rafli

  // let filtered = [];
  
  // for (let a = 0; a < arr.length; a++) {
  //   if (arr[a] === searchValue[0] || arr[a] === searchValue[1]) {
  //     filtered.push(arr[a]);  
  //   }
  // }
  // return filtered;

  // orlando
  let data = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // setiap loop arraynya
    for(let j = 0; j < searchValue.length; j++){
      count++;
      if(searchValue[j] === arr[i]){
        data.push(searchValue[j])
        break;
      }
    }

  }

  console.log(count);

  return data
  
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [5,1,100,101,102,103,104,22,22,222,22,222]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]