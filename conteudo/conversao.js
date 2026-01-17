// JavaScript converte tipos automaticamente em várias situações:

let numero = 10;
let texto = "5";

// Quando soma número com texto, tudo vira texto
let resultado1 = numero + texto;
console.log("10 + '5' =", resultado1); // "105" (texto)

// Quando subtrai, multiplica ou divide, JavaScript converte para número
let resultado2 = numero - texto;
console.log("10 - '5' =", resultado2); // 5 (número)

let resultado3 = texto * 2;
console.log("'5' * 2 =", resultado3); // 10 (número)

let resultado4 = "10" / 2;
console.log("'10' / 2 =", resultado4); // 5 (número)

// Operações com valores não-numéricos geram NaN
let resultado5 = "oi" * 2;
console.log("'oi' * 2 =", resultado5); // NaN (Not a Number)

// true e false também são convertidos em operações matemáticas
console.log(true + 1); // 2
console.log(false + 1); // 1

// null e undefined em operações:
console.log(null + 1); // 1  (null vira 0)
console.log(undefined + 1); // NaN (undefined vira NaN)
