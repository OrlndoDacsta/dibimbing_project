// filter array
function filtering(num) {
  let data_array = [
    1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
  ];

  let filter = [];

  for (i = 0; i <= data_array.length; i++) {
    if (data_array[i] === num) {
      filter.push(data_array[i]);
    }
  }
  return filter;
}

console.log(filtering(1));
