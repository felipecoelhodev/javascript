function mostrarMensagem() {
    console.log("Olá! Seja bem-vindo(a) ao nosso programa!");
}

mostrarMensagem();

// function somar() {
//   const resultado = 2 + 3;
//   console.log('Resultado da soma é:', resultado);
// }

// somar();

function saudacao(nome) {
    console.log("Olá!", nome);
    console.log("Tudo bem com você?");
}

saudacao("Ana");
saudacao("João");

function dobrar(numero) {
    return numero * 2;
}

const valorDobrado = dobrar(10);
console.log("Dobro de 10 é:", valorDobrado);
console.log("Dobro de 7 é:", dobrar(7));

function somar(numero1, numero2) {
    return numero1 + numero2;
}

const resulado = somar(2, 2);
console.log("O resultado da soma é:", resulado);
