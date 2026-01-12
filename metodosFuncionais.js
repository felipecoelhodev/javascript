// metodosFuncionais.js
// Rodar com: node metodosFuncionais.js

const numeros = [1, 2, 3, 4, 5];

console.log("Array original:", numeros);

console.log("\n--- map ---");
// Cria um novo array com os valores dobrados
const dobrados = numeros.map((numero) => numero * 2);
console.log("Números dobrados:", dobrados);

console.log("\n--- filter ---");
// Cria um novo array com apenas os números pares
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log("Apenas pares:", pares);

console.log("\n--- reduce ---");
// Soma todos os números do array
const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log("Soma total:", soma);
