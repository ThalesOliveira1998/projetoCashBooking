import CartaoBD from "../../../infra/cartao-bd";
import Cartao from "../../dados/operacoes/cartao"


export default class ObterCartoesPorNome {
    executar(nome: string): Cartao | null {
        return CartaoBD.obterPorNome(nome);
    }
}
 



