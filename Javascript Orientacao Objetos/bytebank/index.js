import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';
import ContaPoupanca from './ContaPoupanca.js';
import Conta from './Conta.js';

//Cliente 01
const cliente01 = new Cliente('Marcos  Silva', '834.123.341-12')

//Cliente 02
const cliente02 = new Cliente ('Pedro Portella', '423.654.217-09')

//Conta do Cliente 01
const cc01 = new ContaCorrente(cliente01, 1001)
cc01.depositar(2000)
cc01.sacar(500)

//Conta do Cliente 02
const cc02 = new ContaCorrente(cliente02, 1002)
cc01.transferir(600, cc02);

console.log(cc01);
console.log(cc02);
console.log(`Quantidade de Contas: ${ContaCorrente.numeroDeContas}`);

//Conta Poupança do Cliente 01
const cc03 = new ContaPoupanca(120, cliente01, 1001);
console.log(cc03);