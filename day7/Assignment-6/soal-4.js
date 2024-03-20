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