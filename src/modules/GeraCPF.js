import ValidarCPF from './ValidarCPF';

export default class GeraCPF{
    rand(min=100000000, max=999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    gerarCPF(){
        const cpfInicial = this.rand();
        const digito1 = ValidarCPF.geraDigito(cpfInicial);
        const digito2 = ValidarCPF.geraDigito(cpfInicial + digito1);
        const cpf = cpfInicial + digito1 + digito2;
        return cpf;
    }
}
