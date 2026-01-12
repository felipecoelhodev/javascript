// quiz.js
// Rodar com: node quiz.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Bem-vindo(a) ao Quiz de JavaScript!");
console.log("Responda com a letra correta: a, b ou c\n");

// Primeira pergunta
rl.question(
    "1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ",
    (resposta1) => {
        let acertos = 0;

        if (resposta1 === "b") {
            acertos++;
        }

        // TODO: adicionar a segunda pergunta

        // TODO: adicionar a terceira pergunta

        // TODO: mostrar o resultado final e encerrar o quiz com rl.close()
    }
);
