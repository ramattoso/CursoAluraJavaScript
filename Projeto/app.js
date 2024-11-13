alert('Boas vindas ao jogo do número secreto. São seis fases! Boa sorte (:');
let numeroSecreto, novaFase;
let chute = -1;
let totalTentativas = 0;
let fase = 1;
let numeroMaximo = [10,100,1000,10000,100000,1000000];
let tentativas = 1;
let continuar = 'Sim';
while (fase < 6 && chute != null){
    numeroSecreto = parseInt(Math.random()*numeroMaximo[fase-1] + 1);
    while (chute != null && chute != numeroSecreto){
        chute = prompt(`Esta é a fase ${fase} do jogo. Escolha um número entre 1 e ${numeroMaximo[fase-1]} `);
        if (chute == null){
            break;
        } else {
            if (Math.sign(chute) != 1 || Math.sign(chute) == 0){
                alert('Digite um número válido');
            } else { 
                if (chute == numeroSecreto) {
                    break;
                } else {
                    if (chute > numeroSecreto){
                        alert(`O número secreto é menor que ${chute}`);
                    } else {
                        alert(`O número secreto é maior que ${chute}`);
                    }
                }
            }
            tentativas++;
        }
    }
    if(chute != null){
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
}
if (chute == null) {
    document.getElementById("titulo").innerHTML = 'Você não quis jogar :/ Recarre a página se mudar de ideia! (;'
}else {
    let palavraFases = fase > 1? 'fases' :'fase'
    let palavraTentativa = totalTentativas > 1? 'tentativas' : 'tentativa'
    document.getElementById("titulo").innerHTML = 'Resultado do jogo:'
    document.getElementById("mensagem").innerHTML = `No total você usou ${totalTentativas} ${palavraTentativa} e passou por ${fase} ${palavraFases}. Atualize a página para jogar mais!`
}