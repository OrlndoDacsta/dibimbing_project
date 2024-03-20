// 3. naikAngkot
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mengubah data dan
// menghitung ongkos penumpang angkot, berkut ketentuannya:
//  - Rute angkot, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

let rute = ["A", "B", "C", "D", "E", "F"];
let result = [];

const naikAngkot = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let penumpang = arr[i][0];
    let naikDari = arr[i][1];
    let tujuan = arr[i][2];

    let indexNaikDari = rute.indexOf(naikDari);
    let indexTujuan = rute.indexOf(tujuan);

    let bayar = (indexTujuan - indexNaikDari) * 2000;

    let dataPenumpang = {
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    };
    result.push(dataPenumpang);
  }
  return result;
};

console.log(naikAngkot([["Melati", "B", "F"],["Herman", "C", "D"],]));
// [ { penumpang: 'Melati', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Herman', naikDari: 'C', tujuan: 'D', bayar: 2000 } ]
// console.log(naikAngkot([['Lala', 'A', 'D'], ['Andre', 'A', 'F'], ['Saeful', 'B', 'F']]));
// [ { penumpang: 'Lala', naikDari: 'A', tujuan: 'D', bayar: 6000 },
//   { penumpang: 'Andre', naikDari: 'A', tujuan: 'F', bayar: 10000 },
//   { penumpang: 'Saeful', naikDari: 'B', tujuan: 'F', bayar: 8000 } ]
// console.log(naikAngkot([])); //[]
