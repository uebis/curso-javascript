//               0123456789
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString[40]); // undefined pois não tem isso tudo de caractere
console.log(umaString[-1]); // undefined pois não tem um caractere de índice negativo
console.log(umaString.charAt(7));
console.log(umaString.charAt(40)); // retornar vazio, não dá erro.
console.log(umaString.concat(' em', ' um lindo dia.'));
console.log(umaString + ' em', 'um lindo dia.');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('roeu')); //  encontrar em qual índice come;a a palavara roeu
console.log(umaString.indexOf('roeu', 6)); // encontrar o índice de roeu a partir do índice 6
console.log(umaString.indexOf('roeu', 8)); // encontrar o índice de roeu a partir do índice 8 (não encontra, pois começa no 7)
console.log(umaString.lastIndexOf('r', 8)); // encontra o último r da sentença a partir do 8
console.log(umaString.match(/[a-z]/g)); // retorna todas as letras minúsculas
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/)); // retrona o índice em que a primeira letra minúscula aparece
console.log(umaString.replace('rato', 'ratinho'));
console.log(umaString.replace(/rato/, 'ratinho')); // também aceita expressões regulares
console.log(umaString.replace(/r/, '#')); // apenas o primeiro r é substituído
console.log(umaString.replace(/r/g, '#')); // agora todos os r são substituídos
console.log(umaString.length);
console.log(umaString.slice(2, 5));
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' ')); // criar um string, separando as palavras por espaço ' '
console.log(umaString.split('r'));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
