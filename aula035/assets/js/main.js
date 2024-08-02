const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


const tag = elementos.map(elemento => elemento.tag);
const texto = elementos.map(elemento => elemento.texto);


const container = document.querySelector('.container');


function criarElemento(tag, texto) {
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    return elemento;
}

for (let i = 0; i < elementos.length; i++) {
    const novoElemento = criarElemento(tag[i], texto[i]);
    container.appendChild(novoElemento);
}