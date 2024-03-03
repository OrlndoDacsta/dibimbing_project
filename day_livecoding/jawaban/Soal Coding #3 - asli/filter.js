
/**
 * js filter (fungsi = memfilter data, data ditampung di array baru):
 * - ada 3 param: eachValue, i, arraynya
 * - return berupa boolean (true = masuk ke variable & false = tidak masuk variable)
 */


let angka = [32,3,23,2,2,2,3,23,2,32,45,34,63,89];

// cuma munculin angka 23
let hasilnya = angka.filter((v) => {

  return v === 23 || v === 2;

});

console.log(hasilnya);

// kalau cuma return doang isinya, maka gaperlu {} dan "return" gausah ditulis
let genap = angka.filter(v => v % 2 === 0);
console.log(genap);