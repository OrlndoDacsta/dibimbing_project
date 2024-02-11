/**
 * Penjumlahan
 *
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 *
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require("prompt-sync")();
// const input = prompt('input ? ');

let jumlah = 0;
let angka = []
for (i = 1; i => 5; i++) {
  const input = prompt("input ? ");
  if (input.match(/^\d+$/)) {
    jumlah += parseInt(input);
    angka.push(input);
  } else {
    console.log(`jumlah = ${angka.join(" + ")} = ${jumlah} `); // ini diganti dengan jumlah seluruh inputnya
    break;
  }
}
