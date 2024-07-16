// Arrays

//            0123456789
const nome = 'Luiz Otávio'
console.log(nome[0]);

//               0       1        2       3          4
const alunos = ['Luiz', 'Maria', 'João', 'Fabiana', 'André']; // pode receber mais de um tipo de dado, mas não é uma boa prática

console.log(alunos.length); // mostra o índice após o final

// alunos[alunos.length] = 'Luiza'; // adiciona um elemento a uma array (modo não prático)
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos.push('Luiza'); // adiciona um nome a uma array
// alunos.push('Fábio');
// alunos.push('Naldo', 'Flores');

// alunos.unshift('Luiza'); // adiciona no início da array

// alunos.pop(); // remove o último elemento do array
// const removido = alunos.pop(); // Adiciona o elemento que foi removido em uma variável

// delete alunos[1]; // detela i índice um da array, mas ele fica como "undefined"

// console.log(alunos.slice(0,3)); // fatia do 0 ao 3 (não incluído)
// console.log(alunos.slice(0,-2));

// console.log(typeof alunos); // array é objeto
// console.log(alunos instanceof Array); // alunos é array?

console.log(alunos);
console.log(alunos.length);




// console.log(alunos);
// console.log(alunos[0]);
// alunos[0] = 'Eduardo'; // posso editar assim