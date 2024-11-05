const palindromes = function (string) {
    const palindromeArray = string.trim().replace(/[!%$" ",.]/g, '').toLowerCase().split('');
    const lengthPalindromeArray = palindromeArray.length
    console.log(palindromeArray)
    const halfArray = Math.floor(palindromeArray.length / 2);
    const lastIndex = palindromeArray.length - 1

        // console.log(palindromeArray,halfArray,lastIndex)
        for (let i = 0; i < halfArray; i++ ){
            if (palindromeArray[i] !== palindromeArray[lastIndex-i]){
                return false
            }
        }
    return true
};

// Do not edit below this line
module.exports = palindromes;


//Для поиска в словах
// const palindromes = function (string) {
//     const palindromeArray = string.replace(/[!%$]/g, '').toLowerCase().split(' ');
//     const lengthPalindromeArray = palindromeArray.length



//     for (let j = 0; j < lengthPalindromeArray; j++){
//         const palindromeArrayWord = palindromeArray[j].split('')
//         const halfArray = Math.floor(palindromeArrayWord.length / 2);
//         const lastIndex = palindromeArrayWord.length - 1
//         let arrayCheck = 0;
//         console.log(palindromeArrayWord,halfArray,lastIndex,palindromeArray)
//         for (let i = 0; i < halfArray; i++ ){
//             if (palindromeArrayWord[i] === palindromeArrayWord[lastIndex-i]){
//                 arrayCheck++
//             }
//         }
//         if (arrayCheck === halfArray){
//             return true
//         }
//     }
//     return false
// };

// // Do not edit below this line
// module.exports = palindromes;
