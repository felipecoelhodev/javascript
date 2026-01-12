// calculadora.js
// Rodar com: node calculadora.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Bem-vindo(a) à Calculadora do Terminal!\n");

// Passo 1: pedir o primeiro número
rl.question("Digite o primeiro número: ", (input1) => {
    const numero1 = Number(input1);

    // TODO: verificar se numero1 é um número válido

    // Passo 2: pedir o operador
    rl.question("Digite o operador (+, -, *, /): ", (operador) => {
        // TODO: verificar se o operador é válido

        // Passo 3: pedir o segundo número
        rl.question("Digite o segundo número: ", (input2) => {
            const numero2 = Number(input2);

            // TODO: verificar se numero2 é um número válido

            // TODO: fazer a operação de acordo com o operador

            // TODO: mostrar o resultado e encerrar o programa com rl.close()
        });
    });
});
