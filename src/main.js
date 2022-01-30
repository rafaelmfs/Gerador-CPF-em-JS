import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

const button = document.querySelector('#gerar');

function formatCPF(cpf){
    return cpf.slice(0, 3) 
        + '.' + cpf.slice(3, 6) 
        + '.' + cpf.slice(6,9) 
        + '-' + cpf.slice(9,11);
}

button.addEventListener('click', ()=>{
    let div = document.querySelector('.result')
    let cpf = new GeraCPF();

    div.innerHTML = formatCPF(cpf.gerarCPF());
})

