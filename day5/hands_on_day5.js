const data = [12, 45, 67, 23, 89, 34];

function nilaiRatarata(arr) {
  let average = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    average = total / arr.length;
  }
  return average;
}

console.log(nilaiRatarata(data)); // Output: 45
