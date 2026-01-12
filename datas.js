// datas01.js
// Rodar com: node datas01.js

console.log("--- Criando datas ---");

const agora = new Date();
console.log("Data atual:", agora);

// Criando uma data específica (ano, mês, dia)
// OBS: o mês vai de 0 (janeiro) a 11 (dezembro)
const dataNascimento = new Date(1990, 4, 15);
console.log("Data de nascimento:", dataNascimento);

// Data em formato ISO (padrão internacional)
const dataISO = new Date("2023-12-25T10:30:00Z");
console.log("Data no padrão ISO:", dataISO);

// Extraindo partes da data
console.log("\n--- Extraindo partes da data atual ---");
console.log("Ano:", agora.getFullYear());
console.log("Mês (0-11):", agora.getMonth());
console.log("Dia do mês:", agora.getDate());
console.log("Dia da semana (0=Dom):", agora.getDay());
console.log("Hora:", agora.getHours());
console.log("Minutos:", agora.getMinutes());

// Formatando a data para algo legível
console.log("\n--- Formatando ---");
console.log("Formato brasileiro:", agora.toLocaleDateString("pt-BR"));
console.log("Formato americano:", agora.toLocaleDateString("en-US"));
