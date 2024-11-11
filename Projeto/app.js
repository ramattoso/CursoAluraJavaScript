//Item 1
let dia = prompt('Hoje é qual dia da semana?');
if (dia == 'Sábado' || dia == 'Domingo'){
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}

//Item 2
let numeroDigitado = prompt('Digite um número real qualquer')
if (numeroDigitado >=0){
    alert(`O número ${numeroDigitado} é positivo!`)
}else{
    alert(`O número ${numeroDigitado} é negativo!`)
}

//Item 3

numeroDigitado = prompt('Digite qualquer número')
if (numeroDigitado >= 100){
    alert('Parabéns, você venceu!');
}else {
    alert('Tente novamente para ganhar.')
}

//Item 4

let saldo = 'R$ 5.000.000';
alert(`O saldo da sua conta é ${saldo}`);

//Item 5
let nome = prompt('Digite seu nome')
alert('Seja bem vindo(a), ' + nome)