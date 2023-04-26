class ContaBancaria {

  public numeroConta: number;
  public titular: string;
  public saldo: number;

  constructor(numeroConta: number, saldo: number, titular: string) {

    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.titular = titular;
  }

  depositar(valor: number): string {

    if (valor > 0) {

      return `${this.saldo += valor}`;
    }
    else {

      return "Valor inválido";
    }
  }

  sacar(valor: number): string {

    if (valor <= this.saldo && valor > 0) {
      this.saldo -= valor;
      return `Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`;
    }
    else if (valor <= 0) {
      return "Valor inválido";
    }
    else if (valor > this.saldo){

      return "Saldo insuficiente";
    }
    else{
        
        return "Valor inválido";
    }
  }

  consultarSaldo(): string {

    return `O saldo atual é: R$ ${this.saldo}`;
  }

  static validarNumero(numero: string): boolean {

    if (numero.length !== 6) {
      return false;
    }

    for (let i = 0; i < numero.length; i++) {
      if (isNaN(parseInt(numero[i], 10))) {
        return false;
      }
    }

    return true;
  }
}

const conta1 = new ContaBancaria(123456, 1000, "João Arthur");
const conta2 = new ContaBancaria(654321, 2500, "Rian Ernesto");

console.log(conta1);
console.log(conta2);

console.log(ContaBancaria.validarNumero('123456'));
console.log(ContaBancaria.validarNumero('123ab6'));

conta1.depositar(500);
console.log(conta1.consultarSaldo());

conta1.sacar(200);
console.log(conta1.consultarSaldo());

console.log(conta1.sacar(2000));
console.log(conta1.consultarSaldo());

conta2.depositar(5000);
console.log(conta2.consultarSaldo());
