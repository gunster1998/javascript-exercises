const fibonacci = function(index) {
    const fibonacciStart = [1,1]

    if (index < 0){
        return 'OOPS'
    }
    if (index == 0){
        return 0
    } 
    for (let i = 2; i < index; i++){
        const nextNumber = fibonacciStart[i-1]+fibonacciStart[i-2]
        console.log(nextNumber)
        fibonacciStart.push(nextNumber)
    }
    return fibonacciStart[index - 1]
        
};

// Do not edit below this line
module.exports = fibonacci;
