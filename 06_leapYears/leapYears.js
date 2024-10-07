const leapYears = function(leapYars) {
    if (leapYars % 4 === 0 && !(leapYars % 100 ===0) || leapYars %400 === 0){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
