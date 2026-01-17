// objetos01.js
// Rodar com: node objetos01.js

console.log("--- Criando um objeto ---");

// Criando um objeto vazio
const pessoa = {};

console.log(pessoa);

// Adicionando propriedades dinamicamente
pessoa.nome = "Ana";
pessoa.idade = 25;
pessoa.temCarteira = true;

console.log("\nObjeto atualizado:");
console.log(pessoa);

// Outra forma: criar com todas as propriedades direto
const livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    paginas: 310,
};

console.log("\nOutro objeto criado direto:");
console.log(livro);

// Podemos também adicionar uma nova propriedade depois
livro.publicado = true;

console.log("\nLivro com nova propriedade:");
console.log(livro);
