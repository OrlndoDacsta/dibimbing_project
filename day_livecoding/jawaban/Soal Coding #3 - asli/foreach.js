
let angka = [1,3,5,2,6,8];

// for (let i = 0; i < angka.length; i++) {
//   console.log('ini angka ' + angka[i]);
// }


/**
 * js foreach (fungsi : me-loop tiap item dari array):
 * - ada 3 param: eachValue, i, arraynya
 * - ga ada return
 */


// angka genap ada berapa?

let initialVariable = 0;

angka.forEach(v => {
  if (v % 2 === 0) {
    initialVariable++;
  }
})

console.log(initialVariable);


// kapan gunain for atau foreach?
// - kalau fungsinya mau loop tiap item array, BEBAS
// - kalau mau loop berupa range angka dari sekian sampe sekian, INI PAKE FOR
// - mau infinity loop, INI PAKE FOR