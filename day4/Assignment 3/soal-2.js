function hitungJumlahKata(kalimat) {
  let jumlah = 0;
  let hasil = 0;

  for (i = 0; i < kalimat.length; i++) {
    if (kalimat[i] == " ") {
      jumlah++;
    }
  }
  hasil = jumlah += 1;
  return hasil;
}

console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


