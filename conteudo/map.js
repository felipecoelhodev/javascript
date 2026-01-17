// mapExemplo.js
// Rodar com: node mapExemplo.js

console.log("--- Exemplo de uso do Map ---");

// Criando um Map
const notas = new Map();

// Adicionando pares chave → valor
notas.set("Ana", 9);
notas.set("João", 7);
notas.set("Carlos", 6);

console.log("\n--- Acessando valores com get() ---");
console.log("Nota da Ana:", notas.get("Ana"));
console.log("Nota do João:", notas.get("João"));

// Verificando se uma chave existe
console.log("\nJoão está no Map?", notas.has("João")); // true
console.log("Maria está no Map?", notas.has("Maria")); // false

// Removendo uma entrada
notas.delete("Carlos");

console.log("\nRemovido Carlos. O map tem Carlos?", notas.has("Carlos"));

// Tamanho do Map
console.log("\nTamanho atual do Map:", notas.size);

// Iterando com forEach (sem destruturação)
console.log("\n--- Percorrendo com forEach ---");
notas.forEach(function (valor, chave) {
    console.log("Chave:", chave, "| Valor:", valor);
});
