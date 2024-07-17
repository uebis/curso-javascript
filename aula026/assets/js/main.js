function receberForm() {

    const mensagem = document.querySelector('#mensagem');
    const form = document.querySelector('#form');


    function calcularImc (evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;
        const imc = peso / (altura**2);
        let resultado;

        if (imc < 18.5) {
            resultado = 'Abaixo do Peso';
        } else if (imc < 24.9) {
            resultado = 'Peso normal';
        } else if (imc < 29.9) {
            resultado = 'Sobrepeso';
        } else if (imc < 34.9) {
            resultado =  'Obesidade grau 1';
        } else if (imc < 39.9) {
            resultado = 'Obesidade grau 2';
        } else {
            resultado = 'Obesidade grau 3';
        }

        mensagem.innerHTML = `<p>Seu imc é ${imc.toFixed(1)} (${resultado})</p>`;

    }

    form.addEventListener('submit', calcularImc);

}

receberForm ();