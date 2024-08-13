
// try {

//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe');
//     console.log(err); // não fazer isso
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.'); // Não mostrar para o usuário final
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.');
}