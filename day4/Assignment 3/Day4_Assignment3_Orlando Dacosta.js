function konversiMenit(detik) {
    let menit = Math.floor(detik/60);
    let konversi = 0;
    let sisa = detik % 60;
  
    if (sisa < 10) {
      konversi = `${menit}:0${sisa}`;
    }else{
      konversi = `${menit}:${sisa}`;
    }
    return konversi;
  }
  
  // 1. Buatkan function konversiMenit untuk menyelesaikan tase case dibawah
  // // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// -----------------------------------------------------------------------------


  function hitungJumlahKata(kalimat) {
    let jumlah = 0;
    let hasil = 0;
  
    for (i = 0; i < kalimat.length; i++) {
      if (kalimat[i] == " ") {
        jumlah++;
      }
    }
    hasil = jumlah += 1;
    return hasil;
  }
  
  console.log(hitungJumlahKata("I have a dream")); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  

// -----------------------------------------------------------------------------


  function pasanganTerbesar(num) {
    let terbesar = 0;
    let numStr = '' + num;
  
    for (let i = 0; i < numStr.length - 1; i++) {
      let pasangan = parseInt(numStr[i] + numStr[i + 1])
      
      if(pasangan > terbesar){
          terbesar = pasangan
      }
    }
    return terbesar;
  }
  
  // 3. Buatkan function pasanganTerbesar untuk menyelesaikan tase case dibawah
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99


  // -----------------------------------------------------------------------------

  function targetTerdekat(arr) {
    let indexO = -1;
    let indexX = -1;
    let jarak = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO = i;   
            if (indexX !== -1) {
                jarak = i - indexX;
                indexX = -1;
            } 
        } else if (arr[i] === 'x') {
            indexX = i;
            if (indexO !== -1) {
                jarak = i - indexO;
                indexO = -1;
            }
        }
    }
  
    return jarak;
  }
  
  
  // 4. Buatkan function targetTerdekat untuk menyelesaikan tase case dibawah
  // TEST CASES
  console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
  // console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
  // console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
  // console.log(targetTerdekat([" ", " ", "o", " "])); // 0
  // console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
  

  // -----------------------------------------------------------------------------


  function setRupiah(rupiah) {
    let rupiahStr = "" + rupiah;
    let jumlahRupiah = "Rp ";
  
    for (let i = 0; i < rupiahStr.length; i++) {
      jumlahRupiah += rupiahStr[i];
      console.log(i);
  
      if ((rupiahStr.length - i - 1) % 3 === 0 && i !== rupiahStr.length - 1) {
        jumlahRupiah += ".";
      }
    }
    return jumlahRupiah;
  }
  
  // 5. Buatkan function setRupiah untuk menyelesaikan tase case dibawah
  // TEST CASES
  console.log(setRupiah(12345)); // Rp 12.345
  console.log(setRupiah(100000)); // Rp. 100.000
  console.log(setRupiah(150)); // Rp150
  console.log(setRupiah(120500000)); // Rp 120.500.000
  console.log(setRupiah(5478300)); // Rp 5.478.300
  