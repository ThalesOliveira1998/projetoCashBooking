import Receita from "../nucleo/dados/operacoes/receita"

export default class ReceitaBD {
    private static lista: Receita[] = []

   static salvar(receita: Receita): void {
        this.lista.push(receita)
    }
    static obter(): Receita[] {
        return this.lista
    }
}