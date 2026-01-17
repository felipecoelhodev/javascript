// erros.js
// Rodar com: node erros.js

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log("Resultado da divisão é:", resultado);
} catch (erro) {
    console.log("⚠️ Ocorreu um erro:", erro.message);
} finally {
    console.log("Fim da tentativa de divisão.");
}
