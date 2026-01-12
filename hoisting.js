console.log("Antes de declarar, idade é:", idade); // undefined (por causa do hoisting com 'var')
var idade = 36;
// let idade = 36;
// const idade = 36;
console.log("Depois de declarar, idade é:", idade);

idade = 37;
console.log("Fiz aniversário! Idade agora é:", idade);
