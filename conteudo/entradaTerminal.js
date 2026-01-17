// entradaTerminal.js
// Rodar com: node entradaTerminal.js

// Importando a biblioteca nativa readline
const readline = require("readline");

// Criando a interface com o terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Fazendo uma pergunta ao usuário
rl.question("Qual o seu nome? ", (nome) => {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);

    // Pode fazer outra pergunta:
    rl.question("Quantos anos você tem? ", (idade) => {
        console.log(`Legal! Então você tem ${idade} anos.`);

        // Encerra a interface
        rl.close();
    });
});
