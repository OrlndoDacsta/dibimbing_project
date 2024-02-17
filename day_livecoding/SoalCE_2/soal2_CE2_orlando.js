// Soal:
// Hilangkan Karakter Berulang yang terdapat pada String
// Clue : menggunakan perulangan
// Tidak boleh langsung print expected output

/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates(str) {
  //write your code here
  let arrResult = [];

  for (let i = 0; i < str.length; i++) {
    let huruf = str[i];

    let remove = false;
    for (let j = 0; j < arrResult.length; j++) {
      if (arrResult[j] === huruf) {
        remove = true;
        break;
      }
    }
    if (!remove) {
      arrResult.push(huruf);
    }
  }
  return arrResult;
}

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));
