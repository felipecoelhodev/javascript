// setExemplo.js
// Rodar com: node setExemplo.js

console.log("--- Exemplo de uso do Set ---");

// Criando um Set com valores repetidos
const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 5]);

console.log("Set com valores únicos:", numeros); // { 1, 2, 3, 4, 5 }

// Adicionando valores
numeros.add(6);
numeros.add(2); // não adiciona de novo porque já existe

console.log("\nDepois de adicionar 6 e tentar adicionar 2 de novo:", numeros);

// Verificando se tem um valor
console.log("\nO set tem o número 3?", numeros.has(3)); // true
console.log("O set tem o número 10?", numeros.has(10)); // false

// Removendo um valor
numeros.delete(4);
console.log("\nDepois de remover o número 4:", numeros);

// Tamanho do Set
console.log("\nTamanho atual do Set:", numeros.size);

// Iterando pelos valores do Set
console.log("\nValores no Set:");
for (const numero of numeros) {
    console.log(numero);
}
