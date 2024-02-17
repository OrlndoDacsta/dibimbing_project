let data_array = [
    1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
  ];
  
  function array_sort(arr){
  
      for(let i = 0; i < arr.length -1; i ++){
          for (let j = 0; j < arr.length - 1 - i;j++){
              if(arr[j] > arr[j + 1]){
                  const swap = arr[j]
                  arr[j] = arr[j+1]
                  arr[j + 1] = swap
              }
          }
      }
      return arr
  }
  
  console.log(array_sort(data_array, 'ASC'));
  