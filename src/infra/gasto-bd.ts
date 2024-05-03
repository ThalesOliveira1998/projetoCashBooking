import Gasto from "../nucleo/dados/operacoes/gasto"

export default class GastoBD {
    private static lista: Gasto[] = []

   static salvar(gasto: Gasto): void {
        this.lista.push(gasto)
    }
    static obter(): Gasto[] {
        return this.lista
    }
}