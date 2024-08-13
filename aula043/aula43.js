// escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio
// checar se o número é realmente um número
// Use a função com números de 0 a 100.

function zappy(num = 10) {
    if (typeof num !== 'number') {
        return 'Não é um número.';
    }

    if (num < 0 || num > 100) {
        return 'Número está fora do range.';
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

console.log(zappy(56));

