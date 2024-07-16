// Dados primitivos: String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
let umaString = "Um \"texto\""; // pode usar a barra invertida para anaular um caractere
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // udefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome, nome);


// referência
const a = [1, 2];
const b = a;

console.log(a, b);
b.push(3);
console.log(a, b);