const dashWord = (str, num) =>{
    let result = ''

    for (let i = 0; i < str.length; i++){
        if (i % num === 0 && i !== 0){
            result += '-' + str[i]
        }else{
            result += str[i]
        }
    }
    return result
}


// 2. [INSTRUCTION]
// Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.
// function akan memberikan dash (-) jumlah karakter yang ada di number.
// functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.

// [EXAMPLE]
// input: string: 'Semangat'!, number: 3
// proses: setiap 3 karakter, akan ditambahkan dash
// output: Sem-ang-at!

// TEST CASES
console.log(dashWord('Semangat!', 3))      
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('Indonesia Hebat', 10)) // Indonesia -Hebat
console.log(dashWord('Love Coding', 1))    
