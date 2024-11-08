interface IPessoa {
    nome: string,
    idade: number,
    nascimento: Date,

    getNome(): string,
    getIdade(): number,
}

export class pessoa implements IPessoa {
    public nome: string
    public nascimento: Date
    public idade: number

    constructor(nome: string, nascimento: Date){
        this.nome = nome
        this.nascimento = nascimento
    }

    public getNome(): string {
        return this.nome
    }

    public getIdade(): number {
        return 0
    }
}