const nome = "João";
const numero = 10;
const stringComEspaco = " ";
const texto = "olá";

if (nome) {
    console.log("nome (João) é Truthy");
}

if (numero) {
    console.log("número 10 é Truthy");
}

if (stringComEspaco) {
    console.log('" " (espaço) é Truthy');
}

if (texto) {
    console.log('"olá" é Truthy');
}

// Uso prático com || para fallback
const apelido = ""; // experimente trocar por 'Joca'
const mostrarNome = apelido || "Usuário";

console.log("Olá", mostrarNome);
