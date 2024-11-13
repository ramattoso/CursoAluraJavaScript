alert('Boas vindas ao jogo do número secreto. São seis fases! Boa sorte (:');
let numeroSecreto, chute, novaFase;
let totalTentativas = 0;
let fase = 1;
let numeroMaximo = [10,100,1000,10000,100000,1000000];
let tentativas = 1;
let continuar = 'Sim';
while (fase < 6){
    numeroSecreto = parseInt(Math.random()*numeroMaximo[fase-1] + 1);
    while (chute != numeroSecreto){
        chute = prompt(`Esta é a fase ${fase} do jogo. Escolha um número entre 1 e ${numeroMaximo[fase-1]} `);
        if (chute == numeroSecreto) {
        break;
        } else {
            if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
        }
        tentativas++;
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    novaFase = fase + 1;
    continuar = prompt(`Deseja passar para a fase ${novaFase}? Digite Sim ou Não.`)
    totalTentativas = totalTentativas + tentativas;
    if(continuar == 'Sim'){
        fase++;
        tentativas = 1;
    }else {break;}
}
let palavraFases = fase > 1? 'fases' :'fase'
let palavraTentativa = totalTentativas > 1? 'tentativas' : 'tentativa'
alert(`No total você usou ${totalTentativas} ${palavraTentativa} e passou por ${fase} ${palavraFases}.`)

document.getElementById("titulo").innerHTML = 'Resultado do jogo!'
document.getElementById("mensagem").innerHTML = `No total você usou ${totalTentativas} ${palavraTentativa} e passou por ${fase} ${palavraFases}.`