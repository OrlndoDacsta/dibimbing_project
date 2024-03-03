// 3.Callback & Promise:

// a. array: [1, 2, 3, 4, 5].
// b. array: [10, 20, 30, 40, 50], 
// fungsi callback untuk menghitung jumlah: function hitungJumlah(total, nilai) { return total + nilai; }.

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
  
  // Array nilai
  const array = [10, 20, 30, 40, 50];
  
  // Menggunakan callback
  hitungTotalCallback(array, 0, 0, (total) => {
    console.log("Total nilai (callback):", total);
  });
  
  // Menggunakan Promise
  hitungTotalPromise(array)
    .then((total) => {
      console.log("Total nilai (promise):", total);
    })
    .catch((error) => {
      console.error(error);
    });
  