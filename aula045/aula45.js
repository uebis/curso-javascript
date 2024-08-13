// try {
//     // É executada quando não há erros
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei um arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu Erro');
//     } finally {
//         console.log('Também sou finally.')
//     }

// } catch (e) {
//     // É executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hours: '2-digit',
        minutes: '2-digit',
        seconds: '2-digit',
        hours12: false
    });
}

try {

    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
// Tratar erro
} finally {
    console.log('Tenha um bom dia.')
}