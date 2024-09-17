const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamentoPorEstado) {
    const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
        console.log(`Estado: ${estado}, Percentual: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentual(faturamentoPorEstado);
