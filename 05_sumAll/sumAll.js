const sumAll = function (numberOne, numberTwo) {
    const isNegative = numberOne < 0 || numberTwo < 0;
    const isNotInteger = !Number.isInteger(numberOne) || !Number.isInteger(numberTwo);
    if (isNegative || isNotInteger) {
        return 'ERROR'
    }

    const start = Math.min(numberOne, numberTwo)
    const end = Math.max(numberOne, numberTwo)

    let sum = 0;
    const numbers = Array.from({length: end - start +1 }, (_,index) => sum += start+index )
    return sum
}
// Do not edit below this line
module.exports = sumAll;

//oldCode
// const sumAll = function(numberOne,numberTwo) {
//     let result = 0;
// const isNegative = numberOne < 0 || numberTwo < 0 ;
// const isNotInteger = !Number.isInteger(numberOne) || !Number.isInteger(numberTwo);
//     if ( isNegative || isNotInteger){
//         return 'ERROR'
//     }

//     if (numberOne <= numberTwo){
//         for (numberOne; numberOne <= numberTwo; numberOne++){
//             result += numberOne;
//         }
//     } else {
//         [numberOne, numberTwo] = [numberTwo, numberOne]
//         for (numberOne; numberOne <= numberTwo; numberOne++){
//             result += numberOne;
//     }
//     }
//     return result;
// };