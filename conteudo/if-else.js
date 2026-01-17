console.log("Vamos aprender condicionais em JavaScript!");

const idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}

const senha = "1234";

if (senha === "admin") {
    console.log("Acesso liberado!");
} else {
    console.log("Senha incorreta.");
}

const nota = 7;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 6) {
    console.log("Você passou!");
} else {
    console.log("Infelizmente, reprovou.");
}

const temperatura = 35;
let clima;

if (temperatura > 30) {
    clima = "Muito quente";
} else if (temperatura >= 20) {
    clima = "Clima agradável";
} else {
    clima = "Frio";
}

console.log(`Hoje está: ${clima}`);
