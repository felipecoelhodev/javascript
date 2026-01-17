// errosComunsLacos.js
// Rodar com: node errosComunsLacos.js

console.log("Erros comuns em laços\n");

// ERRO 1: loop infinito (esquecendo de atualizar a variável)
let i = 0;

// ⚠️ Cuidado: se você remover o i++ abaixo, trava tudo!
// while (i < 3) {
//   console.log('Erro: isso vai rodar pra sempre!');
// }

console.log("Evite loops infinitos atualizando a variável corretamente.");

i = 0;
while (i < 3) {
    console.log("Agora funciona:", i);
    i++;
}

console.log("\n---");

// ERRO 2: condição que nunca é verdadeira
let contador = 5;

while (contador < 3) {
    // Isso nunca vai rodar
    console.log("Isso não aparece nunca");
    contador++;
}

console.log("Se a condição começar falsa, o while nunca roda.");

console.log("\n---");

// ERRO 3: usar o mesmo nome de variável fora e dentro do laço
let x = 10;

for (let x = 0; x < 3; x++) {
    console.log("x dentro do for:", x);
}

console.log("x fora do for continua valendo:", x); // ainda é 10

console.log("\n---");

// ERRO 4: usar o mesmo nome de variável sem let (cria confusão global)
y = 100; // variável global sem let (não recomendado!)

for (y = 1; y <= 3; y++) {
    console.log("y sem let dentro do for:", y);
}

console.log("y foi alterado fora do for também! Agora y vale:", y);

console.log("\n---");

// ERRO 5: usar break ou continue fora do lugar certo
let z = 0;

while (z < 5) {
    z++;

    if (z === 3) {
        console.log("Pulando o número 3");
        continue; // volta pro começo do while
    }

    console.log("z:", z);
}
