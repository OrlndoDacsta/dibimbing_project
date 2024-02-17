// Soal:
// Manipulasi lah data JSON dibawah dengan ketentuan sebagai berikut
// apabila score lebih dari sama dengan 7 dan Status Unposted maka status berubah menjadi Posted
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting
/*
Expected Output
[
  { title: 'The Only Guide You Need', score: 8, status: 'Posted' },
  {
    title: 'The Advanced Guide To Archive',
    score: 5,
    status: 'Unposted'
  },
  {
    title: 'In Defense of the Figurative Use of Literally.',
    score: 6,
    status: 'Unposted'
  },
  {
    title: 'The Best Ways to Do Market Research For Your Business Plan',
    score: 7,
    status: 'Posted'
  },
  {
    title: 'The Only Guide You Need Part 2',
    score: 8,
    status: 'Posted'
  }
]
*/

let data = [
  {
    title: "The Only Guide You Need",
    score: 8,
    status: "Posted",
  },
  {
    title: "The Advanced Guide To Archive",
    score: 5,
    status: "Unposted",
  },
  {
    title: "In Defense of the Figurative Use of Literally.",
    score: 6,
    status: "Unposted",
  },
  {
    title: "The Best Ways to Do Market Research For Your Business Plan",
    score: 7,
    status: "Unposted",
  },
  {
    title: "The Only Guide You Need Part 2",
    score: 8,
    status: "Unposted",
  },
];

// Jawaban:
function Jobs(array) {
  // write your code here
  // lakukan perulangan untuk mengetahui isi array data
  for (let i = 0; i < array.length; i++) {
    // buat variabel untuk mendapatkan setiap objek di dalam array
    let ubahStatus = array[i];
    // buat kondisi dari setiap objek dengan score nilai >= 7 ubah status objek menjadi Posted
    if (ubahStatus.score >= 7) {
      ubahStatus.status = "Posted";
    } else {
      ubahStatus.status = "Unposted";
    }
  }
  // kembalikan lagi nilai objek yang sudah diupdate ke dalam array
  return array;
}

console.log(Jobs(data));
