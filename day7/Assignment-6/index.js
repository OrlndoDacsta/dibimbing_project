// function replaceVowels(input) {
//   let output = '';

//   for (let i = 0; i < input.length; i++) {
//     let currentChar = input[i];

//     switch (currentChar) {
//       case 'a':
//         output += 'b';
//         break;
//       case 'e':
//         output += 'f';
//         break;
//       case 'i':
//         output += 'j';
//         break;
//       case 'o':
//         output += 'p';
//         break;
//       case 'u':
//         output += 'v';
//         break;
//       default:
//         output += currentChar;
//     }
//   }

//   return output;
// }

// let input = 'anisu';
// let result = replaceVowels(input);

// console.log(result);

var kata = "sFRGFJ&dRBGVNPV";
var kataTerbalik = "";

for (var i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
}

console.log(kataTerbalik);
