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
