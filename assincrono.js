// assincrono.js
// Rodar com: node assincrono.js

console.log("Início do programa");

function esperarSegundos(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Passaram-se ${segundos} segundos`);
        }, segundos * 1000);
    });
}

// Usando .then()
esperarSegundos(2).then((mensagem) => {
    console.log("[.then()]", mensagem);
});

// Usando async/await
async function executar() {
    console.log("Esperando com async/await...");
    const resultado = await esperarSegundos(3);
    console.log("[await]", resultado);
}

executar();

console.log("Fim do programa");
