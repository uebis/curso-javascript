// Regras das condicionais

// Vai checar as condições de cima para baixo e parar na primeira verdadeiraq eu ele encontrar, caso contrário vai execular o else ou não fazer nada e pular para o resto do código.

const numero = 10;

if (numero <= 10) {
    console.log('O número é menor ou igual a 10.')
}

if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 9');
} else if (1 === 1) {
    console.log('LITERAL');
}else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...Aqui vem o resto do código')