// Hitung
// - hasil
// - pembagian
// - perkalian (val * val)

class Hitung {
  constructor(hasil) {
    this.hasil = hasil;
  }
  area() {
    return `hasilnya = ${this.hasil}`;
  }
  pembagian(param1, param2) {
    return param1 / param2;
  }

  perkalian(param1, param2) {
    return param1 * param2;
  }
}

// persegi extend Hitung
// - hitung luas (p x l)
// -- res = perkalian(p, l)
class Persegi extends Hitung {
  constructor(panjang, lebar) {
    super()
    this.panjang = panjang;
    this.lebar = lebar
  }

  res(){
    const kali = super.perkalian(this.panjang, this.lebar)
    super.hasil = kali
    const result = super.area()
    return result
  }
}
const luas = new Persegi(10, 10)
console.log(`Luas Persegi ${luas.res()}`);

//-----------------------------------------------------------------------------
// lingkaran
// - hitung (22/7 * input)
// -- res = pembagian --> perkalian

class Lingkaran extends Hitung {
  constructor(num1, num2, r) {
    super()
    this.num1 = num1;
    this.num2 = num2;
    this.r = r
    
  }

  result(){
    const cariPhi = super.pembagian(this.num1, this.num2)
    const hitungR = super.perkalian(this.r, this.r)
    const luasLingkaran = super.perkalian(cariPhi, hitungR)
    super.hasil = luasLingkaran
    const resLingkaran = super.area()
    return resLingkaran
  }
}

const luas2 = new Lingkaran(22, 7, 3)
 console.log(`Luas Lingkaran ${luas2.result()}`);