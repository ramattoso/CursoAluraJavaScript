//Item 1
console.log('Boas vindas!');

//Item 2
let nome = 'Raquel';
console.log(`Olá, ${nome}!`)

//Item 3
alert(`Olá, ${nome}!`);

//Item 4
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log('A linguagem que mais gosta é ' + linguagem + '.');

//Item 5
let valor1 = 5;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Item 6
resultado = valor1-valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Item 7
let idade = prompt('Digite sua idade');
if (idade >=18) {
    console.log('Você é maior de idade no Brasil.');
}else {console.log('Você é menor de idade no Brasil.')};

//Item 8
let numero = prompt('Digite um número real qualquer')
if (numero > 0){
    console.log(`O número que você digitou ${numero} é positivo.`)
}else{
    if (numero < 0){
        console.log(`O número que você digitou ${numero} é negativo.`)
    }
    else {console.log('O número que você digitou é zero.')}
};

//Item 9
 let contador = 1;
 while (contador < 11){
    console.log(contador);
    contador++;
 }

 //Item 10
 let nota = 10;
 if (nota >= 7){
    console.log('Aprovado')
 } else {console.log('Reprovado')}

 //Item 11
 console.log(Math.random());

 //Item 12
 console.log(parseInt(Math.random()*10+1));

 //Item 13
 console.log(parseInt(Math.random()*1000+1));
