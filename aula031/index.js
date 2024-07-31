// const verdadeira = true;

// // Let tem escopo de bloco {... bloco}
// // Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';
// var nome2 = 'Otávio'; // redeclarando
// console.log(nome, nome2)

// if (verdadeira) {
//     let nome = 'Otávio'; // criando
//     var nome2 = 'Rogério'; // redeclarando
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         var nome2 = 'Ronaldo'; // redeclarando
//         console.log(nome, nome2)
//     }
// }

// console.log(nome, nome2)


// function falaOi() {
//     var sobrenome = 'Miranda';
//     if (verdadeira) {
//         var nome = 'Luiz';
//         let nome2 = 'Luiz'
//         console.log(sobrenome);
//      }

//      // console.log(nome2); // não pode porque nome2 está dentro de outro bloco
// }

// // console.log(nome) // não pode porque nome está dentro da função.
// falaOi()

console.log(sobrenome2); // mesmo criando a variável depois, ele a encontra e a deckara como se estivesse no topo do documento. undefined até o momento. Apenas acontece com var

var sobrenome2 = 'Miranda';