// encadeamento.js
// Rodar com: node encadeamento.js

console.log("Vamos aprender sobre encadeamento de condições!\n");

// Situação: verificar a faixa etária de uma pessoa
const idade = 15; // experimente mudar para 7, 17, 25, 65, etc.

if (idade < 12) {
    console.log("Você é uma criança.");
} else if (idade < 18) {
    console.log("Você é adolescente.");
} else if (idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}

console.log("\nOutro exemplo:\n");

// Situação: nota de uma prova
const nota = 4; // experimente mudar para 10, 7, 5, 2...

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 6) {
    console.log("Você passou.");
} else if (nota >= 3) {
    console.log("Você foi reprovado, mas pode tentar recuperação.");
} else {
    console.log("Reprovado sem chance de recuperação.");
}
