import Conta from './Conta.js';

export default class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        let taxa = 1.05;
        valor *= taxa
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }
}