const evento = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

function getH1() {
    return document.querySelector('h1');
}

function addText(h1) {
    const formattedDate = evento.toLocaleDateString('pt-BR', options);
    h1.innerHTML = formattedDate;
}

const h1 = getH1();
addText(h1);
