// objetosSpreadRest.js
// Rodar com: node objetosSpreadRest.js

console.log("--- SPREAD: copiando e atualizando objetos ---");

const usuarioOriginal = {
    nome: "Camila",
    idade: 22,
    cidade: "Lisboa",
};

// Copiando com spread
const copiaUsuario = { ...usuarioOriginal };
console.log("Cópia do usuário:", copiaUsuario);

// Atualizando propriedades com spread
const usuarioAtualizado = {
    ...usuarioOriginal,
    idade: 23, // sobrescreve
    profissão: "Desenvolvedora", // adiciona nova
};

console.log("Usuário atualizado:", usuarioAtualizado);

console.log("\n--- REST: separando propriedades ---");

const { nome, ...resto } = usuarioAtualizado;

console.log("Nome separado:", nome);
console.log("Resto das informações:", resto);
