const repeatString = function (word, itaration) {
    if (itaration < 0) {
        return "ERROR"
    }
    return word.repeat(itaration);
};

// Do not edit below this line
module.exports = repeatString;
