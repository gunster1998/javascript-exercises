const repeatString = function(word,itaration) {
    let result = "";
    if (itaration<0){
        return "ERROR"
    }
    for (let i = 0; i< itaration; i++){
        result +=word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
