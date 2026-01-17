// loopInfinito.js
// Rodar com: node loopInfinito.js

console.log("Vamos falar sobre loops infinitos!\n");

// Exemplo incorreto (comentado para não travar seu terminal)
// let i = 0;

// while (i < 5) {
//   console.log('Isso nunca para! i =', i);
//   // Esqueci de aumentar o i 😬
// }

// Versão correta:
let i = 0;

while (i < 5) {
    console.log("Loop normal, i =", i);
    i++; // agora sim o loop vai terminar
}

console.log("\n---");

// Exemplo com for que nunca termina (comentado)
// for (let j = 0; j >= 0; j++) {
//   console.log('Esse for nunca termina porque j nunca fica menor!');
// }

console.log("Exemplo de for com erro: condição nunca fica falsa.\n");

// Exemplo com controle incorreto de variável
let senhaCorreta = false;

while (!senhaCorreta) {
    console.log("Tentando acessar...");

    // Aqui deveria mudar a variável, mas não muda
    // senhaCorreta = true; // descomente para evitar o loop
    break; // usamos break só para evitar travar o terminal
}

console.log("Fim do script.");
