// callbacksHOF.js
// Rodar com: node callbacksHOF.js

console.log("Exemplo de Callback e HOF (Higher-Order Function)\n");

// Função que recebe outra função como parâmetro → isso é uma HOF
const executar = (mensagem, acao) => {
    console.log("Mensagem:", mensagem);
    acao(); // executa a função recebida
};

// Função que vamos passar como argumento (callback)
const mostrarSaudacao = () => {
    console.log("Olá! Isso veio de dentro da função callback.");
};

// Passamos a função como argumento, sem chamar (sem parênteses!)
executar("Iniciando...", mostrarSaudacao);

console.log("\n---");

// Outro exemplo: função que repete uma ação várias vezes
const repetir = (vezes, funcao) => {
    for (let i = 1; i <= vezes; i++) {
        funcao(i);
    }
};

const mostrarContador = (numero) => {
    console.log("Número:", numero);
};

repetir(3, mostrarContador);
