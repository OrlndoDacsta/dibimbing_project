/**
 * Menghitung luas lingkaran
 */

// let jariJari = 10; // expected output : 314
let jariJari = 14; // expected output : 616

// (start) lengkapi kode ini:

let luas = 0;
if (jariJari % 7 === 0) {
  luas = (22 / 7) * Math.pow(jariJari, 2);
} else {
  luas = 3.14 * Math.pow(jariJari, 2);
}

// (end) lengkapi kode ini:

console.log(luas);
