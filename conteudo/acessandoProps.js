// objetos02.js
// Rodar com: node objetos02.js

const pessoa = {
    nome: "Carlos",
    idade: 30,
    hobbies: ["ler", "caminhar", "cozinhar"],
};

console.log("--- Objeto original ---");
console.log(pessoa);

// Acessando com ponto (.)
console.log("\nNome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// Acessando com colchetes []
console.log("Hobbies:", pessoa["hobbies"]);

// Modificando uma propriedade
pessoa.nome = "Carla";
pessoa["idade"] = 31;

console.log("\n--- Depois de modificar nome e idade ---");
console.log(pessoa);

// Acessando um item do array interno
console.log("\nPrimeiro hobby:", pessoa.hobbies[0]);

// Modificando o array interno
pessoa.hobbies.push("tocar violão");

console.log("\n--- Depois de adicionar um hobby ---");
console.log(pessoa.hobbies);

// Trocando todo o array
pessoa.hobbies = ["nadar", "pintar"];

console.log("\n--- Depois de trocar todos os hobbies ---");
console.log(pessoa.hobbies);

console.log("--- Informações do usuário ---");

// Usando for...in para percorrer o objeto
for (const chave in usuario) {
    console.log(chave + ":", usuario[chave]);
}

// Isso NÃO funciona com arrays (não é recomendado)
for (const i in [10, 20, 30]) {
    console.log(i); // índices como string: '0', '1', '2'
}
