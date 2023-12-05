//VARIÁVEIS
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const result = document.querySelector('#resultado');

//EXIBIÇÃO
document.getElementById('calcular').addEventListener('click', () => {
    const alturaValue = parseFloat(altura.value);
    const pesoValue = parseFloat(peso.value);

    //FÓRMULA
    if (!isNaN(alturaValue) && !isNaN(pesoValue)) {
        const imc = (pesoValue / (alturaValue ** 2)).toFixed(2);
        let classification = '';

        if (imc < 17) {
            classification = "muito abaixo do peso!";
        } else if (imc >= 17 && imc <= 18.49) {
            classification = "abaixo do peso!";
        } else if (imc >= 18.5 && imc <= 24.99) {
            classification = "com peso normal!";
        } else if (imc >= 25 && imc <= 29.99) {
            classification = "acima do peso!";
        } else if (imc >= 30 && imc <= 34.99) {
            classification = "com obesidade grau 1!";
        } else if (imc >= 35 && imc < 39.99) {
            classification = "com obesidade grau 2!";
        }

        exibirResultado(imc, classification);
    }
});

function exibirResultado(imc, classification) {
    result.textContent = `Seu IMC é ${imc} e você está ${classification}`;
    result.style.display = 'block';
    result.style.color = '#444';
}
