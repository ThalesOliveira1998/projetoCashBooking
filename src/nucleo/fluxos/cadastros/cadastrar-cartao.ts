import CartaoBD from "../../../infra/cartao-bd";
import Cartao from "../../dados/operacoes/cartao";

export default class CadastrarCartao {
    executar(nome: string, datetime: Date){

        const cartaoComMesmoNome = CartaoBD.obterPorNome(nome)

        if(cartaoComMesmoNome) {
            throw new Error("Cartão já cadastrado")
        }
        const novoCartao = new Cartao(nome, datetime); 
        CartaoBD.salvar(novoCartao)
    }
}