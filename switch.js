// switchNotaDetalhado.js
// Rodar com: node switchNotaDetalhado.js

console.log("Analisando a nota com switch (versão por nota exata)\n");

const nota = 4; // experimente mudar para 10, 9, 7, 5, 2, 0...

switch (nota) {
    case 10:
    case 9:
        console.log("Excelente!");
        break;
    case 8:
    case 7:
    case 6:
        console.log("Você passou.");
        break;
    case 5:
    case 4:
    case 3:
        console.log("Você foi reprovado, mas pode tentar recuperação.");
        break;
    case 2:
    case 1:
    case 0:
        console.log("Reprovado sem chance de recuperação.");
        break;
    default:
        console.log("Nota inválida.");
        break;
}
