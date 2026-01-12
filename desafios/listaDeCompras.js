// listaCompras.js
// Rodar com: node listaCompras.js

const readline = require("readline-sync");

const lista = [];

console.log("Bem-vindo(a) à sua lista de compras!");
console.log("Escolha uma opção:");
console.log("[1] Adicionar item");
console.log("[2] Ver lista");
console.log("[3] Remover item");
console.log("[0] Sair");

let opcao = readline.question("Digite o número da opção: ");

while (opcao !== "0") {
    if (opcao === "1") {
        // TODO: pedir o nome do item e adicionar à lista
    } else if (opcao === "2") {
        // TODO: mostrar os itens da lista
    } else if (opcao === "3") {
        // TODO: mostrar a lista com números e permitir remover por índice
    } else {
        console.log("Opção inválida.");
    }

    console.log("\n---\n");
    console.log("[1] Adicionar item");
    console.log("[2] Ver lista");
    console.log("[3] Remover item");
    console.log("[0] Sair");
    opcao = readline.question("Digite o número da opção: ");
}

console.log("Até mais! Lista final:", lista);
