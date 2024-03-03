/** 
 * Jumlah angka dari array multi-dimensi (nested array tanpa limit)
 */

function sum(arr){
    // tulis code di sini
    
  }
  
  const arr1 = [2,4];
  console.log('arr1 = ', sum(arr1)); // 6
  
  const arr2 = [2,4,[2]];
  console.log('arr2 = ', sum(arr2)); // 8
  
  const arr3 = [2,4,[2], [4, [10, [2, [ 9,6,3, [ 7,1 ] ] ] ] ] ];
  console.log('arr3 = ', sum(arr3)); // 50