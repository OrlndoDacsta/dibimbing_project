const isPrimeNumber = (num) =>{
   if(num <= 1){
    return false
   }

   for ( let i = 2; i < num; i++){
    console.log(i);
    if(num % i === 0){
        return false
    }
   }
   return true
}

// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(5));
// console.log(isPrimeNumber(8));
console.log(isPrimeNumber(9));
// console.log(isPrimeNumber(13));
// console.log(isPrimeNumber(29));
// console.log(isPrimeNumber(33));
// console.log(isPrimeNumber(-3));