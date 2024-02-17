function setRupiah(rupiah) {
  let rupiahStr = "" + rupiah;
  let jumlahRupiah = "Rp ";

  for (let i = 0; i < rupiahStr.length; i++) {
    jumlahRupiah += rupiahStr[i];
    console.log(i);

    if ((rupiahStr.length - i - 1) % 3 === 0 && i !== rupiahStr.length - 1) {
      jumlahRupiah += ".";
    }
  }
  return jumlahRupiah;
}

// 5. Buatkan function setRupiah untuk menyelesaikan tase case dibawah
// TEST CASES
console.log(setRupiah(12345)); // Rp 12.345
console.log(setRupiah(100000)); // Rp. 100.000
console.log(setRupiah(150)); // Rp150
console.log(setRupiah(120500000)); // Rp 120.500.000
console.log(setRupiah(5478300)); // Rp 5.478.300
