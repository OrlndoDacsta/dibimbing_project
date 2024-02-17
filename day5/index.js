// const matrix = [
// [11, 2, 3],
//   [4, 45, 6],
//   [7, 81, 9],
// ];

// let temp = 0;
// for (let i = 0; i < matrix.length ; i++){
//     for(let j = 0; j < matrix[i].length; j++){
//         if(matrix[i][j] > temp){
//             temp = matrix[i][j]
//         }
//     }
// }
// console.log(temp);

let data = [
  { nama: "lili", kelas: "A", nilai: 75 },
  { nama: "tono", kelas: "A", nilai: 80 },
  { nama: "ani", kelas: "A", nilai: 90 },
  { nama: "budi", kelas: "A", nilai: 60 },
];

let res = [];
for (let i = 0; i < data.length; i++) {
  if (data[i].nilai > 70) {
    res.push(data[i]);
  }
}

console.log(res);
