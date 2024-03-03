/**
 * Menghitung kedalaman maksimum array multidimensi
 */

function maxDepth(arr){
    // tulis code di sini
    
  }
  
  const arr1 = [2,4];
  console.log('arr1 = ', maxDepth(arr1)); // 1
  
  const arr2 = [2,4,[2]];
  console.log('arr2 = ', maxDepth(arr2)); // 2
  
  const arr3 = [2,4,[2, [1,4] ], [9,6]];
  console.log('arr3 = ', maxDepth(arr3)); // 3
  
  const arr4 = [2,4,[2, [1,4,] ], [9,6], [4, [10, [2, [ 9,6,3, [ 7,1 ] ] ] ] ] ];
  console.log('arr4 = ', maxDepth(arr4)); // 6  