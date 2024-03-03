/**
 * Bubble sort (asc / desc)
 */

function bubbleSortAsc(arr) {
  // tulis code di sini
  while (true) {
    let finish = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        finish = false;
      }
    }
    if (finish) {
      break;
    }
  }
  return arr;
}

function bubbleSortDesc(arr) {
 while (true) {
  let finish = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      finish = false;
    }
  }
  if (finish) {
    break;
  }
}
return arr;
 }

let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

console.log("dari kecil ke besar :", bubbleSortAsc(angka));

 console.log("dari besar ke kecil :", bubbleSortDesc(angka));
