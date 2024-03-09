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
