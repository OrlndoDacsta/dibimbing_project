/**
 * selection sort (asc / desc)
 */

function selectionSortAsc(arr) {
  // tulis code di sini
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[index]
    arr[index] = temp;
  }
  return arr;
}

function selectionSortDesc(arr) {
  // tulis code di sini
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[index]) {
        index = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[index]
    arr[index] = temp;
  }
  return arr;
}

let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

console.log("dari kecil ke besar :", selectionSortAsc(angka));

console.log("dari besar ke kecil :", selectionSortDesc(angka));
