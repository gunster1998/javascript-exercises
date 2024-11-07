const palindromes = function (string) {
    const palindromeArray = string.trim().replace(/[^a-z0-9]/ig, '').toLowerCase().split('');
    const palidromReverse = [...palindromeArray].reverse();
    console.log(palindromeArray === palidromReverse, palindromeArray,palidromReverse)
        return palindromeArray.every((element,index) => element === palidromReverse[index])
    }

// Do not edit below this line
module.exports = palindromes;

//Старый вариант 
// const palindromes = function (string) {
//     const palindromeArray = string.trim().replace(/[^a-z]/ig, '').toLowerCase().split('');
//     const halfArray = Math.floor(palindromeArray.length / 2);
//     const lastIndex = palindromeArray.length - 1;    

//         // console.log(palindromeArray,halfArray,lastIndex)
//         for (let i = 0; i < halfArray; i++ ){
//             if (palindromeArray[i] !== palindromeArray[lastIndex-i]){
//                 return false
//             }
//         }
//     return true
// };
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
