// forBasico.js
// Rodar com: node forBasico.js

console.log("Vamos aprender o laço for!\n");

// Exemplo 1: contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log("Número atual:", i);
}

console.log("\n---");

// Exemplo 2: mostrar letras de uma palavra (sem usar arrays ainda)
const palavra = "casa";

for (let i = 0; i < palavra.length; i++) {
    console.log("Letra:", palavra[i]);
}

console.log("\n---");

// Exemplo 3: só números pares de 1 a 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "é par");
    }
}

console.log("\n---");

// Exemplo 4: contagem regressiva
for (let i = 5; i >= 1; i--) {
    console.log("Contando para trás:", i);
}
