import Cliente from "./Cliente.js";

export default class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get saldo() { return this._saldo }

    get cliente() { return this._cliente }

    set cliente(cliente) { if (cliente instanceof Cliente) this._cliente = cliente }
    
    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            return 0;
        }
    }

    depositar(valor) {
        if (valor <= 0) { return; }
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}