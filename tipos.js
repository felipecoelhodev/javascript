let nome = "Maria"; // string (texto)
let idade = 30; // number (número)
let altura = 1.7; // number (número com casas decimais)
let estaChovendo = false; // boolean (verdadeiro ou falso)
let cidade; // undefined (ainda não recebeu valor)
let valorNulo = null; // null (ausência de valor)
let simbolo = Symbol(); // symbol (valor único e imutável)

// Para saber o tipo de uma variável, usamos typeof:
console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof altura); // number
console.log(typeof estaChovendo); // boolean
console.log(typeof cidade); // undefined
console.log(typeof valorNulo); // object (pegadinha do JS!)
console.log(typeof simbolo); // symbol
