// let i = 0;

// while (i <= 10) {
//     console.log(i++);
// }

// let index = 0;
// const nome = 'Luiz';

// while (index < nome.length) {
//     console.log(nome[index++]);
// }

// console.log('Segue a vida...');

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

//let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// A diferença entre while e do while é que while checa a condição e depois executa o código. já o do while primeiro faz e depois checa.


console.log('#######');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);