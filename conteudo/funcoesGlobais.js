// funcoesGlobais.js
// Rodar com: node funcoesGlobais.js

console.log("Funções prontas que podemos usar direto no JavaScript\n");

// ✅ console.log – já usamos muito!
console.log("Essa é a função mais usada no mundo JS 😄");

// ✅ setTimeout – espera X milissegundos e executa uma função
setTimeout(() => {
    console.log("Executado depois de 2 segundos (setTimeout)");
}, 2000);

// ✅ setInterval – executa uma função repetidamente a cada intervalo
let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log("Contador:", contador);

    if (contador === 5) {
        console.log("Parando o intervalo...");
        clearInterval(intervalo); // para o setInterval
    }
}, 1000);

// ✅ clearInterval – para o que o setInterval começou (acima)
