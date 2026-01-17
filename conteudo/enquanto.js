// whileDoWhile.js
// Rodar com: node whileDoWhile.js

console.log("Vamos aprender while e do/while!\n");

// Exemplo 1: while - repete enquanto a condição for verdadeira
let contador = 1;

while (contador <= 5) {
    console.log("Contador com while:", contador);
    contador++; // sem isso, vira loop infinito!
}

console.log("\n---");

// Exemplo 2: do/while - executa pelo menos uma vez
let numero = 10;

do {
    console.log("Executando do/while com número:", numero);
    numero++;
} while (numero < 5); // mesmo sendo falso, ele roda 1x

console.log("\n---");

// Exemplo 3: pedindo uma senha correta (sem prompt, só simulação)
let tentativa = "senhaErrada";
let tentativasRestantes = 3;

while (tentativa !== "1234" && tentativasRestantes > 0) {
    console.log("Senha incorreta. Tentativas restantes:", tentativasRestantes);
    tentativasRestantes--;

    // aqui, no real, viria: tentativa = prompt('Digite a senha:');
    if (tentativasRestantes === 1) {
        tentativa = "1234"; // simulação de acerto
    }
}

if (tentativa === "1234") {
    console.log("Acesso liberado!");
} else {
    console.log("Conta bloqueada.");
}
