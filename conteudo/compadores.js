let numero = 5;
let textoNumero = "5";

// == compara só o valor, ignorando o tipo
console.log(numero == textoNumero); // true

// === compara valor E tipo (comparação estrita)
console.log(numero === textoNumero); // false

// Outro exemplo:
let idade = 0;
let idadeTexto = "0";

console.log(idade == idadeTexto); // true
console.log(idade === idadeTexto); // false

// Dica: sempre prefira === na maioria dos casos para evitar surpresas!
