// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "impar";
    console.log(i, par);
}
//                 0       1      2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Pêssego', 'Morango'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`índice ${i}:`, frutas[i]);

}