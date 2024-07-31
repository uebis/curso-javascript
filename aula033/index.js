const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const {
    nome: n = '',
    sobrenome,
    endereco: {rua, numero},
    endereco
} = pessoa; // dá para mudar o nome da variável de "nome" para "n" e atribuir um valor padrão caso a variável não exista no objeto. No endereco, separei entre rua e numero.
console.log(n, sobrenome, rua, endereco);

const {nome, ...resto} = pessoa;

console.log(resto);