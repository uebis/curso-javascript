// return em false e true

/*
&& -> false && true -> vai retornar o último valor verdadeiro ou o último valor falso
|| -> true || false -> vai retornar o primeiro valor verdadeiro ou o último valor falso

false -> literal

FALSY VALUES: falsos não literais
    - 0
    - '' "" ``
    - null / undefined
    - NaN



em, ujma expressão verdadeira, ele vai retornar o último valor. Em um expressáo falsa, ele vai retornar o primeiro item falso.
*/

//           true      true   ---- expressão verdadeira, retorna o último item. 
// console.log('Luiz' && 'Maria');


// //           true     false   true      false ---- expressão falsa, retorna o primeiro falso
// console.log('Luiz' && NaN && 'Maria' && null);

// function falaOi() {
//     return 'Oi'
// }

// const vaiExecutar = 'Joãozinho';
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true);

// const corUsuário = null;
// const corPadrao = corUsuário || 'preto';

// console.log(corPadrao);

const a  = 0;
const b = null;
const c = 'false'; // Aqui
const d = false;
const e = NaN;

console.log(a || b || c || d || e );

