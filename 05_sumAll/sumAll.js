const sumAll = function(numberOne,numberTwo) {
    let result = 0;
    if (numberOne < 0 || numberTwo < 0 || numberOne% 1 !== 0 || typeof numberOne !=="number" || typeof numberTwo !=="number"){
        return "ERROR"
    }
    if (numberOne <= numberTwo){
        for (numberOne; numberOne <= numberTwo; numberOne++){
            result += numberOne;
        }
    }
    else {
        [numberOne, numberTwo] = [numberTwo, numberOne]
        for (numberOne; numberOne <= numberTwo; numberOne++){
            result += numberOne;
    }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
