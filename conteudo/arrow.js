// Arrow function: mostrarMensagem (sem retorno, mantém bloco)
const mostrarMensagem = () =>
    console.log("Olá! Seja bem-vindo(a) ao nosso programa!");

mostrarMensagem();

// Arrow function: saudacao (tem mais de uma linha → mantém bloco e {} obrigatórios)
const saudacao = (nome) => {
    console.log("Olá!", nome);
    console.log("Tudo bem com você?");
};

saudacao("Ana");
saudacao("João");

// Arrow function: dobrar (retorno simples → pode ser implícito)
const dobrar = (numero) => numero * 2;

const valorDobrado = dobrar(10);
console.log("Dobro de 10 é:", valorDobrado);
console.log("Dobro de 7 é:", dobrar(7));

// Arrow function: somar (retorno simples → pode ser implícito)
const somar = (numero1, numero2) => numero1 + numero2;

const resulado = somar(2, 2);
console.log("O resultado da soma é:", resulado);
