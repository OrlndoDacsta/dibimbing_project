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
