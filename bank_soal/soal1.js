// count data in array
let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
let input = 5;
let output = 0;

function count() {
  for (let i = 0; i <= data_array.length; i++) {
    if (data_array[i] === input) {
      output += 1;
    } else {
      output == 1;
    }
  }
  return output;
}
console.log(count());
// console.log(output);
