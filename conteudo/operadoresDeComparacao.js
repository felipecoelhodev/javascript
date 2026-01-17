let idadeUsuario = 18;
let idadeMinima = 16;

console.log("Igualdade (==):", idadeUsuario == idadeMinima); // false
console.log("Diferença (!=):", idadeUsuario != idadeMinima); // true

console.log("Maior que (>):", idadeUsuario > idadeMinima); // true
console.log("Menor que (<):", idadeUsuario < idadeMinima); // false

console.log("Maior ou igual (>=):", idadeUsuario >= 18); // true
console.log("Menor ou igual (<=):", idadeUsuario <= 17); // false

// Comparação estrita (também compara o tipo)
let idadeTexto = "18";
console.log("Igualdade estrita (===):", idadeUsuario === idadeTexto); // false
console.log("Diferença estrita (!==):", idadeUsuario !== idadeTexto); // true
