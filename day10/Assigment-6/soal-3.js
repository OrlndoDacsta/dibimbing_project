// 3.Callback & Promise:

// a. array: [1, 2, 3, 4, 5].
// b. array: [10, 20, 30, 40, 50],
// fungsi callback untuk menghitung jumlah: function hitungJumlah(total, nilai) { return total + nilai; }.

// Array nilai
const array2 = [1, 2, 3, 4, 5];
// Fungsi yang menghitung total nilai dalam array secara rekursif dengan callback
function hitungTotalCallback(arr, index, total, callback) {
  if (index < arr.length) {
    setTimeout(() => {
      total += arr[index];
      hitungTotalCallback(arr, index + 1, total, callback);
    }, 500); // Simulasi tugas asinkron
  } else {
    callback(total);
  }
}

// Fungsi yang menghitung total nilai dalam array menggunakan Promise
function hitungTotalPromise(arr) {
  return new Promise((resolve) => {
    hitungTotalCallback(arr, 0, 0, resolve);
  });
}

// Menggunakan callback
hitungTotalCallback(array2, 0, 0, (total) => {
  console.log("Total nilai soal a (callback):", total);
});

// Menggunakan Promise
hitungTotalPromise(array2)
  .then((total) => {
    console.log("Total nilai soal a (promise):", total);
  })
  .catch((error) => {
    console.error(error);
  });

//--------------------------------------------------------------------------------------------------------------

const array3 = [10, 20, 30, 40, 50];
function hitungTotalCallback(arr, index, total, callback) {
  if (index < arr.length) {
    setTimeout(() => {
      total += arr[index];
      hitungTotalCallback(arr, index + 1, total, callback);
    }, 500);
  } else {
    callback(total);
  }
}

function hitungTotalPromise(arr) {
  return new Promise((resolve) => {
    hitungTotalCallback(arr, 0, 0, resolve);
  });
}

hitungTotalCallback(array3, 0, 0, (total) => {
  console.log("Total nilai soal b (callback):", total);
});

hitungTotalPromise(array3)
  .then((total) => {
    console.log("Total nilai soal b (promise):", total);
  })
  .catch((error) => {
    console.error(error);
  });
