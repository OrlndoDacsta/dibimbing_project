function miniMaxSum(arr) {
  const panjang = arr.length;
  let total = 0;
  let minimum = Number.MAX_SAFE_INTEGER;
  let maksimum = Number.MIN_SAFE_INTEGER;

  // Menghitung total dan mencari nilai minimum dan maksimum
  for (let i = 0; i < panjang; i++) {
    total += arr[i];
    minimum = Math.min(minimum, arr[i]);
    maksimum = Math.max(maksimum, arr[i]);
  }

  // Menghitung jumlah minimum dan maksimum
  const minSum = total - maksimum;
  const maxSum = total - minimum;

  console.log(minSum, maxSum);

  return [minSum, maxSum];
}

// Contoh penggunaan
const arrContoh = [1, 2, 3, 4, 5];

console.log(miniMaxSum(arrContoh));
