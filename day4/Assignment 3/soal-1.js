function konversiMenit(detik) {
  let menit = Math.floor(detik/60);
  let konversi = 0;
  let sisa = detik % 60;

  if (sisa < 10) {
    konversi = `${menit} : 0${sisa}`;
  }else{
    konversi = `${menit} : ${sisa}`;
  }
  return konversi;
}

// 1. Buatkan function konversiMenit untuk menyelesaikan tase case dibawah
// // TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
