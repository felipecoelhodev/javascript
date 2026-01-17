// Valores "falsy" em JavaScript são tratados como falso em comparações booleanas:
// 0, "", null, undefined, NaN, false

let valorVazio = "";
let numeroZero = 0;
let valorNulo = null;
let valorIndefinido;
let valorNaN = NaN;
let valorFalso = false;

// Todos abaixo vão imprimir 'É falsy'
if (!valorVazio) {
    console.log("valorVazio é falsy");
}
if (!numeroZero) {
    console.log("numeroZero é falsy");
}
if (!valorNulo) {
    console.log("valorNulo é falsy");
}
if (!valorIndefinido) {
    console.log("valorIndefinido é falsy");
}
if (!valorNaN) {
    console.log("valorNaN é falsy");
}
if (!valorFalso) {
    console.log("valorFalso é falsy");
}

// Qualquer outro valor é "truthy":
let nome = "Maria";
let idade = 1;
let saldo = -10;
let valorTrue = true;

// Todos abaixo vão imprimir 'É truthy'
if (nome) {
    console.log("nome é truthy");
}
if (idade) {
    console.log("idade é truthy");
}
if (saldo) {
    console.log("saldo é truthy");
}
if (valorTrue) {
    console.log("valorTrue é truthy");
}
