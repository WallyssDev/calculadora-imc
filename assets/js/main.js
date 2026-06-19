function tabelaIMC() {

    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    function calcularIMC(altura, peso) {
        return peso / (altura * altura);
    }

    function resultadoIMC(imc) {
        if (imc < 18.5) return `Abaixo do peso`;
        if (imc >= 18.5 && imc <= 24.9) return `Peso normal`;
        if (imc > 24.9 && imc <= 29.6) return `Sobrepeso`;
        if (imc > 29.6 && imc <= 34.9) return `Obesidade grau 1`;
        if (imc > 34.9 && imc <= 39.9) return `Obesidade grau 2`;
        if (imc > 39.9) return `Obesidade grau 3`;

    }

    function recebeEventoForm(e) {
        e.preventDefault();
        resultado.innerHTML = '';

        const peso = Number(form.querySelector('#peso').value);
        let altura = Number(form.querySelector('#altura').value);
        if (altura > 3) altura = altura / 100;
        const p = document.createElement('p');
        if (!Number.isNaN(peso) && !Number.isNaN(altura) && peso > 0 && altura > 0) {
            const imc = calcularIMC(altura, peso);
            p.classList.add('resultado-sucesso');
            p.innerHTML = `<strong>IMC: ${imc.toFixed(2)}</strong> <br> ${resultadoIMC(imc)}`;
        } else {
            p.classList.add('resultado-erro');
            p.textContent = `Por favor, insira dados válidos.`;
            setTimeout(() => {
                p.remove();
                resultado.textContent = `Seu resultado aparecerá aqui`
            }, 5000);
            
        }
        resultado.appendChild(p);
        form.reset();
    }
    form.addEventListener('submit', recebeEventoForm);
}




tabelaIMC();