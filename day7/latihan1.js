const hapusSimbol = (str) => {
    let result = ''

    for ( let i = 0; i < str.length; i++){
        if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 0 && str[i] <= 9)){
            result += str[i]
        }
    }
    return result
}







// 1. [INSTRUCTION]
// Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
// Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.

// TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
