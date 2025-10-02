alert ('Bem vindo ao jogo do número secreto!')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Número secreto é ${numeroSecreto}`);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 0 e ${numeroMaximo}`)
    console.log(`Você chutou: ${chute}`)

    if (chute == numeroSecreto) {
    break;
    } else {
    if (chute > numeroSecreto) {
        alert('O número secreto é menor');
    } else {
        alert('O número secreto é maior');
    }

     // tentativas = tentativas + 1;
                tentativas++;
}

}

let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns! Você acertou o número secreto que é ${numeroSecreto} em ${tentativas} ${palavraTentativas}.`);
