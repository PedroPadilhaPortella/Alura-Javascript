import Cliente from './Cliente.js';
import ContaCorrente from './ContaCorrente.js';

//Cliente 01
const cliente01 = new Cliente('Marcos  Silva', '834.123.341-12')

//Cliente 02
const cliente02 = new Cliente ('Pedro Portella', '423.654.217-09')

//Conta do Cliente 01
const cc01 = new ContaCorrente(1001, cliente01)
cc01.depositar(2000)
cc01.sacar(500)

//Conta do Cliente 02
const cc02 = new ContaCorrente(1002, cliente02)
cc01.transferir(600, cc02);

console.log(cc01);
console.log(cc02);
console.log(`Quantidade de Contas: ${ContaCorrente.numeroDeContas}`);