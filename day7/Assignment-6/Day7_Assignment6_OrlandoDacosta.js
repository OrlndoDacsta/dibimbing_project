// 1. mostFrequentLargestNumbers
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mencari nilai terbesar dan
// hitung berapa kali muncul dalam deret nilai:
const mostFrequentLargestNumbers = (arr) => {
    let maxNum = 0;
    let countNum = 0;
    let hasil = "";
  
    if (arr.length === 0) {
      return `''${hasil}`;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
        countNum = 1;
      } else if (arr[i] === maxNum) {
        countNum++;
      }
    }
    hasil = `angka paling besar adalah ${maxNum} dan jumlah kemunculan sebanyak ${countNum} kali`;
    return hasil;
  };
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  console.log(
    mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
  );
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  console.log(mostFrequentLargestNumbers([]));
  //''

  //------------------------------------------------------------------------------------

  // 2. Password Generator
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mengenkripsi sebuah password dengan ketentuan sebagai berikut:
// - Mengubah hufuf besar menjadi kecil dan sebaliknya
// - menghilangkan spasi dan menggantinya menjadi ‘&’
// - setiap bertemu huruf vocal harus diganti dengan huruf selanjutnya(+1) sesuai urutan alfabet
// - membalik urutan huruf

const passwordGenerator = (pass) => {
    let temp = "";
    let result = "";
    let finalResult = "";
  
    for (let i = 0; i < pass.length; i++) {
      if (pass.length < 5) {
        finalResult = "Minimal karakter yang diinputkan adalah 5 karakter";
      } else if (pass[i] === " ") {
        temp += "";
      } else if (pass[i] === pass[i].toLowerCase()) {
        temp += pass[i].toUpperCase();
      } else if (pass[i] === pass[i].toUpperCase()) {
        temp += pass[i].toLowerCase();
      }
    }
  
    for (let j = 0; j < temp.length; j++) {
      switch (temp[j]) {
        case "a":
          result += "b";
          break;
        case "i":
          result += "j";
          break;
        case "u":
          result += "v";
          break;
        case "e":
          result += "f";
          break;
        case "o":
          result += "p";
          break;
        case "A":
          result += "B";
          break;
        case "I":
          result += "J";
          break;
        case "U":
          result += "V";
          break;
        case "E":
          result += "F";
          break;
        case "O":
          result += "P";
          break;
        default:
          result += temp[j];
      }
    }
  
    for (let k = result.length - 1; k >= 0; k--) {
      finalResult += result[k];
    }
    return finalResult;
  };
  
  console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator("Alexei")); // 'JFXFLb'
  console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  //-----------------------------------------------------------------------------------------------


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

  //-----------------------------------------------------------------------------------------------------------------------------

  // 4. shoppingTime
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk menghitung berapa banyak yang bisa dibelanjakan dari saldo tersebut
// ketentuan sebagai berikut:
// - Toko Makmur sedang melakukan SALE untuk beberapa barang, yaitu:
// // Gula Pasir seharga 15000
// // Beras seharga 12000
// // Mie Instan seharga 2500
// // Minyak Goreng seharga 18500
// // Telor Ayam seharga 24600
// - output berupa object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.
// - Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// - Jika uang yang dimiliki kurang dari 2500 maka tampilkan "Mohon maaf, uang tidak cukup"
// - Member yang berbelanja di toko Makmur akan membeli barang yang paling mahal terlebih dahulu 
// dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.


function shoppingTime(memberId, money) {
    if (!memberId) {
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
  
    const items = [
      { name: "Gula Pasir", price: 15000 },
      { name: "Beras", price: 12000 },
      { name: "Mie Instan", price: 2500 },
      { name: "Minyak Goreng", price: 18500 },
      { name: "Telor Ayam", price: 24600 },
    ];

    items.sort((a, b) => b.price - a.price);
  
    let listPurchased = [];
    let changeMoney = money;
  
    for (const item of items) {   
    if(money < item.price){
        return 'Mohon maaf, uang tidak cukup'
    }

        if (changeMoney >= item.price) {
        listPurchased.push(item.name);
        changeMoney -= item.price;
      }
    }
  
    const result = {
      memberId: memberId,
      money: money,
      listPurchased: listPurchased,
      changeMoney: changeMoney,
    };

  
    return result;
  }

// TEST CASES
console.log(shoppingTime('12kTsasdAl', 75000));
//{ memberId: 12kTsasdAl,
// money: 75000,
// listPurchased:
//  [ 'Telor Ayam',
//    'Minyak Goreng',
//    'Gula Pasir',
//    'Beras',
//    'Mie Instan' ],
// changeMoney: 2400 }

console.log(shoppingTime('13KasdfG3D', 30000));
// //{ memberId: '13KasdfG3D',
// // money: 30000,
// // listPurchased:
// //  [ 'Telor Ayam', ‘Mie Ayam’ ],
// // changeMoney: 2900 }

console.log(shoppingTime('', 25700)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdRxa53', 1500)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja