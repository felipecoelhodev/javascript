// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.
// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.
// Exemplo de entrada:
// const idade = 20;
// Saída esperada:
// Caso o usuário tenha 18 anos ou mais:
// Acesso permitido.
// Caso o usuário não tenha 18 anos:
// Acesso negado.

const idade = 20;

if (idade >= 18) {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}
