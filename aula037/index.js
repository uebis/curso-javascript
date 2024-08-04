//            0123...
// const nome = 'Luiz Otávio';

// for (let i= 0; i< nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for ( let valor of nome) {
//     console.log(valor);
// }

const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i=0; i < nomes.length; i++) {
    console.log(nomes)
}

console.log('####')

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####')

for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

nomes.forEach(function(valor, índice, array) {
    console.log(valor, índice, array);
});

const pessoa =  {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (let valor of pessoa) {
//     console.log(valor); // esse método não é possível para objetos
// }

// For clássico - geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)