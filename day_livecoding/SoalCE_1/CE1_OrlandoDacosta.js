// Soal:
// Pada suatu kelas, seorang guru meminta para siswa untuk melakukan hal sebagai berikut
// guru akan menghitung nilai dari angka 1 hingga 15
// setiap bilangan yang habis dibagi 3 maka siswa secara bersama akan menyebut kata "Hip"
// setiap bilangan yang habis dibagi 5 maka siswa secara bersama akan menyebut kata "Hura"
// setiap bilangan yang habis dibagi 3 dan 5  maka siswa secara bersama akan menyebut kata "Hip Hura"
// setiap bilangan yang tidak memenuhi kondisi sebelumnya maka siswa secara bersamaan akan menyebutkan angka itu sendiri
//
/* 
Expected Output:
1
2
Hip
4
Hura
Hip
7
8
Hip
Hura
11
Hip
13
14
Hip Hura
done
*/

// Tidak Boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// contoh 1 :
// hipHura(15)
// "Hip Hura"

// contoh 2 :
// hipHura(6)
// "Hip"

// contoh 3 :
// hipHura(25)
// "Hura"

// Buatlah logic dari statement diatas
// Tidak boleh langsung print expected output

// Jawaban:
function hipHura(bilangan) {
  // write your code here
  // perulangan sebanyak bilangan
  for (let i = 1; i <= bilangan; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Hip Hura");
    } else if (i % 3 === 0) {
      console.log("Hip");
    } else if (i % 5 === 0) {
      console.log("Hura");
    } else {
      console.log(i);
    }
  }
}

// "Hip Hura" (15)
console.log(hipHura(15));

// "Hip" (6)
// console.log(hipHura(6));

// "Hura" (25)
// console.log(hipHura(25));

