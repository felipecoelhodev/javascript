// destructuring.js
// Rodar com: node destructuring.js

console.log("--- DESTRUCTURING EM OBJETOS ---");

const pessoa = {
    nome: "Juliana",
    idade: 30,
    profissao: "Engenheira",
};

// Sem destructuring:
console.log(pessoa.nome);
console.log(pessoa.idade);

// Com destructuring:
const { nome, idade } = pessoa;
console.log("Nome:", nome);
console.log("Idade:", idade);

// Renomeando na hora de extrair
const { profissao: trabalho } = pessoa;
console.log("Profissão (renomeada):", trabalho);

console.log("\n--- DESTRUCTURING EM ARRAYS ---");

const numeros = [10, 20, 30, 40, 50];

// Sem destructuring:
const primeiro = numeros[0];
const segundo = numeros[1];

// Com destructuring:
const [a, b, ...resto] = numeros;
console.log("Primeiro:", a);
console.log("Segundo:", b);
console.log("Resto:", resto);

console.log("\n--- DESTRUCTURING EM PARÂMETROS DE FUNÇÃO ---");

function apresentar({ nome, idade }) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar(pessoa);
