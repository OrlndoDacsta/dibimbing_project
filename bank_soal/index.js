function sortArrayDescending(arr) {
    // Menduplikasi array untuk menghindari perubahan pada array asli
    const sortedArray = arr.slice();
  
    // Mendapatkan panjang array
    const n = sortedArray.length;
  
    // Implementasi Bubble Sort
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Membandingkan dua elemen berturut-turut dan menukar jika perlu
        if (sortedArray[j] < sortedArray[j + 1]) {
          // Menukar elemen
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
  
    return sortedArray;
  }
  
  // Contoh penggunaan
  const originalArray = [5, 2, 9, 1, 5, 6];
  const sortedDescending = sortArrayDescending(originalArray);
  
  console.log("Array asli:", originalArray);
  console.log("Array yang diurutkan dari terbesar ke terkecil:", sortedDescending);
  