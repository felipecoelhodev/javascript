// objetos04.js
// Rodar com: node objetos04.js

const produto = {
    nome: "Mouse Gamer",
    preco: 149.9,
    estoque: 34,
    emPromocao: true,
};

console.log("--- Objeto produto ---");
console.log(produto);

// Object.keys() → retorna array com as chaves
const chaves = Object.keys(produto);
console.log("\nChaves do objeto:", chaves);

// Object.values() → retorna array com os valores
const valores = Object.values(produto);
console.log("\nValores do objeto:", valores);

// Object.entries() → retorna array com pares [chave, valor]
const entradas = Object.entries(produto);
console.log("\nEntradas do objeto (chave e valor):");
console.log(entradas);

// Podemos usar for...of para ver cada par (se já tiverem aprendido)
console.log("\nListando chave e valor de cada entrada:");
for (const [chave, valor] of entradas) {
    console.log(`${chave}: ${valor}`);
}
