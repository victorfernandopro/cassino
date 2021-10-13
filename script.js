let display = document.querySelector('.display');
let resultado = document.querySelector('.resultado');
let numeros = document.querySelector('.numeros')
let numeroEscolhido = null;

numeros.addEventListener('click', (e)=>numeroEscolhido = e.target.value)

const sortear = () => {
    let numeroSorteado = Math.round((Math.random()*9)+1);
    display.innerText = numeroSorteado;
    if (numeroSorteado == numeroEscolhido){
        resultado.innerText = 'Parabéns! Você ganhou.'
    } else {
        resultado.innerText = 'Não foi dessa vez. Tente novamente!'
    }
}

const resetar = () => {
    display.innerText = '$'
    resultado.innerText = 'Clique em Sortear para começar'
}