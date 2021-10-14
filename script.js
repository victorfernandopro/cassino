let display = document.querySelector('.display');
let resultado = document.querySelector('.resultado');
let numeros = document.querySelector('.numeros')
let numero = document.querySelectorAll('.numero')
let credito = document.querySelector('.credito')

let numeroEscolhido = null;
let creditos = 0;

credito.innerText = creditos

for(let i=0;i<numero.length;i++){
    numero[i].addEventListener('click', (e)=>selecionar(e))
}

const sortear = () => {
    creditos--;
    credito.innerText = creditos
    if(numeroEscolhido !== null){
        let numeroSorteado = Math.round((Math.random()*9)+1);
        display.innerText = numeroSorteado;
        if (numeroSorteado == numeroEscolhido){
            creditos = creditos + 10;
            credito.innerText = creditos
            resultado.innerText = 'Parabéns! Você ganhou 10 créditos.';
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
    creditos = 0;
    credito.innerText = creditos
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

const inserirCreditos = () => {
    creditos = creditos + 10;
    credito.innerText = creditos
}