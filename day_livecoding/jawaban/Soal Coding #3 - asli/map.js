/**
 * js map (fungsi : memodifikasi setiap item array, hasilnya ditampung dalam variable baru)
 * - ada 3 param: eachValue, i, arraynya
 * - return value yg sudah dimodifikasi
 */

let angka = [1,2,3,4];

// angka genap dikali 3
// angka ganjil dikali 2

let modified = angka.map(v => {
  /*
  if (v % 2 === 0) {
    return v * 3;
  }
  else {
    return v * 2;
  }
  */

  return v % 2 === 0 ? v * 3 : v * 2;
})

console.log(modified);




// penambahan property
let students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

let withStatus = students.map(v => {
  v.status = v.grade >= 8 ? 'Lulus' : "Tidak lulus";
  return v;
})

console.log(withStatus);