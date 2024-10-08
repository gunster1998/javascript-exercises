const leapYears = function (leapYars) {
    return leapYars % 4 === 0 && !(leapYars % 100 === 0) || leapYars % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
