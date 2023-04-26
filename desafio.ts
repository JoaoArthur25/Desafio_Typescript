class ContaBancaria {

    public numeroConta: number;
    public titular: string;
    public saldo: number;
  
    constructor(numeroConta: number, saldo: number, titular: string) {

      this.numeroConta = numeroConta;
      this.saldo = saldo;
      this.titular = titular;
    }
  
    depositar(valor: number){

        if(valor > 0){

            this.saldo += valor;
    }
        else{

            console.log("Valor inválido");
        }
    }

    sacar(valor: number){

        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }
        else if(valor <= 0){
            console.log("Valor inválido");
        }
        else{
            this.saldo -= valor;
        }
    }

    consultarSaldo(){

        return console.log('O saldo atual é: R$' + this.saldo);
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
    conta1.consultarSaldo();

    conta1.sacar(200);
    conta1.consultarSaldo();

    conta1.sacar(2000);
    conta1.consultarSaldo();
    
    conta2.depositar(5000);
    conta2.consultarSaldo();
