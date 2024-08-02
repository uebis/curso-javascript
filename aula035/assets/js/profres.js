const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    console.log(tag);
    let tagCriada = document.createElement(tag);
    //tagCriada.innerHTML = texto;
    //tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado); // linha necessária apenas usando o modo createTextNode
    div.appendChild(tagCriada)
}

container.appendChild(div);