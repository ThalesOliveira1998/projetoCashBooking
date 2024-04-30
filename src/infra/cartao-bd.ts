import Cartao from "../nucleo/dados/cartao";

export default class CartaoBD {
    private static lista: Cartao[] = []

   static salvar(cartao: Cartao): void {
        this.lista.push(cartao)
    }
    static obter(): Cartao[] {
        return this.lista
    }
    static obterPorNome(nome: string): Cartao | null {
       const cartaoComMesmoNome = this.lista.find((c) => c.nome === nome)
       return cartaoComMesmoNome ?? null
    }
}