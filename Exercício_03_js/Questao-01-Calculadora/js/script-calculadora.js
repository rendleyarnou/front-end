const soma = () => {
    const num1 = document.querySelector("#numero1").value;
    const num2 = document.querySelector("#numero2").value;

    document.querySelector("#resultado").value = parseInt(num1) + parseInt(num2);
}

const divisao = () => {
    const num1 = document.querySelector("#numero1").value;
    const num2 = document.querySelector("#numero2").value;

    document.querySelector("#resultado").value = parseInt(num1) / parseInt(num2);
}

const multiplicacao = () => {
    const num1 = document.querySelector("#numero1").value;
    const num2 = document.querySelector("#numero2").value;

    document.querySelector("#resultado").value = parseInt(num1) * parseInt(num2);
}

const subtracao = () => {
    const num1 = document.querySelector("#numero1").value;
    const num2 = document.querySelector("#numero2").value;

    document.querySelector("#resultado").value = parseInt(num1) - parseInt(num2);
}

document.querySelector("#adicao").addEventListener('click', soma);
document.querySelector("#divide").addEventListener('click', divisao);
document.querySelector("#multiplica").addEventListener('click', multiplicacao);
document.querySelector("#subtrai").addEventListener('click', subtracao);

