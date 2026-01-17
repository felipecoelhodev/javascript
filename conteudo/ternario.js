// ternario.js
// Rodar com: node ternario.js

// Introdução
console.log("Agora vamos aprender o operador ternário!");

// Exemplo 1: if/else tradicional
const idade = 20;
let podeBeber;

if (idade >= 18) {
    podeBeber = "Sim";
} else {
    podeBeber = "Não";
}

console.log(`Pode beber (usando if/else)? ${podeBeber}`);

// Exemplo 2: mesma lógica com operador ternário
const podeBeberTernario = idade >= 18 ? "Sim" : "Não";

console.log(`Pode beber (usando ternário)? ${podeBeberTernario}`);

// Exemplo 3: ternário dentro do console.log
const nota = 8;
console.log(nota >= 6 ? "Aprovado" : "Reprovado");

// Exemplo 4: ternário com múltiplas condições encadeadas (cuidado com legibilidade!)
const temperatura = 15;
const sensacao =
    temperatura > 30
        ? "Muito quente"
        : temperatura >= 20
        ? "Clima agradável"
        : "Frio";

console.log(`Sensação térmica: ${sensacao}`);
