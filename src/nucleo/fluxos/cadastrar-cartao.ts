import CartaoBD from "../../infra/cartao-bd";
import Cartao from "../dados/cartao";

export default class CadastrarCartao {
    executar(nome: string){

        const cartaoComMesmoNome = CartaoBD.obterPorNome(nome)

        if(cartaoComMesmoNome) {
            throw new Error("Cartão já cadastrado")
        }
        const novoCartao = new Cartao(nome) 
        CartaoBD.salvar(novoCartao)
    }
}