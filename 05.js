function inverterString(str) {
    let invertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    
    return invertida;
}

const original = "exemplo";
const invertida = inverterString(original);

console.log(`String original: ${original}`);
console.log(`String invertida: ${invertida}`);
