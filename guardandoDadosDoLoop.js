// guardandoDadosDoLoop.js
// Rodar com: node guardandoDadosDoLoop.js

console.log("Guardando dados dentro de loops\n");

// Exemplo 1: somar os números de 1 a 5
let total = 0;

for (let i = 1; i <= 5; i++) {
    total = total + i;
    // também poderia: total += i;
    console.log(`Somando ${i}, total agora é: ${total}`);
}

console.log("Soma final:", total);

console.log("\n---");

// Exemplo 2: contar quantos números pares existem de 1 a 10
let quantidadePares = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        quantidadePares++;
        console.log(i, "é par");
    }
}

console.log("Total de pares de 1 a 10:", quantidadePares);

console.log("\n---");

// Exemplo 3: construir uma string com letras da palavra (sem array)
const palavra = "casa";
let resultado = "";

for (let i = 0; i < palavra.length; i++) {
    resultado = resultado + "[" + palavra[i] + "]";
}

console.log("Resultado final da montagem da string:", resultado);
