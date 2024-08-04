// For in -> Lê os índices ou chaves do objeto
//                0       0       0
const frutas = ['Pêra', 'Maçã', 'Uva']; // vetor: aray de uma única dimensão

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome:'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const chave = 'nome';
// console.log(pessoa[chave]);