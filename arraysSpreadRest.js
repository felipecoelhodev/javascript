// arraysSpreadRest.js
// Rodar com: node arraysSpreadRest.js

console.log("--- SPREAD: copiando e juntando arrays ---");

const frutas = ["maçã", "banana", "laranja"];

// Copiando o array
const copiaFrutas = [...frutas];
console.log("Cópia das frutas:", copiaFrutas);

// Concatenando com outro array
const maisFrutas = ["uva", "abacaxi"];
const todasAsFrutas = [...frutas, ...maisFrutas];
console.log("Todas as frutas:", todasAsFrutas);

console.log("\n--- REST: separando elementos ---");

const [primeira, segunda, ...resto] = todasAsFrutas;

console.log("Primeira fruta:", primeira);
console.log("Segunda fruta:", segunda);
console.log("Resto das frutas:", resto);
