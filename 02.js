function fibonacci() {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci`;
    }
    while (num >= b) {
        let temp = b;
        b = a + b;
        a = temp;
        
        if (b === num) {
            return `O número ${num} pertence à sequência de Fibonacci`;
        }
    }

    return `O número ${num} não pertence à sequência de Fibonacci`
}

console.log(fibonacci(num));
const num = 36;



