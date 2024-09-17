const faturamentoDiario = [1000, 2000, 0, 3000, 2500, 0, 4000, 3200, 0, 1500, 800, 3500, 0, 2200, 5000];

function calcularFaturamento(faturamento) {
    let menor = Number.MAX_VALUE;
    let maior = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    for (let i = 0; i < faturamento.length; i++) {
        const valor = faturamento[i];

        if (valor > 0) {
            if (valor < menor) menor = valor;
            if (valor > maior) maior = valor;

            soma += valor;
            diasComFaturamento++;
        }
    }

    const mediaMensal = soma / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorFaturamento: menor,
        maiorFaturamento: maior,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
