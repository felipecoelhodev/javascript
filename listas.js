// arrays.js
// Rodar com: node arrays.js

console.log("Trabalhando com Arrays em JavaScript\n");

// Criando um array
const frutas = ["maçã", "banana", "uva", "morango"];

console.log("Array original:", frutas);

// Acessando elementos (lembre: índice começa em 0)
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// Verificando tamanho
console.log("Total de frutas:", frutas.length);

console.log("\n--- Métodos úteis ---");

// push: adiciona no final
frutas.push("melancia");
console.log("Depois do push:", frutas);

// pop: remove do final
const ultima = frutas.pop();
console.log("Depois do pop:", frutas);
console.log("Fruta removida:", ultima);

// unshift: adiciona no início
frutas.unshift("laranja");
console.log("Depois do unshift:", frutas);

// shift: remove do início
const primeira = frutas.shift();
console.log("Depois do shift:", frutas);
console.log("Fruta removida:", primeira);

// percorrendo

const linguagens = ["JavaScript", "Python", "Java", "C#"];

console.log("--- for tradicional ---");

for (let i = 0; i < linguagens.length; i++) {
    console.log(`Posição ${i}: ${linguagens[i]}`);
}

console.log("\n--- for...of ---");

for (const linguagem of linguagens) {
    console.log("Linguagem:", linguagem);
}

console.log("\n--- forEach ---");

// forEach recebe uma função como argumento
linguagens.forEach((linguagem, indice) => {
    console.log(`Linguagem ${indice + 1}: ${linguagem}`);
});
