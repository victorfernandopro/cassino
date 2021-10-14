let display = document.querySelector('.display');
let resultado = document.querySelector('.resultado');
let numeros = document.querySelector('.numeros')
let numero = document.querySelectorAll('.numero')

let numeroEscolhido = null;

for(let i=0;i<numero.length;i++){
    numero[i].addEventListener('click', (e)=>selecionar(e))
}

const sortear = () => {
    if(numeroEscolhido !== null){
        let numeroSorteado = Math.round((Math.random()*9)+1);
        display.innerText = numeroSorteado;
        if (numeroSorteado == numeroEscolhido){
            resultado.innerText = 'Parabéns! Você ganhou.';
        } else {
            resultado.innerText = 'Não foi dessa vez. Tente novamente!';
        }
    } else {
        resultado.innerText = 'Nenhum número foi selecionado';
        setTimeout(()=>{
            resultado.innerText = 'Escolha um número e clique em Sortear para começar';
        },1200)
    }
}

const resetar = () => {
    for(let i=0;i<numero.length;i++){
        numero[i].classList.remove('selecionado');
    }
    
    display.innerText = '$';
    resultado.innerText = 'Escolha um número e clique em Sortear para começar';
    numeroEscolhido = null;
}

const selecionar = e => {
    for(let i=0;i<numero.length;i++){
        numero[i].classList.remove('selecionado');
    }
    display.innerText = '$';
    resultado.innerText = 'Escolha um número e clique em Sortear para começar';

    numeroEscolhido = e.target.value;
    e.target.classList.add('selecionado')
}