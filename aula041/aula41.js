// Escreva uma função que recebe 2 números e retorne o maior deles

const num1 = 12;
const num2 = 10;

function maior(num1, num2) {
    let maiornum;

    // Verifica se ambos são números
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num1 > num2) {
            maiornum = num1;
            console.log(`O maior número é: ${maiornum}`);
        } else if (num1 < num2) {
            maiornum = num2;
            console.log(`O maior número é: ${maiornum}`);
        } else {
            console.log('Os dois números são iguais');
        }
    } else {
        console.log('Ao menos um dos dados inseridos não é um número');
    }

    console.log(num1, num2, maiornum);
}

maior(num1, num2);

