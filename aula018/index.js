// Tratamento de arrays

// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz'
// array = 'Outra;' // Não pode
// console.log(array);

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;

/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return {        
        nome: nome, // atributos
        sobrenome: sobrenome,
        idade: idade
    };
}
*/

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};

}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome);

const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementeaIdade() {
        this.idade++;
    }
};

pessoa6.fala();
pessoa6.incrementeaIdade();
pessoa6.fala();