let temCarteiraDeMotorista = true;
let temIdadeMinima = false;

// E (AND)
let podeDirigir = temCarteiraDeMotorista && temIdadeMinima;
console.log("Pode dirigir?", podeDirigir); // false

// Ou (OR)
let podeViajarSozinho = temIdadeMinima || temCarteiraDeMotorista;
console.log("Pode viajar sozinho?", podeViajarSozinho); // true

// Não (NOT)
let precisaDeAcompanhante = !temIdadeMinima;
console.log("Precisa de acompanhante?", precisaDeAcompanhante); // true

// Exemplo mais complexo
let idade = 20;
let temAutorizacao = false;

let podeEntrarNaFesta = idade >= 18 || temAutorizacao;
console.log("Pode entrar na festa?", podeEntrarNaFesta); // true
