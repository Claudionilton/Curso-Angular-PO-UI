export class pessoa {
  public nome = "Claudionilton";
  public sobrenome = "Junior";
  private nomeCompleto = `${this.nome} ${this.sobrenome}`;

  public constructor(nome: string) {}
  public retNomeCompleto() {
    return this.nomeCompleto;
  }
}

const claudionilton = new pessoa("");

claudionilton.retNomeCompleto();

const exe02 = (p1: number) => {
  let nome: string = "";
};
exe02(10);
class pessoa1 {
  public nome: string;
  public getNome(): string {
    return this.nome;
  }

  public constructor(nome: string) {
    this.nome = nome;
  }
}

let joao = new pessoa("");

const soma1 = (p1: number): number => p1++;

function sub1(p1: number): number {
  return p1--;
}
//Array de numeros
const soma = (p: Array<number> /*ou number[]*/): number => {
  let res: number = 0;

  p.forEach(function (e) {
    res += e;
  });

  return res;
};

//Tipagem Any

let nome: any = 0;
nome = "";
nome = true;

let nome1: any[];
nome1 = ["", 3, true];

let nome2: Array<any>;
nome2 = ["", 3, true];

//Return Void

class pessoa2 {
  public nome: string;
  public data_nascimento: Date;
  private idade: number;

  public getIdade(): void {
    return;
  }
}
