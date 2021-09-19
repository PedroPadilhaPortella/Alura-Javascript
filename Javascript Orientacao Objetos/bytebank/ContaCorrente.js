import Cliente from './Cliente.js';

export default class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    get saldo() { return this._saldo }

    agencia;
    get cliente() { return this._cliente }
    set cliente(cliente) { if(cliente instanceof Cliente)  this._cliente = cliente  }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }
    
    depositar(valor) {
        if(valor <= 0) {
            return;
        }

        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}