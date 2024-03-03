class Genre {
  constructor(tinggiBadan) {
    this.tinggiBadan = tinggiBadan;
  }

  getPersentase() {
    return 0;
  }

  // hitung BBI
  getBBI() {
    return (
      this.tinggiBadan - 100 - (this.tinggiBadan - 100) * this.getPersentase()
    );
  }

  // Tinggi badan
  getTB() {
    return this.tinggiBadan;
  }
}

// child - Laki-laki
class Laki extends Genre {
  getPersentase() {
    return 0.1; // Pria: 10%
  }
}

// child - Perempuan
class Perempuan extends Genre {
  getPersentase() {
    return 0.15; // Wanita: 15%
  }
}

const tinggiLaki = new Laki(180);
console.log("Laki-laki");
console.log("Tinggi Badan:", tinggiLaki.getTB(), "cm");
console.log("Berat Badan Ideal (BBI):", tinggiLaki.getBBI(), "kg");

console.log("\n");

console.log("Perempuan");
const tinggiPerempuan = new Perempuan(180);
console.log("Tinggi Badan:", tinggiPerempuan.getTB(), "cm");
console.log("Berat Badan Ideal (BBI):", tinggiPerempuan.getBBI(), "kg");
